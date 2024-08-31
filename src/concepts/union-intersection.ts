type Vehicle =
  | { type: "car"; wheels: number } // Union type
  | { type: "bike" };

type Point_2D = {
  x: number;
  y: number;
};

type Point_3D = Point_2D & { // Intersection type
  z: number;
};



let p_2D: Point_2D = { x: 1, y: 2 };
let p_3D: Point_3D = { x: 1, y: 5, z: 3 };

p_2D = p_3D; // OK, because Point3D has at least the same properties as Point2D; "excess" properties are allowed.

