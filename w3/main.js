function determineHouseHoldpts() {
  if (numberInHouseHold === 1) {
    carbonFootPoints = carbonFootPoints + 14;
  } else if (numberInHouseHold === 2) {
    carbonFootPoints = carbonFootPoints + 12;
  } else if (numberInHouseHold === 3) {
    carbonFootPoints = carbonFootPoints + 10;
  } else if (numberInHouseHold === 4) {
    carbonFootPoints = carbonFootPoints + 8;
  } else if (numberInHouseHold === 5) {
    carbonFootPoints = carbonFootPoints + 6;
  } else if (numberInHouseHold === 6) {
    carbonFootPoints = carbonFootPoints + 4;
  } else if (numberInHouseHold > 6) {
    carbonFootPoints = carbonFootPoints + 2;
  }

  console.log(
    `based on the number of member of the household of ${numberInHouseHold} the points would be ${carbonFootPoints}.`
  );
}


const numberInHouseHold = 1;


//global scope

determineHouseHoldpts(3)
determineHouseHoldpts(4)


let carbonFootPoints = 0;
const Sizeofhousehold = 

function Householdsize() {
    if (size === "large") {
        carbonFootPoints = carbonFootPoints + 10;}
        else if (size === "medium") {
            carbonFootPoints = carbonFootPoints + 7;
        }
        else if (size === "small") {
            carbonFootPoints = carbonFootPoints + 4;
        }
        else if (size === "apartment") {
            carbonFootPoints = carbonFootPoints + 2;
        }
}
