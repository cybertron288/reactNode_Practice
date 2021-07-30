import React from "react";

const Denial = () => {
  return (
    <div className='overflow-x-auto'>
      <table className='table w-full table-zebra table-compact'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            
          </tr>
        </thead>
        <tbody>
          <tr className=''>
            <th>1</th>
            <td>Yancy Tear</td>
            <td>Community Outreach Specialist</td>
            <td>Indigo</td>
          </tr>
          <tr className=''>
            <th>2</th>
            <td>Irma Vasilik</td>
            <td>Editor</td>
            <td>Purple</td>
          </tr>
          <tr className=''>
            <th>3</th>
            <td>Meghann Durtnal</td>
            <td>Staff Accountant IV</td>
            <td>Yellow</td>
          </tr>
          <tr className=''>
            <th>4</th>
            <td>Sammy Seston</td>
            <td>Accountant I</td>
            <td>Crimson</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Denial;
