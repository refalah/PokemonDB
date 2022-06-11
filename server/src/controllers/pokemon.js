exports.catchPokemon = async (req, res) => {
  try {
    let result = 0;
    let coin = Math.floor(Math.random() * 2) == 0;
    if (coin) {
      result = 1;
    } else {
      result = 0;
    }

    res.send({
      code: 0,
      message: "Success ",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.releasePokemon = async (req, res) => {
  try {
    let num = Math.floor(Math.random() * 100);

    const isPrime = (num) => {
      for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
      return num > 1;
    };

    console.log(num, "NUMBER");

    let result = isPrime(num);

    res.send({
      code: 0,
      message: "Success ",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.renamePokemon = async (req, res) => {
  let current = req.params.num;
  try {
    const previousFibonacci = (n) => {
      var a = n / ((1 + Math.sqrt(5)) / 2);
      return Math.round(a);
    };

    let result = previousFibonacci(current) + parseInt(current);

    res.send({
      code: 0,
      message: "Success ",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
