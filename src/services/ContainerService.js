// class ContainerService {

export const getUserGreeting = () => {
  console.log('Service got called');
  return fetch('http://ec2-13-55-114-165.ap-southeast-2.compute.amazonaws.com/api/docker/greeting', {
    method: 'GET'
    // headers: {
    // }
  })
    .then(res => {
      if (res.status === 200) {
        console.log('response 200', res);
        return ' : response 200';
      } else {
        console.log('response !200', res);
        return ' : response !200';
      }
      // return res.text();
    })
    // .then(res => {
    //   console.log('Next response ', res);
    //   return res;
    // })
    .catch(error => {
      console.log('Error response ', error);
      return ' ERROR';
    });
};
// }

// export default new ContainerService();
