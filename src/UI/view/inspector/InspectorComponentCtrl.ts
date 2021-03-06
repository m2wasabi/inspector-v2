import Vue from 'vue'
import Component from 'vue-class-component'
import Attribute from './InspectorAttribute.vue';
import InspectionComponentData from "./InspectionComponentData";
import {Prop} from "vue-property-decorator";
@Component({components:{Attribute}})
export default class InspectorComponent extends Vue{
  @Prop()
  public target:InspectionComponentData;

  public open:boolean = true;

  public get componentName():string{
    const names = this.target.componentFQN.split(".");
    return names[names.length - 1];
  }

  public get caretClass():string[]{
    return ["fa fa-fw toggle-caret",this.open?"fa-caret-down":"fa-caret-right"];
  }

  public toggle():void{
    this.open = !this.open;
  }


}
