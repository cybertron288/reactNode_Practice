import React from "react";

/* This example requires Tailwind CSS v2.0+ */
const people = [
  {
    PartitionKey: "2021-06-30T10:08:30.7737801Z",
    RowKey: "00001",
    Timestamp: "2021-06-30T10:08:30.880Z",
    BalanceCurrent: "text sent",
    BalanceNinetyPlus: "text sent",
    BalanceSixtyPlus: "text sent",
    BalanceSixtyPlusCall: "called",
    BalanceThirtyPlus: "text sent",
    BalanceThirtyPlusCall: "called",
    CollectionOneTwentyPlus: "send text",
    CollectionOneTwentyPlusCall: "called",
    DOS: "2/13/2020",
    "DOS@type": "Edm.String",
    EOB: "",
    FirstName: "Grace1",
    Notes: "Notes",
    Notes2: "",
    Notes3: "Notes",
    PatientBalance: 5,
    PhoneNo: "+919872834804",
    PtId: 676,
  },
  {
    PartitionKey: "2021-06-30T10:08:30.7737801Z",
    RowKey: "00002",
    Timestamp: "2021-06-30T10:08:30.893Z",
    BalanceCurrent: "text sent",
    BalanceNinetyPlus: "text sent",
    BalanceSixtyPlus: "text sent",
    BalanceSixtyPlusCall: "called",
    BalanceThirtyPlus: "text sent",
    BalanceThirtyPlusCall: "called",
    CollectionOneTwentyPlus: "send text",
    CollectionOneTwentyPlusCall: "called",
    DOS: "2/14/2020",
    "DOS@type": "Edm.String",
    EOB: "",
    FirstName: "Grace2",
    Notes: "Notes",
    Notes2: "",
    Notes3: "Notes",
    PatientBalance: 41,
    PhoneNo: "+919872834804",
    PtId: 677,
  },
  {
    PartitionKey: "2021-06-30T10:08:30.7737801Z",
    RowKey: "00003",
    Timestamp: "2021-06-30T10:08:30.907Z",
    BalanceCurrent: "text sent",
    BalanceNinetyPlus: "text sent",
    BalanceSixtyPlus: "text sent",
    BalanceSixtyPlusCall: "called",
    BalanceThirtyPlus: "text sent",
    BalanceThirtyPlusCall: "called",
    CollectionOneTwentyPlus: "send text",
    CollectionOneTwentyPlusCall: "called",
    DOS: "2/15/2020",
    "DOS@type": "Edm.String",
    EOB: "",
    FirstName: "Grace3",
    Notes: "Notes",
    Notes2: "",
    Notes3: "Notes",
    PatientBalance: 17.200000762939453,
    PhoneNo: "+919872834804",
    PtId: 678,
  },
  {
    PartitionKey: "2021-06-30T10:08:30.7737801Z",
    RowKey: "00004",
    Timestamp: "2021-06-30T10:08:30.919Z",
    BalanceCurrent: "text sent",
    BalanceNinetyPlus: "text sent",
    BalanceSixtyPlus: "text sent",
    BalanceSixtyPlusCall: "called",
    BalanceThirtyPlus: "text sent",
    BalanceThirtyPlusCall: "called",
    CollectionOneTwentyPlus: "send text",
    CollectionOneTwentyPlusCall: "called",
    DOS: "2/16/2020",
    "DOS@type": "Edm.String",
    EOB: "",
    FirstName: "Grace4",
    Notes: "Notes",
    Notes2: "",
    Notes3: "Notes",
    PatientBalance: 17.200000762939453,
    PhoneNo: "+919872834804",
    PtId: 679,
  },
  {
    PartitionKey: "2021-06-30T10:08:30.7737801Z",
    RowKey: "00005",
    Timestamp: "2021-06-30T10:08:30.930Z",
    BalanceCurrent: "text sent",
    BalanceNinetyPlus: "text sent",
    BalanceSixtyPlus: "text sent",
    BalanceSixtyPlusCall: "called",
    BalanceThirtyPlus: "text sent",
    BalanceThirtyPlusCall: "called",
    CollectionOneTwentyPlus: "send text",
    CollectionOneTwentyPlusCall: "called",
    DOS: "2/17/2020",
    "DOS@type": "Edm.String",
    EOB: "",
    FirstName: "Grace5",
    Notes: "Notes",
    Notes2: "",
    Notes3: "Notes",
    PatientBalance: 17.200000762939453,
    PhoneNo: "+919872834804",
    PtId: 680,
  },
  {
    PartitionKey: "2021-06-30T10:08:30.7737801Z",
    RowKey: "00006",
    Timestamp: "2021-06-30T10:08:30.940Z",
    BalanceCurrent: "Text Sent",
    BalanceNinetyPlus: "Text Sent",
    BalanceSixtyPlus: "Text Sent",
    BalanceSixtyPlusCall: "Called",
    BalanceThirtyPlus: "Text Sent",
    BalanceThirtyPlusCall: "Called",
    CollectionOneTwentyPlus: "Send Text",
    CollectionOneTwentyPlusCall: "Call",
    DOS: "2/18/2020",
    "DOS@type": "Edm.String",
    EOB: "",
    FirstName: "Grace6",
    Notes: "Notes",
    Notes2: "",
    Notes3: "Notes",
    PatientBalance: 17.200000762939453,
    PhoneNo: "+919872834804",
    PtId: 681,
  },
  {
    PartitionKey: "2021-06-30T10:08:30.7737801Z",
    RowKey: "00007",
    Timestamp: "2021-06-30T10:08:30.953Z",
    BalanceCurrent: "Text Sent",
    BalanceNinetyPlus: "Text Sent",
    BalanceSixtyPlus: "Text Sent",
    BalanceSixtyPlusCall: "Called",
    BalanceThirtyPlus: "Text Sent",
    BalanceThirtyPlusCall: "Called",
    CollectionOneTwentyPlus: "Send Text",
    CollectionOneTwentyPlusCall: "Call",
    DOS: "2/19/2020",
    "DOS@type": "Edm.String",
    EOB: "",
    FirstName: "Grace7",
    Notes: "Notes",
    Notes2: "",
    Notes3: "Notes",
    PatientBalance: 45,
    PhoneNo: "+919872834804",
    PtId: 682,
  },
  {
    PartitionKey: "2021-06-30T10:08:30.7737801Z",
    RowKey: "00008",
    Timestamp: "2021-06-30T10:08:30.964Z",
    BalanceCurrent: "Text Sent",
    BalanceNinetyPlus: "Text Sent",
    BalanceSixtyPlus: "Text Sent",
    BalanceSixtyPlusCall: "Called",
    BalanceThirtyPlus: "Text Sent",
    BalanceThirtyPlusCall: "Called",
    CollectionOneTwentyPlus: "Send Text",
    CollectionOneTwentyPlusCall: "Call",
    DOS: "2/20/2020",
    "DOS@type": "Edm.String",
    EOB: "",
    FirstName: "Grace8",
    Notes: "Notes",
    Notes2: "",
    Notes3: "Notes",
    PatientBalance: 5,
    PhoneNo: "+919872834804",
    PtId: 683,
  },
  {
    PartitionKey: "2021-06-30T10:08:30.7737801Z",
    RowKey: "00009",
    Timestamp: "2021-06-30T10:08:30.978Z",
    BalanceCurrent: "Text Sent",
    BalanceNinetyPlus: "Text Sent",
    BalanceSixtyPlus: "Text Sent",
    BalanceSixtyPlusCall: "Called",
    BalanceThirtyPlus: "Text Sent",
    BalanceThirtyPlusCall: "Called",
    CollectionOneTwentyPlus: "Send Text",
    CollectionOneTwentyPlusCall: "Call",
    DOS: "2/21/2020",
    "DOS@type": "Edm.String",
    EOB: "",
    FirstName: "Grace9",
    Notes: "Notes",
    Notes2: "",
    Notes3: "Notes",
    PatientBalance: 41,
    PhoneNo: "+919872834804",
    PtId: 684,
  },
  {
    PartitionKey: "2021-06-30T10:08:30.7737801Z",
    RowKey: "00010",
    Timestamp: "2021-06-30T10:08:30.989Z",
    BalanceCurrent: "Text Sent",
    BalanceNinetyPlus: "Text Sent",
    BalanceSixtyPlus: "Text Sent",
    BalanceSixtyPlusCall: "Called",
    BalanceThirtyPlus: "Text Sent",
    BalanceThirtyPlusCall: "Called",
    CollectionOneTwentyPlus: "Send Text",
    CollectionOneTwentyPlusCall: "Call",
    DOS: "2/22/2020",
    "DOS@type": "Edm.String",
    EOB: "",
    FirstName: "Grace10",
    Notes: "Notes",
    Notes2: "",
    Notes3: "Notes",
    PatientBalance: 17.200000762939453,
    PhoneNo: "+919872834804",
    PtId: 685,
  },
  {
    PartitionKey: "2021-06-30T10:08:30.7737801Z",
    RowKey: "00011",
    Timestamp: "2021-07-02T16:12:14.490Z",
    BalanceCurrent: "text sent",
    BalanceNinetyPlus: "send a text",
    BalanceSixtyPlus: "text sent",
    BalanceSixtyPlusCall: "called",
    BalanceThirtyPlus: "text sent",
    BalanceThirtyPlusCall: "called",
    CollectionOneTwentyPlus: "",
    CollectionOneTwentyPlusCall: "",
    DOS: "2/23/2020",
    "DOS@type": "Edm.String",
    EOB: "",
    FirstName: "Grace11",
    Notes: "Notes",
    Notes2: "",
    Notes3: "Notes",
    PatientBalance: 17.200000762939453,
    PhoneNo: "+919872834804",
    PtId: 686,
  },
  {
    PartitionKey: "2021-06-30T10:08:30.7737801Z",
    RowKey: "00012",
    Timestamp: "2021-07-02T16:12:07.174Z",
    BalanceCurrent: "text sent",
    BalanceNinetyPlus: "text sent",
    BalanceSixtyPlus: "send a text",
    BalanceSixtyPlusCall: "called",
    BalanceThirtyPlus: "text sent",
    BalanceThirtyPlusCall: "called",
    CollectionOneTwentyPlus: "",
    CollectionOneTwentyPlusCall: "",
    DOS: "2/24/2020",
    "DOS@type": "Edm.String",
    EOB: "",
    FirstName: "Grace12",
    Notes: "Notes",
    Notes2: "",
    Notes3: "Notes",
    PatientBalance: 17.200000762939453,
    PhoneNo: "+919872834804",
    PtId: 687,
  },
  {
    PartitionKey: "2021-06-30T10:08:30.7737801Z",
    RowKey: "00013",
    Timestamp: "2021-06-30T10:08:31.061Z",
    BalanceCurrent: "text sent",
    BalanceNinetyPlus: "text sent",
    BalanceSixtyPlus: "text sent",
    BalanceSixtyPlusCall: "called",
    BalanceThirtyPlus: "text sent",
    BalanceThirtyPlusCall: "called",
    CollectionOneTwentyPlus: "",
    CollectionOneTwentyPlusCall: "",
    DOS: "2/25/2020",
    "DOS@type": "Edm.String",
    EOB: "",
    FirstName: "Grace13",
    Notes: "Notes",
    Notes2: "",
    Notes3: "Notes",
    PatientBalance: 17.200000762939453,
    PhoneNo: "+919872834804",
    PtId: 688,
  },
  {
    PartitionKey: "2021-06-30T10:08:30.7737801Z",
    RowKey: "00014",
    Timestamp: "2021-06-30T10:08:31.076Z",
    BalanceCurrent: "text sent",
    BalanceNinetyPlus: "text sent",
    BalanceSixtyPlus: "text sent",
    BalanceSixtyPlusCall: "called",
    BalanceThirtyPlus: "text sent",
    BalanceThirtyPlusCall: "called",
    CollectionOneTwentyPlus: "",
    CollectionOneTwentyPlusCall: "",
    DOS: "2/26/2020",
    "DOS@type": "Edm.String",
    EOB: "",
    FirstName: "Grace14",
    Notes: "Notes",
    Notes2: "",
    Notes3: "Notes",
    PatientBalance: 45,
    PhoneNo: "+919872834804",
    PtId: 689,
  },
];

const PatientCollection = () => {
  return (
    <React.Fragment>
      <div
        className='overflow-x-auto'
        style={{ height: "80vh"}}>
        <table className='table w-full text-center table-zebra table-compact'>
          <thead>
            <tr>
              <th>Patient Id</th>
              <th>DOS</th>
              <th>Patient Balance</th>
              <th>EOB - Reference</th>
              <th>Balance Current</th>
              <th>Balance 30+</th>
              <th>Balance 30+ Call</th>
              <th>Notes</th>
              <th>Balance 60+</th>
              <th>Balance 60+ Call</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => (
              <tr>
                <th>{person.PtId}</th>
                <td>{person.DOS}</td>
                <td>{person.PatientBalance}</td>
                <td>{person.EOB}</td>
                <td>{person.BalanceCurrent}</td>
                <td>{person.BalanceThirtyPlus}</td>
                <td>{person.BalanceThirtyPlusCall}</td>
                <td>{person.Notes}</td>
                <td>{person.BalanceSixtyPlus}</td>
                <td>{person.BalanceSixtyPlusCall}</td>
                <td>{person.Notes2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default PatientCollection;
