//speed detector solution

function checkSpeed(speed){
    const speedLimit = 70;
    if(speed < speedLimit){
        return "Ok";
    }else{
        const demeritPoints = math.floor((speed-speedLimit) /5);
        if(demeritPoints > 12){
            return "License suspended";
        } else {
            return `Demerit points: ${demeritPoints}`;
        }
    }
}

//prompting user for input
const userSpeed = parseInt(prompt("Enter your speed:"));
//logging the results
console.log(checkSpeed(userSpeed));