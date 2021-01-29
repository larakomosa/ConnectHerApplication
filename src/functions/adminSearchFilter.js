const adminSearchFilter = (filter, member) => {
  //CODE TOO PERFORMANCE INTENSIVE // DISCONTINUED //
  //   const refactoredMembers = [];
  //   const refactoredSearched = [];
  //   for (let i = 0; i < filter.length; i++) {
  //     // for (let ii = 0; ii < filter[i].length; ii++) {
  //     for (let iii = 0; iii < member.length; iii++) {
  //       for (let iiii = 0; iiii < member[iii].skills.length; iiii++) {
  //         // for (let x = 0; x < member[iii].skills[iiii].skill.length; x++) {
  //         console.log(
  //           String(filter[i]).toLowerCase(),
  //           String(member[iii].skills[iiii].skill).toLowerCase()
  //         );
  //         if (
  //           String(filter[i]).toLowerCase() ===
  //           String(member[iii].skills[iiii].skill).toLowerCase()
  //         ) {
  //           refactoredMembers.push(member[iii].user_id);
  //           // ii = filter[i].length;
  //         }
  //         // }
  //       }
  //       //  else if (
  //       //   String(filter[filter.length - 1][ii]).toLowerCase() ===
  //       //   String(member.skills[iii].skill[ii]).toLowerCase()
  //       // ) {
  //       //   skillBool = true;
  //       //   refactoredSearched.push(member.skills[iii].skill);
  //       // }
  //       // iii = member.skills.length;
  //       // ii = filter[i].length;
  //       // }
  //     }
  //   }
  //   //BY NAME
  //   for (let i = 0; i < filter.length; i++) {
  //     //  BY WORD
  //     for (let ii = 0; ii < filter[i].length; ii++) {
  //       if (
  //         String(filter[i]).toLowerCase() ===
  //           String(member.display_name).toLowerCase() ||
  //         String(filter[i]).toLowerCase() ===
  //           String(member.first_name).toLowerCase() ||
  //         String(filter[i]).toLowerCase() ===
  //           String(member.last_name).toLowerCase()
  //       ) {
  //         // skillBool = true;
  //         ii = filter[i].length;
  //       }
  //       ii = filter[i].length;
  //     }
  //   }
  //   console.log(refactoredMembers);
  //   return { refactoredMembers, refactoredSearched };
};

export default adminSearchFilter;
