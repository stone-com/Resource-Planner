export const getCapacity = (resourceArray) => {
  console.log(resourceArray);
  let totalResourcesCapacity = resourceArray.length * 100;

  //   create array containing only resource.availability value, so we can reduce it and get the sum
  let availabilityValues = [];
  resourceArray.forEach((resource) => {
    availabilityValues.push(resource.availability);
  });
  console.log(availabilityValues);
  let availabilityTotal = availabilityValues.reduce((a, b) => a + b, 0);
  console.log(availabilityTotal);

  return Math.floor((availabilityTotal / totalResourcesCapacity) * 100);
};
