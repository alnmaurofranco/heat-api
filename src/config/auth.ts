interface IAuthConfiguration {
  secret: string;
}

const authConfig: IAuthConfiguration = {
  secret: process.env.JWT_SECRET as string,
};

export { authConfig };
