import { useEffect, useState } from "react";
import axios from "axios";


const useFetch = () => {

    const [isLoading, setisLoading] = useState(false);
    // const [data, setData] = useState();
    // const [data, setData] = useState();
    const [employees, setEmployees] = useState();


    const employeesURL = 'https://mint-v3-default-rtdb.firebaseio.com/employees.json';
    const fridge = 'https://thefridge-api.karapincha.io/fridge/';

    const getData = () => {
        setisLoading(true)

        axios.get(employeesURL).then(response => {
            console.log(response.data)
            setEmployees(response.data)
            setisLoading(false)
        });
        // fetch(employeesURL)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //         setEmployees(data)
        //         setisLoading(false)
        //     });
    }
    // const showEmp = () => {
    //     data && console.log(data);
    //     data.map((emp) => (
    //         console.log(emp.name)
    //     ))
    // }
    return { employees, getData, isLoading }
}

export default useFetch;