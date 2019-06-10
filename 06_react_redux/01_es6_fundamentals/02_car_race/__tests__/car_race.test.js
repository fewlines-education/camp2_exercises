const {sportCar, electricCar, cityCar, sportMoto, scooter, Track, Locomotion, Car, Moto} = require("../codeTesting");
const F1 = require("../car_race");

afterEach(() => {
  Locomotion.latestId = 0;
});

test("Tracks can contain motos and cars", () => {
  const newEletricCar = new F1.Car(undefined, 130, 250, 2.5, 'electricity');
  const newSportMoto = new F1.Moto(undefined, 180, 20, 3, 'gasoline');

  const newTrack = new F1.Track('test', 1000, [newEletricCar,newSportMoto]);
  // console.log(newEletricCar);
  expect(newTrack.participant[0]).toEqual(newEletricCar);
  expect(newTrack.participant[1]).toEqual(newSportMoto);
});

test("Cars and Moto inherited properties from Locomotion", () => {
  const newEletricCar = new F1.Car(undefined, 130, 250, 2.5, 'electricity');
  const newSportMoto = new F1.Moto(undefined, 180, 20, 3, 'gasoline');
  // console.log(newEletricCar);

  expect(newEletricCar._id).toBeDefined();
  expect(newSportMoto._id).toBeDefined();
});

test("Cars have by default 4 wheels but can be assigned otherwise", () => {
  const newEletricCar = new F1.Car(undefined, 130, 250, 2.5, 'electricity');
  const newWeirdCar = new F1.Car(3, 130, 250, 2.5, 'electricity');

  expect(newEletricCar.wheels).toEqual(4);
  expect(newWeirdCar.wheels).toEqual(3);
});

test("Moto have by default 2 wheels but can be assigned otherwise", () => {
  const newMoto = new F1.Moto(undefined, 130, 250, 2.5, 'electricity');
  const newWeirdMoto = new F1.Moto(3, 130, 250, 2.5, 'electricity');

  expect(newMoto.wheels).toEqual(2);
  expect(newWeirdMoto.wheels).toEqual(3);
});

test("Cars and Motos have the required fields", () => {
  const newMoto = new F1.Moto(undefined, 130, 250, 2.5, 'electricity');
  const newWeirdCar = new F1.Car(3, 130, 250, 2.5, 'electricity');
  const actualMoto = {
      _id: newMoto._id,
      wheels: 2 ,
      maxSpeed: 130,
      tank: 250,
      consumption: 2.5,
      fuelType: 'electricity'
    }
  const actualCar = {
    _id: newWeirdCar._id,
    wheels: 3,
    maxSpeed: 130,
    tank: 250,
    consumption: 2.5,
    fuelType: 'electricity'
  }

  expect(newMoto).toMatchObject(actualMoto);
  expect(newWeirdCar).toMatchObject(actualCar);
});

test("The five vehicules have been initiated with the right data", () => {
  let sportCarMock = new Car(undefined ,200,40,5,'gasoline');
  let electricCarMock = new Car(undefined, 130, 250, 2.5, 'electricity');
  let cityCarMock = new Car(undefined, 150, 80, 0.5, 'gasoline');
  let sportMotoMock = new Moto(undefined, 180, 20, 3, 'gasoline')
  let scooterMock = new Moto(undefined, 70, 30, 1.5, 'gasoline');

  expect(sportCar).toMatchObject(sportCarMock);
  expect(electricCar).toMatchObject(electricCarMock);
  expect(cityCar).toMatchObject(cityCarMock);
  expect(sportMoto).toMatchObject(sportMotoMock);
  expect(scooter).toMatchObject(scooterMock);
})

test("The track's ordering algorithm for one lap works fine", () => {
  let trackMock = new Track('Paris-Roubaix', 280, [sportCar, electricCar, cityCar, sportMoto, scooter]);
  let resultTrack = trackMock.participantLapOrder()
  let listLoco = trackMock.participant.map((locomotion, iteration) => {
    let time = trackMock.distance / locomotion.maxSpeed;
    let fuelConsumption = trackMock.distance*locomotion.consumption;
    return {
      id: locomotion._id,
      time: time,
      fuelConsumption: fuelConsumption
    }
  });
  listLoco.sort(function(a, b) {
    return a.time - b.time;
  })
  let resultTrackMock = listLoco;

  expect(resultTrackMock).toMatchObject(resultTrack);
});

test("The track's ordering algorithm for some hours of run is fine", () => {
  let trackMock = new Track('Paris-Roubaix', 280, [sportCar, electricCar, cityCar, sportMoto, scooter]);
  let resultTrack = trackMock.participantHourOrder(10)
  let listLoco = trackMock.participant.map((locomotion, iteration) => {
    let km = 10 * locomotion.maxSpeed;
    let fuelConsumption = km*locomotion.consumption;
    return {
      id: locomotion._id,
      km: km,
      fuelConsumption: fuelConsumption
    }
  });
  listLoco.sort(function(a, b) {
    return a.km - b.km;
  })
  let resultTrackMock = listLoco;


  expect(resultTrackMock).toMatchObject(resultTrack);
});
