// decorator
function logged(constructorFn: Function) {
  console.log(constructorFn);
}

@logged
class Person {
  constructor() {
    console.log("Hi");
  }
}

// Factory
function logging(value: boolean) {
  return value ? logged : () => {};
}

@logging(true)
class Car {}

// Advanced
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  };
}

@logging(true)
@printable
class Plant {
  name = "Green Plant";
}
const plant = new Plant();
// プロパティ 'print' は型 'Plant' に存在しません。
// plant.print();
(<any>plant).print();

//
//
//
// Method Decorator
function editable(value: boolean) {
  return function(
    target: any,
    propName: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.writable = value;
  };
}

function overwritable(value: boolean) {
  return function(target: any, propName: string): any {
    const newDescriptor: PropertyDescriptor = {
      writable: value
    };
    return newDescriptor;
  };
}

class Project {
  @overwritable(false)
  projectName: string;

  // if error
  // Cannot assign to read only property 'projectName' of object '#<Project>'
  // => set strict to false
  constructor(name: string) {
    this.projectName = name;
  }

  @editable(false)
  calcBuget() {
    console.log(1000);
  }
}

const project = new Project("Super project");
project.calcBuget();
project.calcBuget = function() {
  console.log(2000);
};
project.calcBuget();
console.log(project);

// Parameter Decorator
function printInfo(target: any, mothodName: string, paramIndex: number) {
  console.log("Target: ", target);
  console.log("MethodName: ", mothodName);
  console.log("paramIndex: ", paramIndex);
}

class Course {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  printStudentNumbers(mode: string, @printInfo printAll: boolean) {
    if (printAll) {
      console.log(10000);
    } else {
      console.log(2000);
    }
  }
}
const course = new Course("Super Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);
