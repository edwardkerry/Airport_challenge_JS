describe("User Stories", function() {

  var plane, airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
    weather = new Weather();
  });

  // As an air traffic controller
  // So I can get passengers to a destination
  // I want to instruct a plane to land at an airport and confirm that it has landed

  it('An airport traffic controller should be able to instruct a plane to land and receive confirmation', function() {
    expect(plane.isFlying).toEqual(true);
    expect(plane.land(airport)).toEqual('The plane has landed at the airport');
    expect(plane.isFlying).toEqual(false);
    expect(airport.hangar).toContain(plane);

  });

  // As an air traffic controller
  // So I can get passengers on the way to their destination
  // I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

  it("An air traffic controller should be able to instruct a plane to take off and confirm it is no longer in the airport", function() {
    plane.land(airport);
    expect(plane.takeOff(airport)).toEqual('The plane has departed the airport');
    expect(plane.isFlying).toEqual(true);
    expect(airport.hangar).not.toContain(plane);

  });

  // As an air traffic controller
  // To ensure safety
  // I want to prevent takeoff when weather is stormy

  xit('An air traffic controller should be able to instruct a plane not to take off when weather is stormy', function() {
    plane.land(airport);
    spyOn(Math, 'random').and.returnValue(0.9);
    expect(function () { plane.takeOff(airport); }).toThrowError('Cannot take off when weather is stormy');
  });
});
