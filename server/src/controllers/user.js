const { User } = require("../../models");

exports.getAll = async (req, res) => {
  try {
    const user = await User.findAll();

    res.send({
      code: 0,
      message: "Berhasil ",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({ where: { id } });

    res.send({
      code: 0,
      message: "Berhasil ",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.send({
      code: 0,
      message: "Berhasil ",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.editUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.update({ ...req.body }, { where: { id } });

    res.send({
      code: 0,
      message: "Berhasil ",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.destroy({ where: { id } });

    res.send({
      code: 0,
      message: "Berhasil ",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};
