import React from 'react';

const AppoinmentsByDate = ({ appoinments }) => {
    return (
        <section className="shadow mt-5">
            <div>
                <div className="p-5">
                    <div className="d-flex justify-content-between text-info">
                        <h3>Appoinments</h3> <h4>{new Date().toDateString()}</h4>
                    </div>



                    {appoinments.length ?
                        <table className="table table-borderless table-striped p-5">
                            <thead>
                                <tr className="text-secondary text-secondary">
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    appoinments.map(appoinment => <tr key={appoinment._id}>

                                        <th>{appoinment.name}</th>
                                        <th>{appoinment.phone}</th>
                                        <th>{appoinment.email}</th>
                                    </tr>)
                                }
                            </tbody>
                        </table>

                        :
                        <p className="text-center text-secondary mt-5">No Appoinment Available</p>
                    }
                </div>
            </div>
        </section>

    );
};

export default AppoinmentsByDate;