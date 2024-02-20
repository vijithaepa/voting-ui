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

export const saveMember = member => {
  const memberBody = JSON.stringify(member);
  console.log('Member before sent', member, memberBody);
  return fetch(process.env.REACT_APP_BACKEND_RUL + '/voting/member', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: memberBody
  }).then(result => {
    console.log('result', result);
  });
};

export const getMemberConfig = () => {
  return fetch(process.env.REACT_APP_BACKEND_RUL + '/voting/member/config', {
    method: 'GET'
  }).then(result => {
    console.log('result', result);
    return result.json();
  });
};

export const getMembers = () => {
  return fetch(process.env.REACT_APP_BACKEND_RUL + '/voting/member', {
    method: 'GET'
  }).then(result => {
    console.log('get member result', result);
    return result.json();
  });
};
