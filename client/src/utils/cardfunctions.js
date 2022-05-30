export const getCapacity = (resourceArray) => {
  //   console.log(resourceArray);
  let totalResourcesCapacity = resourceArray.length * 100;

  //   create array containing only resource.availability value, so we can reduce it and get the sum
  let availabilityValues = [];
  resourceArray.forEach((resource) => {
    availabilityValues.push(resource.availability);
  });
  //   console.log(availabilityValues);
  let availabilityTotal = availabilityValues.reduce((a, b) => a + b, 0);
  //   console.log(availabilityTotal);

  return Math.floor((availabilityTotal / totalResourcesCapacity) * 100);
};

export const getTotalResources = (resourcesArray) => {
  return resourcesArray.length;
};

export const getHoursAvailable = (projectArray, resourceArray) => {
  // get total hours (total resources * 40 hours)
  const totalHours = resourceArray.length * 40;
  //   create array for total allocation per project (num resources * allocation)
  const totalAllocationArray = [];
  projectArray.forEach((project) => {
    const allocationSum = project.allocation * project.assignedResources.length;
    totalAllocationArray.push(allocationSum);
  });
  //   use .reduce on allocationSum to get total sum of all items in array
  let totalAllocationSum = totalAllocationArray.reduce((a, b) => a + b, 0);

  return totalHours - totalAllocationSum;
};
