
// class ContainerService {


    export const getUserGreeting = () => {
        console.log('Service got called');
        return fetch('http://localhost:8080/docker/greeting', {
            method: 'GET',
            // headers: {
            // }
        }).then(res => {
            console.log('response ', res.body, res.formData())
            return res.text()
        })
        .catch(error => {
            console.log('Error response ', error)
        })
    }
// }

// export default new ContainerService();