// To import Teacher class:
import Teacher, { promote } from "./12_modules/teacher";
import React, { Component } from "react";
// 'react' -> is the module (third part library that stored inside of the node module folder)
// React -> is the default export from 'react' module
// Component -> is the Named export

// Default -> import ... from '';
// Named -> import {...} from '';

const teacher = new Teacher("Abdifatah", "B.S.");
console.log(teacher.teach());
