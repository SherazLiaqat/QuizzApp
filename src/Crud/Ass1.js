import React from "react";
import {Table} from './Table';
export const Ass1 = () => {
  const columns = [
    {
      field: "title",
      headerName: "Title",
    },
    {
      field: "number",
      headerName: "Amount",
    },
  ];
  const list = [
    { title: "Michael", number: 1 },
    { title: "Lindsay", number: 10 },
    { title: "Tobias", number: 6 },
    { title: "Byron", number: 3 },
    { title: "George", number: 1 },
    { title: "Rachel", number: 10 },
    { title: "Lawson", number: 6 },
    { title: "Ferguson", number: 3 },
    { title: "Funke", number: 1 },
  ];
  
  return (
    <div>
      
      <Table columns={columns} list={list} />
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Recruitment Name</th>
            <th scope="col">Candidates No</th>
            <th scope="col">Start Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
