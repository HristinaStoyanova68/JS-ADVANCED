function contructionCrew(input) {
    const worker = { ...input };

    if (worker.dizziness === true) {

        const neededWaterAmount = worker.weight * worker.experience * 0.1;
        worker.levelOfHydrated += neededWaterAmount;
        worker.dizziness = false;
    }
 
    return worker;
}




contructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
});

console.log('...........');

contructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
});

console.log('...........');


contructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
});



