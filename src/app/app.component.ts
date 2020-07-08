import{
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory 
} from '@angular/core';

import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui';
  
  notificationArray = [{'id':0,'name':'Home'},
    {'id':1,'name':'About'},
    {'id':2,'name':'Map'},
    {'id':3,'name':'Notification'},
    {'id':4,'name':'Profile'}];
    
  componentRef: any;
  @ViewChild('loadComponent', { read: ViewContainerRef, static: false }) entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }
  createComponent(Id: number) {
    console.log(Id)
    this.entry.clear();
    if (Id == 0) {
      const factory = this.resolver.resolveComponentFactory(PostComponent);
      this.componentRef = this.entry.createComponent(factory);
    }
    else if (Id == 1) {
      const factory = this.resolver.resolveComponentFactory(AboutComponent);
      this.componentRef = this.entry.createComponent(factory);
    } else if (Id == 2) {
      const factory = this.resolver.resolveComponentFactory(MapComponent);
      this.componentRef = this.entry.createComponent(factory);
    } else if (Id == 3) {
      const factory = this.resolver.resolveComponentFactory(NotificationComponent);
      this.componentRef = this.entry.createComponent(factory);
    } else if (Id == 4) {
      const factory = this.resolver.resolveComponentFactory(ProfileComponent);
      this.componentRef = this.entry.createComponent(factory);
    } else if (Id == 5) {
      const factory = this.resolver.resolveComponentFactory(LoginComponent);
      this.componentRef = this.entry.createComponent(factory);
    }
  }
  destroyComponent() {
    this.componentRef.destroy();
  }
  
  selectName(id : number) {
    this.createComponent(id);
  }
  ngOnInit(){
    
  }
}
