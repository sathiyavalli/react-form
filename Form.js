
import React,{Component} from 'react';
import './App.css';
import BootstrapTable from 'react-bootstrap-table-next';
import '../node_modules/bootstrap-css-only/css/bootstrap.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory from 'react-bootstrap-table2-editor';
import FormDataComponent from './components/form-data.component';




class Form extends React.Component {

   render() {
      return (
         <div>
        <FormDataComponent />
      </div>
      );
   }
}
export default Form;





