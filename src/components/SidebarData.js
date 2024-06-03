import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';


export const SidebarData = [
  {
    title: 'DashBoard',
    path: '/overview',
    icon: <AiIcons.AiFillHome/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

   
  },
  {
    title: 'Sales',
    path: '/Sales',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Sales Return',
        path: '/Sales/SalesReturn',
        icon: <IoIcons.IoIosPaper color='white'/>
      },
    
    ]
  },
  {
    title: 'Purchase',
    path: '/Purchase',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Purchase Return',
        path: '/Purchase/PurchaseReturn',
        icon: <IoIcons.IoIosPaper color='white'/>
      },
    
    ]
  },
  {
    title: 'Items',
    path: '/Items',
    icon: <FaIcons.FaCartPlus />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add Items',
        path: '/Items/AddItems',
        icon: <IoIcons.IoIosPaper color='white'/>
      },
      {
        title: 'Item List',
        path: '/Items/ItemList',
        icon: <IoIcons.IoIosPaper color='white'/>
      },
      {
        title: 'Category List',
        path: '/Items/CategoryList',
        icon: <IoIcons.IoIosPaper color='white'/>
      },
    
    ]
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'SalesReport',
        path: '/reports/SalesReport',
        icon: <IoIcons.IoIosPaper color='white'/>,
        cName: 'sub-nav'
      },
      {
        title: 'PurchaseReport',
        path: '/reports/PurchaseReport',
        icon: <IoIcons.IoIosPaper color='white'/>,
        cName: 'sub-nav'
      },
      {
        title: 'StockSummary',
        path: '/reports/StockSummary',
        icon: <IoIcons.IoIosPaper color='white'/>
      }
    ]
  },
  {
    title: 'GSTReport',
    path: '/GSTReport',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'GST 1',
        path: '/GSTReport/GST1',
        icon: <IoIcons.IoIosPaper color='white'/>,
        cName: 'sub-nav'
      },
      {
        title: 'GST 2',
        path: '/GSTReport/GST2',
        icon: <IoIcons.IoIosPaper color='white'/>,
        cName: 'sub-nav'
      },
      {
        title: 'GST 3',
        path: '/GSTReport/GST3',
        icon: <IoIcons.IoIosPaper color='white'/>
      }
    ]
  },
  {
    title: 'Account',
    path: '/Account',
    icon: <IoIcons.IoIosPeople/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add Account',
        path: '/Account/AddAcount',
        icon: <IoIcons.IoIosPeople color='white'/>,
        cName: 'sub-nav'
      },
      {
        title: 'Account List',
        path: '/Account/AccountList',
        icon: <IoIcons.IoIosPeople color='white'/>,
        cName: 'sub-nav'
      },
    
    ]
  },
  {
    title: 'Quotation',
    path: '/Quotation',
    icon: <IoIcons.IoIosPaper/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'New Quotation',
        path: '/Quotation/NewQuotation',
        icon: <IoIcons.IoIosPaper color='white'/>,
        cName: 'sub-nav'
      },
      {
        title: 'Quotation List',
        path: '/Quotation/QuotationList',
        icon: <IoIcons.IoIosPaper color='white'/>,
        cName: 'sub-nav'
      },
    
    ]
  },
  {
    title: 'Contact',
    path: '/Contact',
    icon: <IoIcons.IoIosContact />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add Customer',
        path: '/Contact/AddCustomer',
        icon: <IoIcons.IoIosPersonAdd color='white'/>,
        cName: 'sub-nav'
      },
      {
        title: 'Customer List',
        path: '/Contact/CustomerList',
        icon: <IoIcons.IoIosPaper color='white'/>,
        cName: 'sub-nav'
      },
      {
        title: 'Add Supplier',
        path: '/Contact/AddSupplier',
        icon: <IoIcons.IoIosPaper color='white'/>,
        cName: 'sub-nav'
      },
      {
        title: 'Supplier List',
        path: '/Contact/SupplierList',
        icon: <IoIcons.IoIosPaper color='white'/>,
        cName: 'sub-nav'
      },
    
    ]
  },
 
];
