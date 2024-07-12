import User from "../model/user.model.js";

export const signup = async (request, response) => {
  try {
    const { fullname, email, password } = request.body;
    //finding user is alredy present or not in the database
    const user = await User.findOne({ email });
    if (user)
      return response.status(400).json({ message: "User already present" });

    const createdUser = new User({
      fullname,
      email,
      password,
    });

    console.log(createdUser);

    await createdUser.save();

    response.status(201).json({
      message: "User created successfulluy",
      user: {
        id: createdUser.id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log("Error" + error.message);
    response.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (request, response) => {
  try {
    const { email } = request.body;
    const user = await User.findOne({ email });
    // const isMatch = await password.compare(user.password);
    if (!user)
      return response
        .status(400)
        .json({ message: "Invalid username or password" });
    else
      response.status(200).json({
        message: "login successfull",
        user: {
          id: user.id,
          email: user.email,
          password:user.password
        },
      });
  } catch (error) {
    console.log("Error" + error.message);
    response.status(500).json({ message: "Internal server error" });
  }
};
