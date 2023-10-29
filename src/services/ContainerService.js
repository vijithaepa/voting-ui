// class ContainerService {

export const getUserGreeting = () => {
  console.log('Service got called');
  return (
    fetch(process.env.REACT_APP_BACKEND_RUL + '/voting/greeting', {
      method: 'GET'
      // headers: {
      // }
    })
      // .then(res => {
      //   if (res.status === 200) {
      //     console.log('response 200', res);
      //     return ' : response 200';
      //   } else {
      //     console.log('response !200', res);
      //     return ' : response !200';
      //   }
      //   // return res.text();
      // })
      .then(res => {
        console.log('Next response ', res);
        return res.text();
      })
      .catch(error => {
        console.log('Error response ', error);
        return ' ERROR';
      })
  );
};
// }

// export default new ContainerService();
