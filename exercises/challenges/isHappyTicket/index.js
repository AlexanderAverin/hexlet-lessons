const isHappyTicket = (n) => {
  let i = 0;
  let counter = 0;
  let counter1 = 0;
  while (i < n.length / 2) {
        counter += Number(n[i]);
        i++;
    }
   while (i < n.length) {
       counter1 += Number(n[i]);
       i++;
   }
   if (counter === counter1) {
       return true;
   }
       return false;
};
console.log(isHappyTicket('060006'));