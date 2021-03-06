ExampleData = Object.toJSON( 
[{"_class": "Datatype", "name": "String"}, 
{"_class": "Class", "name": "Expression", "abstract": true}, 
{"_class": "Class", "name": "Sqrt", "superTypes": "Expression", "features": 
  {"_class": "Feature", "name": "expr", "kind": "containment", "lowerLimit": 1, "upperLimit": 1, "type": "Expression"}}, 
{"_class": "Class", "name": "Fraction", "superTypes": "Expression", "features": [
  {"_class": "Feature", "name": "expr1", "kind": "containment", "lowerLimit": 1, "upperLimit": 1, "type": "Expression"}, 
  {"_class": "Feature", "name": "expr2", "kind": "containment", "lowerLimit": 1, "upperLimit": 1, "type": "Expression"}]}, 
{"_class": "Class", "name": "Mult", "superTypes": "Expression", "features": [
  {"_class": "Feature", "name": "expr1", "kind": "containment", "lowerLimit": 1, "upperLimit": 1, "type": "Expression"}, 
  {"_class": "Feature", "name": "expr2", "kind": "containment", "lowerLimit": 1, "upperLimit": 1, "type": "Expression"}]}, 
{"_class": "Class", "name": "Plus", "superTypes": "Expression", "features": [
  {"_class": "Feature", "name": "expr1", "kind": "containment", "lowerLimit": 1, "upperLimit": 1, "type": "Expression"}, 
  {"_class": "Feature", "name": "expr2", "kind": "containment", "lowerLimit": 1, "upperLimit": 1, "type": "Expression"}]}, 
{"_class": "Class", "name": "Neg", "superTypes": "Expression", "features": 
  {"_class": "Feature", "name": "expr", "kind": "containment", "lowerLimit": 1, "upperLimit": 1, "type": "Expression"}}, 
{"_class": "Class", "name": "Value", "superTypes": "Expression", "features": 
  {"_class": "Feature", "name": "value", "kind": "attribute", "lowerLimit": 1, "upperLimit": 1, "type": "String"}}]
);
