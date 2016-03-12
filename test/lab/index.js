import {Pipeline,precedes,follows} from "../src/index";

@precedes(Component2)
class Component1 {

  async execute( context ) {


  }

}

@follows(Component1)
class Component2 {

  async execute( context ) {

  }

}

val pipeline = Pipeline.create({
  components: [
    {
      type: Component1,
      precedes: [Component2],
      useMetadata: true
    },
    {
      type: Component2,
      follows: [Component1],
      useMetadata: true
    }
  ]
});

pipeline.execute({}, {
  trace: message => console.log(message)  // true should default to this
});