import React from "react";
// import PatientCollection from "./patient-collection";

const Tabs = () => {
  // const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className='navbar mb-2 shadow-lg bg-neutral text-neutral-content '>
      <div className='px-2 mx-2 navbar-start'>
        <span className='text-lg font-bold'>B&C</span>
      </div>
      {/* <div class='navbar-center hidden px-2 mx-2 lg:flex'>
        <div class='flex items-stretch'>
          <a class='btn btn-ghost btn-sm rounded-btn' href='none'>
            Home
          </a>
          <a class='btn btn-ghost btn-sm rounded-btn' href='none'>
            Portfolio
          </a>
          <a class='btn btn-ghost btn-sm rounded-btn' href='none'>
            About
          </a>
          <a class='btn btn-ghost btn-sm rounded-btn' href='none'>
            Contact
          </a>
        </div>
      </div> */}
      <div className='navbar-end'>
        <button className='btn btn-square btn-ghost'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-6 h-6 stroke-current'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'></path>
          </svg>
        </button>
        <button className='btn btn-square btn-ghost'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-6 h-6 stroke-current'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
          </svg>
        </button>
      </div>
    </div>

    // <div className='flex flex-wrap'>
    //   <button class='btn btn-outline'>neutral</button>
    //   <button class='btn btn-outline btn-primary'>primary</button>
    //   <button class='btn btn-outline btn-secondary'>secondary</button>
    //   <button class='btn btn-outline btn-accent'>accent</button>

    //   <div className='w-full'>
    //     <ul
    //       className='flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row'
    //       role=Llist'>
    //       <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
    //         <a
    //           className={
    //             "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
    //             (openTab === 1
    //               ? "text-white bg-" + color + "-600"
    //               : "text-" + color + "-600 bg-white")
    //           }
    //           onClick={(e) => {
    //             e.preventDefault();
    //             setOpenTab(1);
    //           }}
    //           data-toggle='tab'
    //           href='#link1'
    //           role='tablist'>
    //           <i className='fas fa-space-shuttle text-base mr-1'></i> Patient
    //           Collection
    //         </a>
    //       </li>
    //       <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
    //         <a
    //           className={
    //             "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
    //             (openTab === 2
    //               ? "text-white bg-" + color + "-600"
    //               : "text-" + color + "-600 bg-white")
    //           }
    //           onClick={(e) => {
    //             e.preventDefault();
    //             setOpenTab(2);
    //           }}
    //           data-toggle='tab'
    //           href='#link2'
    //           role='tablist'>
    //           <i className='fas fa-cog text-base mr-1'></i> Denial
    //         </a>
    //       </li>
    //       <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
    //         <a
    //           className={
    //             "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
    //             (openTab === 3
    //               ? "text-white bg-" + color + "-600"
    //               : "text-" + color + "-600 bg-white")
    //           }
    //           onClick={(e) => {
    //             e.preventDefault();
    //             setOpenTab(3);
    //           }}
    //           data-toggle='tab'
    //           href='#link3'
    //           role='tablist'>
    //           <i className='fas fa-briefcase text-base mr-1'></i> Insurance AR
    //         </a>
    //       </li>
    //     </ul>
    //     <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded'>
    //       <div className='px-4 py-5 flex-auto'>
    //         <div className='tab-content tab-space'>
    //           <div className={openTab === 1 ? "block" : "hidden"} id='link1'>
    //             <div
    //               style={{
    //                 height: "80vh",
    //                 overflowY: "auto",
    //                 overflowX: "hidden",
    //               }}>
    //               <PatientCollection />
    //             </div>
    //           </div>
    //           <div className={openTab === 2 ? "block" : "hidden"} id='link2'>
    //             <p>
    //               Completely synergize resource taxing relationships via premier
    //               niche markets. Professionally cultivate one-to-one customer
    //               service with robust ideas.
    //               <br />
    //               <br />
    //               Dynamically innovate resource-leveling customer service for
    //               state of the art customer service.
    //             </p>
    //           </div>
    //           <div className={openTab === 3 ? "block" : "hidden"} id='link3'>
    //             <p>
    //               Efficiently unleash cross-media information without
    //               cross-media value. Quickly maximize timely deliverables for
    //               real-time schemas.
    //               <br />
    //               <br /> Dramatically maintain clicks-and-mortar solutions
    //               without functional solutions.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default function NavBar() {
  return <Tabs />;
}
