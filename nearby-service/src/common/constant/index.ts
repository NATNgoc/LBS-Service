export enum ConfigKey {
  MONGO_NAME = 'MONGO_NAME',
  MONGO_HOST = 'MONGO_HOST',
  MONGO_PORT = 'MONGO_PORT',
  MONGO_USER_NAME = 'MONGO_USER_NAME',
  MONGO_PASSWORD = 'MONGO_PASSWORD',
  MONGO_CLOUD_CONNECTION_STRING = 'MONGO_CLOUD_CONNECTION_STRING',
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
}
