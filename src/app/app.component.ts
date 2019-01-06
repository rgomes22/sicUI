import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "./Services/auth-service.service";
import { IsRoleService } from './Services/is-role.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  
  public isCliente: boolean;
  public isGestor: boolean;

  title = "Stock In Closet";
  constructor(public auth: AuthServiceService, public roleService: IsRoleService) {
    if (this.auth.isAuthenticated()) {
      if (this.auth.getRoleFromToken() === "cliente") {
        this.isCliente = true;
        this.isGestor = false;
      } else if (this.auth.getRoleFromToken() === "gestor") {
        this.isGestor = true;
        this.isCliente = false;
      }
    } else {
      this.isCliente = false;
      this.isGestor = false;
    }
    this.roleService.changeRole(this.isCliente, this.isGestor);
  }
  ngOnInit() {
    this.roleService.currentMessageIsClient.subscribe(isCliente => this.isCliente = isCliente);
    this.roleService.currentMessageIsGestor.subscribe(isGestor => this.isGestor = isGestor);
    /* if (this.auth.isAuthenticated()) {
      if (this.auth.getRoleFromToken() === "cliente") {
        this.isCliente = true;
        this.isGestor = false;
      } else if (this.auth.getRoleFromToken() === "gestor") {
        this.isGestor = true;
        this.isCliente = false;
      }
    } else {
      this.isCliente = false;
      this.isGestor = false;
    } */
  }
}
