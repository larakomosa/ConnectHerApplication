// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import function_list from '../../../functions/list';
// import mapStoreToProps from '../../../redux/mapStoreToProps';
// import Member from './Member';

// class MemberSearch extends Component {
//   state = {
//     searchTerm: '',
//     searchArray: [],
//   };

//   inputChange = (e) => {
//     this.setState({
//       searchTerm: e.target.value,
//       searchArray: function_list.splitInput(e.target.value),
//     });
//   };
//   render() {
//     return (
//       <div>
//         <input
//           style={{ width: '100%' }}
//           value={this.state.searchTerm}
//           onChange={this.inputChange}
//           placeholder="Too add more filters use * after each. ex. risk management*media, member names can also be searched. ex. sarah"
//         />
//         <Member filter={this.state.searchArray} />
//       </div>
//     );
//   }
// }

// export default connect(mapStoreToProps)(MemberSearch);
