// splits the project into groups of 3
function splitProjects<T>(projects: T[]) {
  let splitProjects = [];
  for (let index = 0; index < projects.length; index += 3) {
    let arr: T[] = [];
    for (let i = index; i < index + 3; i++) {
      let project = projects[i];
      if (project) {
        arr.push(project);
      } else break;
    }
    splitProjects.push(arr);
  }
  return splitProjects;
}

export default splitProjects;
