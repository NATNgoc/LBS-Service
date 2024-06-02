export enum ConfigKey {
  JWT_ACCESS_TOKEN_EXPIRATION_TIME = 'JWT_ACCESS_TOKEN_EXPIRATION_TIME',
  JWT_REFRESH_TOKEN_EXPIRATION_TIME = 'JWT_REFRESH_TOKEN_EXPIRATION_TIME',
  JWT_REQUEST_TOKEN_EXPIRATION_TIME = 'JWT_REQUEST_TOKEN_EXPIRATION_TIME',
  JWT_VERIFY_TOKEN_EXPIRATION_TIME = 'JWT_VERIFY_TOKEN_EXPIRATION_TIME',
  VERIFY_TOKEN_KEY = 'VERIFY_TOKEN_KEY',
  SECRET_KEY = 'SECRET_KEY',
  REFRESH_SECRET_KEY = 'REFRESH_TOKEN_KEY',
  REQUEST_SECRET_KEY = 'REQUEST_SECRET_KEY',
  CLOUDINARY_CLOUD_NAME = 'CLOUDINARY_CLOUD_NAME',
  CLOUDINARY_API_KEY = 'CLOUDINARY_API_KEY',
  CLOUDINARY_API_SECRET = 'CLOUDINARY_API_SECRET',
  CLOUDINARY_IMAGE_FOLDER = 'CLOUDINARY_IMAGE_FOLDER',
  MONGO_HOST = 'MONGO_HOST',
  MONGO_PORT = 'MONGO_PORT',
  MONGO_NAME = 'MONGO_NAME',
  MONGO_USER_NAME = 'MONGO_USER_NAME',
  MONGO_PASSWORD = 'MONGO_PASSWORD',
  MONGO_CLOUD_CONNECTION_STRING = 'MONGO_CLOUD_CONNECTION_STRING',
  PROJECT_ENVIRONMENT = 'NODE_ENV',
  GOOGLE_PASSWORD = 'GOOGLE_PASSWORD',
  GOOGLE_USERNAME = 'GOOGLE_USERNAME',
  MAIL_HOST = 'MAIL_HOST',
  MAIL_PORT = 'MAIL_PORT',
  FRONT_END_URL = 'FRONT_END_URL',
  NODE_ENV = 'NODE_ENV',
  PORT = 'PORT',
}

export class FindNearByConstant {
  public static readonly LATITUDE_REGREX =
    /^([-+]?((1[0-7]\d)|([1-9]?\d))(\.\d+)?|180(\.0+)?)$/;
  public static readonly LONGITUDE_REGREX =
    /^([-+]?((1[0-7]\d)|([1-9]?\d))(\.\d+)?|180(\.0+)?)$/;
  public static readonly EARTH_RADIUS = 6378.1;
}


export class BusinessConstant {
  static readonly regexOpenCloseTime: RegExp =
    /^(?:[01]\d|2[0-3]):(?:00|0[5]|1[05]|2[05]|3[05]|4[05]|5[05])$/;
    static readonly OPEN_TIME_ALL_DAY = '00:00'
    static readonly CLOSE_TIME_ALL_DAY = '00:00'
}
