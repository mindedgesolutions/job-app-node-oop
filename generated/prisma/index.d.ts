
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CandidateProfile
 * 
 */
export type CandidateProfile = $Result.DefaultSelection<Prisma.$CandidateProfilePayload>
/**
 * Model Language
 * 
 */
export type Language = $Result.DefaultSelection<Prisma.$LanguagePayload>
/**
 * Model CandidateLanguage
 * 
 */
export type CandidateLanguage = $Result.DefaultSelection<Prisma.$CandidateLanguagePayload>
/**
 * Model Education
 * 
 */
export type Education = $Result.DefaultSelection<Prisma.$EducationPayload>
/**
 * Model CandidateEducation
 * 
 */
export type CandidateEducation = $Result.DefaultSelection<Prisma.$CandidateEducationPayload>
/**
 * Model CandidateExperience
 * 
 */
export type CandidateExperience = $Result.DefaultSelection<Prisma.$CandidateExperiencePayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model CompanyImage
 * 
 */
export type CompanyImage = $Result.DefaultSelection<Prisma.$CompanyImagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  RECRUITER: 'RECRUITER',
  CANDIDATE: 'CANDIDATE'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Level: {
  BASIC: 'BASIC',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED'
};

export type Level = (typeof Level)[keyof typeof Level]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type Level = $Enums.Level

export const Level: typeof $Enums.Level

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidateProfile`: Exposes CRUD operations for the **CandidateProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CandidateProfiles
    * const candidateProfiles = await prisma.candidateProfile.findMany()
    * ```
    */
  get candidateProfile(): Prisma.CandidateProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.language`: Exposes CRUD operations for the **Language** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Languages
    * const languages = await prisma.language.findMany()
    * ```
    */
  get language(): Prisma.LanguageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidateLanguage`: Exposes CRUD operations for the **CandidateLanguage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CandidateLanguages
    * const candidateLanguages = await prisma.candidateLanguage.findMany()
    * ```
    */
  get candidateLanguage(): Prisma.CandidateLanguageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.education`: Exposes CRUD operations for the **Education** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educations
    * const educations = await prisma.education.findMany()
    * ```
    */
  get education(): Prisma.EducationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidateEducation`: Exposes CRUD operations for the **CandidateEducation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CandidateEducations
    * const candidateEducations = await prisma.candidateEducation.findMany()
    * ```
    */
  get candidateEducation(): Prisma.CandidateEducationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidateExperience`: Exposes CRUD operations for the **CandidateExperience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CandidateExperiences
    * const candidateExperiences = await prisma.candidateExperience.findMany()
    * ```
    */
  get candidateExperience(): Prisma.CandidateExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companyImage`: Exposes CRUD operations for the **CompanyImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyImages
    * const companyImages = await prisma.companyImage.findMany()
    * ```
    */
  get companyImage(): Prisma.CompanyImageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    CandidateProfile: 'CandidateProfile',
    Language: 'Language',
    CandidateLanguage: 'CandidateLanguage',
    Education: 'Education',
    CandidateEducation: 'CandidateEducation',
    CandidateExperience: 'CandidateExperience',
    Company: 'Company',
    CompanyImage: 'CompanyImage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "candidateProfile" | "language" | "candidateLanguage" | "education" | "candidateEducation" | "candidateExperience" | "company" | "companyImage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      CandidateProfile: {
        payload: Prisma.$CandidateProfilePayload<ExtArgs>
        fields: Prisma.CandidateProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidateProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidateProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>
          }
          findFirst: {
            args: Prisma.CandidateProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidateProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>
          }
          findMany: {
            args: Prisma.CandidateProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>[]
          }
          create: {
            args: Prisma.CandidateProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>
          }
          createMany: {
            args: Prisma.CandidateProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidateProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>[]
          }
          delete: {
            args: Prisma.CandidateProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>
          }
          update: {
            args: Prisma.CandidateProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>
          }
          deleteMany: {
            args: Prisma.CandidateProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidateProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidateProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>[]
          }
          upsert: {
            args: Prisma.CandidateProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>
          }
          aggregate: {
            args: Prisma.CandidateProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidateProfile>
          }
          groupBy: {
            args: Prisma.CandidateProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidateProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidateProfileCountArgs<ExtArgs>
            result: $Utils.Optional<CandidateProfileCountAggregateOutputType> | number
          }
        }
      }
      Language: {
        payload: Prisma.$LanguagePayload<ExtArgs>
        fields: Prisma.LanguageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findFirst: {
            args: Prisma.LanguageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findMany: {
            args: Prisma.LanguageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          create: {
            args: Prisma.LanguageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          createMany: {
            args: Prisma.LanguageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LanguageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          delete: {
            args: Prisma.LanguageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          update: {
            args: Prisma.LanguageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          deleteMany: {
            args: Prisma.LanguageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LanguageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          upsert: {
            args: Prisma.LanguageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          aggregate: {
            args: Prisma.LanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguage>
          }
          groupBy: {
            args: Prisma.LanguageGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguageGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguageCountArgs<ExtArgs>
            result: $Utils.Optional<LanguageCountAggregateOutputType> | number
          }
        }
      }
      CandidateLanguage: {
        payload: Prisma.$CandidateLanguagePayload<ExtArgs>
        fields: Prisma.CandidateLanguageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidateLanguageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateLanguagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidateLanguageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateLanguagePayload>
          }
          findFirst: {
            args: Prisma.CandidateLanguageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateLanguagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidateLanguageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateLanguagePayload>
          }
          findMany: {
            args: Prisma.CandidateLanguageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateLanguagePayload>[]
          }
          create: {
            args: Prisma.CandidateLanguageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateLanguagePayload>
          }
          createMany: {
            args: Prisma.CandidateLanguageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidateLanguageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateLanguagePayload>[]
          }
          delete: {
            args: Prisma.CandidateLanguageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateLanguagePayload>
          }
          update: {
            args: Prisma.CandidateLanguageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateLanguagePayload>
          }
          deleteMany: {
            args: Prisma.CandidateLanguageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidateLanguageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidateLanguageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateLanguagePayload>[]
          }
          upsert: {
            args: Prisma.CandidateLanguageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateLanguagePayload>
          }
          aggregate: {
            args: Prisma.CandidateLanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidateLanguage>
          }
          groupBy: {
            args: Prisma.CandidateLanguageGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidateLanguageGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidateLanguageCountArgs<ExtArgs>
            result: $Utils.Optional<CandidateLanguageCountAggregateOutputType> | number
          }
        }
      }
      Education: {
        payload: Prisma.$EducationPayload<ExtArgs>
        fields: Prisma.EducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findFirst: {
            args: Prisma.EducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findMany: {
            args: Prisma.EducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          create: {
            args: Prisma.EducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          createMany: {
            args: Prisma.EducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EducationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          delete: {
            args: Prisma.EducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          update: {
            args: Prisma.EducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          deleteMany: {
            args: Prisma.EducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EducationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          upsert: {
            args: Prisma.EducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          aggregate: {
            args: Prisma.EducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducation>
          }
          groupBy: {
            args: Prisma.EducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EducationCountArgs<ExtArgs>
            result: $Utils.Optional<EducationCountAggregateOutputType> | number
          }
        }
      }
      CandidateEducation: {
        payload: Prisma.$CandidateEducationPayload<ExtArgs>
        fields: Prisma.CandidateEducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidateEducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateEducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidateEducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateEducationPayload>
          }
          findFirst: {
            args: Prisma.CandidateEducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateEducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidateEducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateEducationPayload>
          }
          findMany: {
            args: Prisma.CandidateEducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateEducationPayload>[]
          }
          create: {
            args: Prisma.CandidateEducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateEducationPayload>
          }
          createMany: {
            args: Prisma.CandidateEducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidateEducationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateEducationPayload>[]
          }
          delete: {
            args: Prisma.CandidateEducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateEducationPayload>
          }
          update: {
            args: Prisma.CandidateEducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateEducationPayload>
          }
          deleteMany: {
            args: Prisma.CandidateEducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidateEducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidateEducationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateEducationPayload>[]
          }
          upsert: {
            args: Prisma.CandidateEducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateEducationPayload>
          }
          aggregate: {
            args: Prisma.CandidateEducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidateEducation>
          }
          groupBy: {
            args: Prisma.CandidateEducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidateEducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidateEducationCountArgs<ExtArgs>
            result: $Utils.Optional<CandidateEducationCountAggregateOutputType> | number
          }
        }
      }
      CandidateExperience: {
        payload: Prisma.$CandidateExperiencePayload<ExtArgs>
        fields: Prisma.CandidateExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidateExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidateExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateExperiencePayload>
          }
          findFirst: {
            args: Prisma.CandidateExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidateExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateExperiencePayload>
          }
          findMany: {
            args: Prisma.CandidateExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateExperiencePayload>[]
          }
          create: {
            args: Prisma.CandidateExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateExperiencePayload>
          }
          createMany: {
            args: Prisma.CandidateExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidateExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateExperiencePayload>[]
          }
          delete: {
            args: Prisma.CandidateExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateExperiencePayload>
          }
          update: {
            args: Prisma.CandidateExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateExperiencePayload>
          }
          deleteMany: {
            args: Prisma.CandidateExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidateExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidateExperienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateExperiencePayload>[]
          }
          upsert: {
            args: Prisma.CandidateExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateExperiencePayload>
          }
          aggregate: {
            args: Prisma.CandidateExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidateExperience>
          }
          groupBy: {
            args: Prisma.CandidateExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidateExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidateExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<CandidateExperienceCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      CompanyImage: {
        payload: Prisma.$CompanyImagePayload<ExtArgs>
        fields: Prisma.CompanyImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyImagePayload>
          }
          findFirst: {
            args: Prisma.CompanyImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyImagePayload>
          }
          findMany: {
            args: Prisma.CompanyImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyImagePayload>[]
          }
          create: {
            args: Prisma.CompanyImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyImagePayload>
          }
          createMany: {
            args: Prisma.CompanyImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyImagePayload>[]
          }
          delete: {
            args: Prisma.CompanyImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyImagePayload>
          }
          update: {
            args: Prisma.CompanyImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyImagePayload>
          }
          deleteMany: {
            args: Prisma.CompanyImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyImagePayload>[]
          }
          upsert: {
            args: Prisma.CompanyImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyImagePayload>
          }
          aggregate: {
            args: Prisma.CompanyImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanyImage>
          }
          groupBy: {
            args: Prisma.CompanyImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyImageCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyImageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    candidateProfile?: CandidateProfileOmit
    language?: LanguageOmit
    candidateLanguage?: CandidateLanguageOmit
    education?: EducationOmit
    candidateEducation?: CandidateEducationOmit
    candidateExperience?: CandidateExperienceOmit
    company?: CompanyOmit
    companyImage?: CompanyImageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    companies: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | UserCountOutputTypeCountCompaniesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
  }


  /**
   * Count Type CandidateProfileCountOutputType
   */

  export type CandidateProfileCountOutputType = {
    candidateLanguages: number
    candidateEducations: number
    candidateExperiences: number
  }

  export type CandidateProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateLanguages?: boolean | CandidateProfileCountOutputTypeCountCandidateLanguagesArgs
    candidateEducations?: boolean | CandidateProfileCountOutputTypeCountCandidateEducationsArgs
    candidateExperiences?: boolean | CandidateProfileCountOutputTypeCountCandidateExperiencesArgs
  }

  // Custom InputTypes
  /**
   * CandidateProfileCountOutputType without action
   */
  export type CandidateProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfileCountOutputType
     */
    select?: CandidateProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CandidateProfileCountOutputType without action
   */
  export type CandidateProfileCountOutputTypeCountCandidateLanguagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateLanguageWhereInput
  }

  /**
   * CandidateProfileCountOutputType without action
   */
  export type CandidateProfileCountOutputTypeCountCandidateEducationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateEducationWhereInput
  }

  /**
   * CandidateProfileCountOutputType without action
   */
  export type CandidateProfileCountOutputTypeCountCandidateExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateExperienceWhereInput
  }


  /**
   * Count Type LanguageCountOutputType
   */

  export type LanguageCountOutputType = {
    candidateLanguages: number
  }

  export type LanguageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateLanguages?: boolean | LanguageCountOutputTypeCountCandidateLanguagesArgs
  }

  // Custom InputTypes
  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageCountOutputType
     */
    select?: LanguageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeCountCandidateLanguagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateLanguageWhereInput
  }


  /**
   * Count Type EducationCountOutputType
   */

  export type EducationCountOutputType = {
    candidateEducations: number
  }

  export type EducationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateEducations?: boolean | EducationCountOutputTypeCountCandidateEducationsArgs
  }

  // Custom InputTypes
  /**
   * EducationCountOutputType without action
   */
  export type EducationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationCountOutputType
     */
    select?: EducationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EducationCountOutputType without action
   */
  export type EducationCountOutputTypeCountCandidateEducationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateEducationWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    images: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | CompanyCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    status: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    status: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    status: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string | null
    email: string
    password: string
    role: $Enums.Role
    status: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    candidateProfile?: boolean | User$candidateProfileArgs<ExtArgs>
    companies?: boolean | User$companiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "status", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateProfile?: boolean | User$candidateProfileArgs<ExtArgs>
    companies?: boolean | User$companiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      candidateProfile: Prisma.$CandidateProfilePayload<ExtArgs> | null
      companies: Prisma.$CompanyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string
      password: string
      role: $Enums.Role
      status: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidateProfile<T extends User$candidateProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$candidateProfileArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    companies<T extends User$companiesArgs<ExtArgs> = {}>(args?: Subset<T, User$companiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly status: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.candidateProfile
   */
  export type User$candidateProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    where?: CandidateProfileWhereInput
  }

  /**
   * User.companies
   */
  export type User$companiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    cursor?: CompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model CandidateProfile
   */

  export type AggregateCandidateProfile = {
    _count: CandidateProfileCountAggregateOutputType | null
    _avg: CandidateProfileAvgAggregateOutputType | null
    _sum: CandidateProfileSumAggregateOutputType | null
    _min: CandidateProfileMinAggregateOutputType | null
    _max: CandidateProfileMaxAggregateOutputType | null
  }

  export type CandidateProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CandidateProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CandidateProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    fullName: string | null
    gender: $Enums.Gender | null
    phone: string | null
    cv: string | null
    birthday: Date | null
    address: string | null
    openToWork: boolean | null
    status: boolean | null
  }

  export type CandidateProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    fullName: string | null
    gender: $Enums.Gender | null
    phone: string | null
    cv: string | null
    birthday: Date | null
    address: string | null
    openToWork: boolean | null
    status: boolean | null
  }

  export type CandidateProfileCountAggregateOutputType = {
    id: number
    userId: number
    fullName: number
    gender: number
    phone: number
    cv: number
    birthday: number
    address: number
    openToWork: number
    status: number
    _all: number
  }


  export type CandidateProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CandidateProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CandidateProfileMinAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    gender?: true
    phone?: true
    cv?: true
    birthday?: true
    address?: true
    openToWork?: true
    status?: true
  }

  export type CandidateProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    gender?: true
    phone?: true
    cv?: true
    birthday?: true
    address?: true
    openToWork?: true
    status?: true
  }

  export type CandidateProfileCountAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    gender?: true
    phone?: true
    cv?: true
    birthday?: true
    address?: true
    openToWork?: true
    status?: true
    _all?: true
  }

  export type CandidateProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateProfile to aggregate.
     */
    where?: CandidateProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateProfiles to fetch.
     */
    orderBy?: CandidateProfileOrderByWithRelationInput | CandidateProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidateProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CandidateProfiles
    **/
    _count?: true | CandidateProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CandidateProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CandidateProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidateProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidateProfileMaxAggregateInputType
  }

  export type GetCandidateProfileAggregateType<T extends CandidateProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidateProfile[P]>
      : GetScalarType<T[P], AggregateCandidateProfile[P]>
  }




  export type CandidateProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateProfileWhereInput
    orderBy?: CandidateProfileOrderByWithAggregationInput | CandidateProfileOrderByWithAggregationInput[]
    by: CandidateProfileScalarFieldEnum[] | CandidateProfileScalarFieldEnum
    having?: CandidateProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidateProfileCountAggregateInputType | true
    _avg?: CandidateProfileAvgAggregateInputType
    _sum?: CandidateProfileSumAggregateInputType
    _min?: CandidateProfileMinAggregateInputType
    _max?: CandidateProfileMaxAggregateInputType
  }

  export type CandidateProfileGroupByOutputType = {
    id: number
    userId: number
    fullName: string
    gender: $Enums.Gender
    phone: string
    cv: string
    birthday: Date
    address: string
    openToWork: boolean
    status: boolean
    _count: CandidateProfileCountAggregateOutputType | null
    _avg: CandidateProfileAvgAggregateOutputType | null
    _sum: CandidateProfileSumAggregateOutputType | null
    _min: CandidateProfileMinAggregateOutputType | null
    _max: CandidateProfileMaxAggregateOutputType | null
  }

  type GetCandidateProfileGroupByPayload<T extends CandidateProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidateProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidateProfileGroupByOutputType[P]>
            : GetScalarType<T[P], CandidateProfileGroupByOutputType[P]>
        }
      >
    >


  export type CandidateProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    gender?: boolean
    phone?: boolean
    cv?: boolean
    birthday?: boolean
    address?: boolean
    openToWork?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    candidateLanguages?: boolean | CandidateProfile$candidateLanguagesArgs<ExtArgs>
    candidateEducations?: boolean | CandidateProfile$candidateEducationsArgs<ExtArgs>
    candidateExperiences?: boolean | CandidateProfile$candidateExperiencesArgs<ExtArgs>
    _count?: boolean | CandidateProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateProfile"]>

  export type CandidateProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    gender?: boolean
    phone?: boolean
    cv?: boolean
    birthday?: boolean
    address?: boolean
    openToWork?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateProfile"]>

  export type CandidateProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    gender?: boolean
    phone?: boolean
    cv?: boolean
    birthday?: boolean
    address?: boolean
    openToWork?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateProfile"]>

  export type CandidateProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    fullName?: boolean
    gender?: boolean
    phone?: boolean
    cv?: boolean
    birthday?: boolean
    address?: boolean
    openToWork?: boolean
    status?: boolean
  }

  export type CandidateProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fullName" | "gender" | "phone" | "cv" | "birthday" | "address" | "openToWork" | "status", ExtArgs["result"]["candidateProfile"]>
  export type CandidateProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    candidateLanguages?: boolean | CandidateProfile$candidateLanguagesArgs<ExtArgs>
    candidateEducations?: boolean | CandidateProfile$candidateEducationsArgs<ExtArgs>
    candidateExperiences?: boolean | CandidateProfile$candidateExperiencesArgs<ExtArgs>
    _count?: boolean | CandidateProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CandidateProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CandidateProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CandidateProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CandidateProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      candidateLanguages: Prisma.$CandidateLanguagePayload<ExtArgs>[]
      candidateEducations: Prisma.$CandidateEducationPayload<ExtArgs>[]
      candidateExperiences: Prisma.$CandidateExperiencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      fullName: string
      gender: $Enums.Gender
      phone: string
      cv: string
      birthday: Date
      address: string
      openToWork: boolean
      status: boolean
    }, ExtArgs["result"]["candidateProfile"]>
    composites: {}
  }

  type CandidateProfileGetPayload<S extends boolean | null | undefined | CandidateProfileDefaultArgs> = $Result.GetResult<Prisma.$CandidateProfilePayload, S>

  type CandidateProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidateProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidateProfileCountAggregateInputType | true
    }

  export interface CandidateProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CandidateProfile'], meta: { name: 'CandidateProfile' } }
    /**
     * Find zero or one CandidateProfile that matches the filter.
     * @param {CandidateProfileFindUniqueArgs} args - Arguments to find a CandidateProfile
     * @example
     * // Get one CandidateProfile
     * const candidateProfile = await prisma.candidateProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateProfileFindUniqueArgs>(args: SelectSubset<T, CandidateProfileFindUniqueArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CandidateProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateProfileFindUniqueOrThrowArgs} args - Arguments to find a CandidateProfile
     * @example
     * // Get one CandidateProfile
     * const candidateProfile = await prisma.candidateProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidateProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileFindFirstArgs} args - Arguments to find a CandidateProfile
     * @example
     * // Get one CandidateProfile
     * const candidateProfile = await prisma.candidateProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateProfileFindFirstArgs>(args?: SelectSubset<T, CandidateProfileFindFirstArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileFindFirstOrThrowArgs} args - Arguments to find a CandidateProfile
     * @example
     * // Get one CandidateProfile
     * const candidateProfile = await prisma.candidateProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidateProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CandidateProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CandidateProfiles
     * const candidateProfiles = await prisma.candidateProfile.findMany()
     * 
     * // Get first 10 CandidateProfiles
     * const candidateProfiles = await prisma.candidateProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidateProfileWithIdOnly = await prisma.candidateProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CandidateProfileFindManyArgs>(args?: SelectSubset<T, CandidateProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CandidateProfile.
     * @param {CandidateProfileCreateArgs} args - Arguments to create a CandidateProfile.
     * @example
     * // Create one CandidateProfile
     * const CandidateProfile = await prisma.candidateProfile.create({
     *   data: {
     *     // ... data to create a CandidateProfile
     *   }
     * })
     * 
     */
    create<T extends CandidateProfileCreateArgs>(args: SelectSubset<T, CandidateProfileCreateArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CandidateProfiles.
     * @param {CandidateProfileCreateManyArgs} args - Arguments to create many CandidateProfiles.
     * @example
     * // Create many CandidateProfiles
     * const candidateProfile = await prisma.candidateProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidateProfileCreateManyArgs>(args?: SelectSubset<T, CandidateProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CandidateProfiles and returns the data saved in the database.
     * @param {CandidateProfileCreateManyAndReturnArgs} args - Arguments to create many CandidateProfiles.
     * @example
     * // Create many CandidateProfiles
     * const candidateProfile = await prisma.candidateProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CandidateProfiles and only return the `id`
     * const candidateProfileWithIdOnly = await prisma.candidateProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidateProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidateProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CandidateProfile.
     * @param {CandidateProfileDeleteArgs} args - Arguments to delete one CandidateProfile.
     * @example
     * // Delete one CandidateProfile
     * const CandidateProfile = await prisma.candidateProfile.delete({
     *   where: {
     *     // ... filter to delete one CandidateProfile
     *   }
     * })
     * 
     */
    delete<T extends CandidateProfileDeleteArgs>(args: SelectSubset<T, CandidateProfileDeleteArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CandidateProfile.
     * @param {CandidateProfileUpdateArgs} args - Arguments to update one CandidateProfile.
     * @example
     * // Update one CandidateProfile
     * const candidateProfile = await prisma.candidateProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidateProfileUpdateArgs>(args: SelectSubset<T, CandidateProfileUpdateArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CandidateProfiles.
     * @param {CandidateProfileDeleteManyArgs} args - Arguments to filter CandidateProfiles to delete.
     * @example
     * // Delete a few CandidateProfiles
     * const { count } = await prisma.candidateProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidateProfileDeleteManyArgs>(args?: SelectSubset<T, CandidateProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CandidateProfiles
     * const candidateProfile = await prisma.candidateProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidateProfileUpdateManyArgs>(args: SelectSubset<T, CandidateProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateProfiles and returns the data updated in the database.
     * @param {CandidateProfileUpdateManyAndReturnArgs} args - Arguments to update many CandidateProfiles.
     * @example
     * // Update many CandidateProfiles
     * const candidateProfile = await prisma.candidateProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CandidateProfiles and only return the `id`
     * const candidateProfileWithIdOnly = await prisma.candidateProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CandidateProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidateProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CandidateProfile.
     * @param {CandidateProfileUpsertArgs} args - Arguments to update or create a CandidateProfile.
     * @example
     * // Update or create a CandidateProfile
     * const candidateProfile = await prisma.candidateProfile.upsert({
     *   create: {
     *     // ... data to create a CandidateProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CandidateProfile we want to update
     *   }
     * })
     */
    upsert<T extends CandidateProfileUpsertArgs>(args: SelectSubset<T, CandidateProfileUpsertArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CandidateProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileCountArgs} args - Arguments to filter CandidateProfiles to count.
     * @example
     * // Count the number of CandidateProfiles
     * const count = await prisma.candidateProfile.count({
     *   where: {
     *     // ... the filter for the CandidateProfiles we want to count
     *   }
     * })
    **/
    count<T extends CandidateProfileCountArgs>(
      args?: Subset<T, CandidateProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CandidateProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CandidateProfileAggregateArgs>(args: Subset<T, CandidateProfileAggregateArgs>): Prisma.PrismaPromise<GetCandidateProfileAggregateType<T>>

    /**
     * Group by CandidateProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CandidateProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidateProfileGroupByArgs['orderBy'] }
        : { orderBy?: CandidateProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CandidateProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CandidateProfile model
   */
  readonly fields: CandidateProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CandidateProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidateProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    candidateLanguages<T extends CandidateProfile$candidateLanguagesArgs<ExtArgs> = {}>(args?: Subset<T, CandidateProfile$candidateLanguagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateLanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    candidateEducations<T extends CandidateProfile$candidateEducationsArgs<ExtArgs> = {}>(args?: Subset<T, CandidateProfile$candidateEducationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateEducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    candidateExperiences<T extends CandidateProfile$candidateExperiencesArgs<ExtArgs> = {}>(args?: Subset<T, CandidateProfile$candidateExperiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CandidateProfile model
   */
  interface CandidateProfileFieldRefs {
    readonly id: FieldRef<"CandidateProfile", 'Int'>
    readonly userId: FieldRef<"CandidateProfile", 'Int'>
    readonly fullName: FieldRef<"CandidateProfile", 'String'>
    readonly gender: FieldRef<"CandidateProfile", 'Gender'>
    readonly phone: FieldRef<"CandidateProfile", 'String'>
    readonly cv: FieldRef<"CandidateProfile", 'String'>
    readonly birthday: FieldRef<"CandidateProfile", 'DateTime'>
    readonly address: FieldRef<"CandidateProfile", 'String'>
    readonly openToWork: FieldRef<"CandidateProfile", 'Boolean'>
    readonly status: FieldRef<"CandidateProfile", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * CandidateProfile findUnique
   */
  export type CandidateProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * Filter, which CandidateProfile to fetch.
     */
    where: CandidateProfileWhereUniqueInput
  }

  /**
   * CandidateProfile findUniqueOrThrow
   */
  export type CandidateProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * Filter, which CandidateProfile to fetch.
     */
    where: CandidateProfileWhereUniqueInput
  }

  /**
   * CandidateProfile findFirst
   */
  export type CandidateProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * Filter, which CandidateProfile to fetch.
     */
    where?: CandidateProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateProfiles to fetch.
     */
    orderBy?: CandidateProfileOrderByWithRelationInput | CandidateProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateProfiles.
     */
    cursor?: CandidateProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateProfiles.
     */
    distinct?: CandidateProfileScalarFieldEnum | CandidateProfileScalarFieldEnum[]
  }

  /**
   * CandidateProfile findFirstOrThrow
   */
  export type CandidateProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * Filter, which CandidateProfile to fetch.
     */
    where?: CandidateProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateProfiles to fetch.
     */
    orderBy?: CandidateProfileOrderByWithRelationInput | CandidateProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateProfiles.
     */
    cursor?: CandidateProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateProfiles.
     */
    distinct?: CandidateProfileScalarFieldEnum | CandidateProfileScalarFieldEnum[]
  }

  /**
   * CandidateProfile findMany
   */
  export type CandidateProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * Filter, which CandidateProfiles to fetch.
     */
    where?: CandidateProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateProfiles to fetch.
     */
    orderBy?: CandidateProfileOrderByWithRelationInput | CandidateProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CandidateProfiles.
     */
    cursor?: CandidateProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateProfiles.
     */
    skip?: number
    distinct?: CandidateProfileScalarFieldEnum | CandidateProfileScalarFieldEnum[]
  }

  /**
   * CandidateProfile create
   */
  export type CandidateProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a CandidateProfile.
     */
    data: XOR<CandidateProfileCreateInput, CandidateProfileUncheckedCreateInput>
  }

  /**
   * CandidateProfile createMany
   */
  export type CandidateProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CandidateProfiles.
     */
    data: CandidateProfileCreateManyInput | CandidateProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CandidateProfile createManyAndReturn
   */
  export type CandidateProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * The data used to create many CandidateProfiles.
     */
    data: CandidateProfileCreateManyInput | CandidateProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CandidateProfile update
   */
  export type CandidateProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a CandidateProfile.
     */
    data: XOR<CandidateProfileUpdateInput, CandidateProfileUncheckedUpdateInput>
    /**
     * Choose, which CandidateProfile to update.
     */
    where: CandidateProfileWhereUniqueInput
  }

  /**
   * CandidateProfile updateMany
   */
  export type CandidateProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CandidateProfiles.
     */
    data: XOR<CandidateProfileUpdateManyMutationInput, CandidateProfileUncheckedUpdateManyInput>
    /**
     * Filter which CandidateProfiles to update
     */
    where?: CandidateProfileWhereInput
    /**
     * Limit how many CandidateProfiles to update.
     */
    limit?: number
  }

  /**
   * CandidateProfile updateManyAndReturn
   */
  export type CandidateProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * The data used to update CandidateProfiles.
     */
    data: XOR<CandidateProfileUpdateManyMutationInput, CandidateProfileUncheckedUpdateManyInput>
    /**
     * Filter which CandidateProfiles to update
     */
    where?: CandidateProfileWhereInput
    /**
     * Limit how many CandidateProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CandidateProfile upsert
   */
  export type CandidateProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the CandidateProfile to update in case it exists.
     */
    where: CandidateProfileWhereUniqueInput
    /**
     * In case the CandidateProfile found by the `where` argument doesn't exist, create a new CandidateProfile with this data.
     */
    create: XOR<CandidateProfileCreateInput, CandidateProfileUncheckedCreateInput>
    /**
     * In case the CandidateProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidateProfileUpdateInput, CandidateProfileUncheckedUpdateInput>
  }

  /**
   * CandidateProfile delete
   */
  export type CandidateProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * Filter which CandidateProfile to delete.
     */
    where: CandidateProfileWhereUniqueInput
  }

  /**
   * CandidateProfile deleteMany
   */
  export type CandidateProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateProfiles to delete
     */
    where?: CandidateProfileWhereInput
    /**
     * Limit how many CandidateProfiles to delete.
     */
    limit?: number
  }

  /**
   * CandidateProfile.candidateLanguages
   */
  export type CandidateProfile$candidateLanguagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageInclude<ExtArgs> | null
    where?: CandidateLanguageWhereInput
    orderBy?: CandidateLanguageOrderByWithRelationInput | CandidateLanguageOrderByWithRelationInput[]
    cursor?: CandidateLanguageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateLanguageScalarFieldEnum | CandidateLanguageScalarFieldEnum[]
  }

  /**
   * CandidateProfile.candidateEducations
   */
  export type CandidateProfile$candidateEducationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationInclude<ExtArgs> | null
    where?: CandidateEducationWhereInput
    orderBy?: CandidateEducationOrderByWithRelationInput | CandidateEducationOrderByWithRelationInput[]
    cursor?: CandidateEducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateEducationScalarFieldEnum | CandidateEducationScalarFieldEnum[]
  }

  /**
   * CandidateProfile.candidateExperiences
   */
  export type CandidateProfile$candidateExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateExperience
     */
    select?: CandidateExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateExperience
     */
    omit?: CandidateExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateExperienceInclude<ExtArgs> | null
    where?: CandidateExperienceWhereInput
    orderBy?: CandidateExperienceOrderByWithRelationInput | CandidateExperienceOrderByWithRelationInput[]
    cursor?: CandidateExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateExperienceScalarFieldEnum | CandidateExperienceScalarFieldEnum[]
  }

  /**
   * CandidateProfile without action
   */
  export type CandidateProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
  }


  /**
   * Model Language
   */

  export type AggregateLanguage = {
    _count: LanguageCountAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  export type LanguageMinAggregateOutputType = {
    name: string | null
  }

  export type LanguageMaxAggregateOutputType = {
    name: string | null
  }

  export type LanguageCountAggregateOutputType = {
    name: number
    _all: number
  }


  export type LanguageMinAggregateInputType = {
    name?: true
  }

  export type LanguageMaxAggregateInputType = {
    name?: true
  }

  export type LanguageCountAggregateInputType = {
    name?: true
    _all?: true
  }

  export type LanguageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Language to aggregate.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Languages
    **/
    _count?: true | LanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguageMaxAggregateInputType
  }

  export type GetLanguageAggregateType<T extends LanguageAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguage[P]>
      : GetScalarType<T[P], AggregateLanguage[P]>
  }




  export type LanguageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageWhereInput
    orderBy?: LanguageOrderByWithAggregationInput | LanguageOrderByWithAggregationInput[]
    by: LanguageScalarFieldEnum[] | LanguageScalarFieldEnum
    having?: LanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguageCountAggregateInputType | true
    _min?: LanguageMinAggregateInputType
    _max?: LanguageMaxAggregateInputType
  }

  export type LanguageGroupByOutputType = {
    name: string
    _count: LanguageCountAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  type GetLanguageGroupByPayload<T extends LanguageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguageGroupByOutputType[P]>
            : GetScalarType<T[P], LanguageGroupByOutputType[P]>
        }
      >
    >


  export type LanguageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    candidateLanguages?: boolean | Language$candidateLanguagesArgs<ExtArgs>
    _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectScalar = {
    name?: boolean
  }

  export type LanguageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name", ExtArgs["result"]["language"]>
  export type LanguageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateLanguages?: boolean | Language$candidateLanguagesArgs<ExtArgs>
    _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LanguageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LanguageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LanguagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Language"
    objects: {
      candidateLanguages: Prisma.$CandidateLanguagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
    }, ExtArgs["result"]["language"]>
    composites: {}
  }

  type LanguageGetPayload<S extends boolean | null | undefined | LanguageDefaultArgs> = $Result.GetResult<Prisma.$LanguagePayload, S>

  type LanguageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LanguageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LanguageCountAggregateInputType | true
    }

  export interface LanguageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Language'], meta: { name: 'Language' } }
    /**
     * Find zero or one Language that matches the filter.
     * @param {LanguageFindUniqueArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguageFindUniqueArgs>(args: SelectSubset<T, LanguageFindUniqueArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Language that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LanguageFindUniqueOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguageFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguageFindFirstArgs>(args?: SelectSubset<T, LanguageFindFirstArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguageFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguageFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Languages
     * const languages = await prisma.language.findMany()
     * 
     * // Get first 10 Languages
     * const languages = await prisma.language.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const languageWithNameOnly = await prisma.language.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends LanguageFindManyArgs>(args?: SelectSubset<T, LanguageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Language.
     * @param {LanguageCreateArgs} args - Arguments to create a Language.
     * @example
     * // Create one Language
     * const Language = await prisma.language.create({
     *   data: {
     *     // ... data to create a Language
     *   }
     * })
     * 
     */
    create<T extends LanguageCreateArgs>(args: SelectSubset<T, LanguageCreateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Languages.
     * @param {LanguageCreateManyArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguageCreateManyArgs>(args?: SelectSubset<T, LanguageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Languages and returns the data saved in the database.
     * @param {LanguageCreateManyAndReturnArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Languages and only return the `name`
     * const languageWithNameOnly = await prisma.language.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LanguageCreateManyAndReturnArgs>(args?: SelectSubset<T, LanguageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Language.
     * @param {LanguageDeleteArgs} args - Arguments to delete one Language.
     * @example
     * // Delete one Language
     * const Language = await prisma.language.delete({
     *   where: {
     *     // ... filter to delete one Language
     *   }
     * })
     * 
     */
    delete<T extends LanguageDeleteArgs>(args: SelectSubset<T, LanguageDeleteArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Language.
     * @param {LanguageUpdateArgs} args - Arguments to update one Language.
     * @example
     * // Update one Language
     * const language = await prisma.language.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguageUpdateArgs>(args: SelectSubset<T, LanguageUpdateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Languages.
     * @param {LanguageDeleteManyArgs} args - Arguments to filter Languages to delete.
     * @example
     * // Delete a few Languages
     * const { count } = await prisma.language.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguageDeleteManyArgs>(args?: SelectSubset<T, LanguageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguageUpdateManyArgs>(args: SelectSubset<T, LanguageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages and returns the data updated in the database.
     * @param {LanguageUpdateManyAndReturnArgs} args - Arguments to update many Languages.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Languages and only return the `name`
     * const languageWithNameOnly = await prisma.language.updateManyAndReturn({
     *   select: { name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LanguageUpdateManyAndReturnArgs>(args: SelectSubset<T, LanguageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Language.
     * @param {LanguageUpsertArgs} args - Arguments to update or create a Language.
     * @example
     * // Update or create a Language
     * const language = await prisma.language.upsert({
     *   create: {
     *     // ... data to create a Language
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Language we want to update
     *   }
     * })
     */
    upsert<T extends LanguageUpsertArgs>(args: SelectSubset<T, LanguageUpsertArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageCountArgs} args - Arguments to filter Languages to count.
     * @example
     * // Count the number of Languages
     * const count = await prisma.language.count({
     *   where: {
     *     // ... the filter for the Languages we want to count
     *   }
     * })
    **/
    count<T extends LanguageCountArgs>(
      args?: Subset<T, LanguageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LanguageAggregateArgs>(args: Subset<T, LanguageAggregateArgs>): Prisma.PrismaPromise<GetLanguageAggregateType<T>>

    /**
     * Group by Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguageGroupByArgs['orderBy'] }
        : { orderBy?: LanguageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Language model
   */
  readonly fields: LanguageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Language.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidateLanguages<T extends Language$candidateLanguagesArgs<ExtArgs> = {}>(args?: Subset<T, Language$candidateLanguagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateLanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Language model
   */
  interface LanguageFieldRefs {
    readonly name: FieldRef<"Language", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Language findUnique
   */
  export type LanguageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findUniqueOrThrow
   */
  export type LanguageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findFirst
   */
  export type LanguageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findFirstOrThrow
   */
  export type LanguageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findMany
   */
  export type LanguageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language create
   */
  export type LanguageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to create a Language.
     */
    data: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
  }

  /**
   * Language createMany
   */
  export type LanguageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language createManyAndReturn
   */
  export type LanguageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language update
   */
  export type LanguageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to update a Language.
     */
    data: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
    /**
     * Choose, which Language to update.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language updateMany
   */
  export type LanguageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
  }

  /**
   * Language updateManyAndReturn
   */
  export type LanguageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
  }

  /**
   * Language upsert
   */
  export type LanguageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The filter to search for the Language to update in case it exists.
     */
    where: LanguageWhereUniqueInput
    /**
     * In case the Language found by the `where` argument doesn't exist, create a new Language with this data.
     */
    create: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
    /**
     * In case the Language was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
  }

  /**
   * Language delete
   */
  export type LanguageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter which Language to delete.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language deleteMany
   */
  export type LanguageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Languages to delete
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to delete.
     */
    limit?: number
  }

  /**
   * Language.candidateLanguages
   */
  export type Language$candidateLanguagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageInclude<ExtArgs> | null
    where?: CandidateLanguageWhereInput
    orderBy?: CandidateLanguageOrderByWithRelationInput | CandidateLanguageOrderByWithRelationInput[]
    cursor?: CandidateLanguageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateLanguageScalarFieldEnum | CandidateLanguageScalarFieldEnum[]
  }

  /**
   * Language without action
   */
  export type LanguageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
  }


  /**
   * Model CandidateLanguage
   */

  export type AggregateCandidateLanguage = {
    _count: CandidateLanguageCountAggregateOutputType | null
    _avg: CandidateLanguageAvgAggregateOutputType | null
    _sum: CandidateLanguageSumAggregateOutputType | null
    _min: CandidateLanguageMinAggregateOutputType | null
    _max: CandidateLanguageMaxAggregateOutputType | null
  }

  export type CandidateLanguageAvgAggregateOutputType = {
    candidateProfileId: number | null
  }

  export type CandidateLanguageSumAggregateOutputType = {
    candidateProfileId: number | null
  }

  export type CandidateLanguageMinAggregateOutputType = {
    candidateProfileId: number | null
    languageName: string | null
    level: $Enums.Level | null
  }

  export type CandidateLanguageMaxAggregateOutputType = {
    candidateProfileId: number | null
    languageName: string | null
    level: $Enums.Level | null
  }

  export type CandidateLanguageCountAggregateOutputType = {
    candidateProfileId: number
    languageName: number
    level: number
    _all: number
  }


  export type CandidateLanguageAvgAggregateInputType = {
    candidateProfileId?: true
  }

  export type CandidateLanguageSumAggregateInputType = {
    candidateProfileId?: true
  }

  export type CandidateLanguageMinAggregateInputType = {
    candidateProfileId?: true
    languageName?: true
    level?: true
  }

  export type CandidateLanguageMaxAggregateInputType = {
    candidateProfileId?: true
    languageName?: true
    level?: true
  }

  export type CandidateLanguageCountAggregateInputType = {
    candidateProfileId?: true
    languageName?: true
    level?: true
    _all?: true
  }

  export type CandidateLanguageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateLanguage to aggregate.
     */
    where?: CandidateLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateLanguages to fetch.
     */
    orderBy?: CandidateLanguageOrderByWithRelationInput | CandidateLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidateLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateLanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CandidateLanguages
    **/
    _count?: true | CandidateLanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CandidateLanguageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CandidateLanguageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidateLanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidateLanguageMaxAggregateInputType
  }

  export type GetCandidateLanguageAggregateType<T extends CandidateLanguageAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidateLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidateLanguage[P]>
      : GetScalarType<T[P], AggregateCandidateLanguage[P]>
  }




  export type CandidateLanguageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateLanguageWhereInput
    orderBy?: CandidateLanguageOrderByWithAggregationInput | CandidateLanguageOrderByWithAggregationInput[]
    by: CandidateLanguageScalarFieldEnum[] | CandidateLanguageScalarFieldEnum
    having?: CandidateLanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidateLanguageCountAggregateInputType | true
    _avg?: CandidateLanguageAvgAggregateInputType
    _sum?: CandidateLanguageSumAggregateInputType
    _min?: CandidateLanguageMinAggregateInputType
    _max?: CandidateLanguageMaxAggregateInputType
  }

  export type CandidateLanguageGroupByOutputType = {
    candidateProfileId: number
    languageName: string
    level: $Enums.Level
    _count: CandidateLanguageCountAggregateOutputType | null
    _avg: CandidateLanguageAvgAggregateOutputType | null
    _sum: CandidateLanguageSumAggregateOutputType | null
    _min: CandidateLanguageMinAggregateOutputType | null
    _max: CandidateLanguageMaxAggregateOutputType | null
  }

  type GetCandidateLanguageGroupByPayload<T extends CandidateLanguageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateLanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidateLanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidateLanguageGroupByOutputType[P]>
            : GetScalarType<T[P], CandidateLanguageGroupByOutputType[P]>
        }
      >
    >


  export type CandidateLanguageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    candidateProfileId?: boolean
    languageName?: boolean
    level?: boolean
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateLanguage"]>

  export type CandidateLanguageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    candidateProfileId?: boolean
    languageName?: boolean
    level?: boolean
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateLanguage"]>

  export type CandidateLanguageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    candidateProfileId?: boolean
    languageName?: boolean
    level?: boolean
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateLanguage"]>

  export type CandidateLanguageSelectScalar = {
    candidateProfileId?: boolean
    languageName?: boolean
    level?: boolean
  }

  export type CandidateLanguageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"candidateProfileId" | "languageName" | "level", ExtArgs["result"]["candidateLanguage"]>
  export type CandidateLanguageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }
  export type CandidateLanguageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }
  export type CandidateLanguageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }

  export type $CandidateLanguagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CandidateLanguage"
    objects: {
      candidateProfile: Prisma.$CandidateProfilePayload<ExtArgs>
      language: Prisma.$LanguagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      candidateProfileId: number
      languageName: string
      level: $Enums.Level
    }, ExtArgs["result"]["candidateLanguage"]>
    composites: {}
  }

  type CandidateLanguageGetPayload<S extends boolean | null | undefined | CandidateLanguageDefaultArgs> = $Result.GetResult<Prisma.$CandidateLanguagePayload, S>

  type CandidateLanguageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidateLanguageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidateLanguageCountAggregateInputType | true
    }

  export interface CandidateLanguageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CandidateLanguage'], meta: { name: 'CandidateLanguage' } }
    /**
     * Find zero or one CandidateLanguage that matches the filter.
     * @param {CandidateLanguageFindUniqueArgs} args - Arguments to find a CandidateLanguage
     * @example
     * // Get one CandidateLanguage
     * const candidateLanguage = await prisma.candidateLanguage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateLanguageFindUniqueArgs>(args: SelectSubset<T, CandidateLanguageFindUniqueArgs<ExtArgs>>): Prisma__CandidateLanguageClient<$Result.GetResult<Prisma.$CandidateLanguagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CandidateLanguage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateLanguageFindUniqueOrThrowArgs} args - Arguments to find a CandidateLanguage
     * @example
     * // Get one CandidateLanguage
     * const candidateLanguage = await prisma.candidateLanguage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateLanguageFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidateLanguageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidateLanguageClient<$Result.GetResult<Prisma.$CandidateLanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateLanguage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateLanguageFindFirstArgs} args - Arguments to find a CandidateLanguage
     * @example
     * // Get one CandidateLanguage
     * const candidateLanguage = await prisma.candidateLanguage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateLanguageFindFirstArgs>(args?: SelectSubset<T, CandidateLanguageFindFirstArgs<ExtArgs>>): Prisma__CandidateLanguageClient<$Result.GetResult<Prisma.$CandidateLanguagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateLanguage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateLanguageFindFirstOrThrowArgs} args - Arguments to find a CandidateLanguage
     * @example
     * // Get one CandidateLanguage
     * const candidateLanguage = await prisma.candidateLanguage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateLanguageFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidateLanguageFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidateLanguageClient<$Result.GetResult<Prisma.$CandidateLanguagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CandidateLanguages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateLanguageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CandidateLanguages
     * const candidateLanguages = await prisma.candidateLanguage.findMany()
     * 
     * // Get first 10 CandidateLanguages
     * const candidateLanguages = await prisma.candidateLanguage.findMany({ take: 10 })
     * 
     * // Only select the `candidateProfileId`
     * const candidateLanguageWithCandidateProfileIdOnly = await prisma.candidateLanguage.findMany({ select: { candidateProfileId: true } })
     * 
     */
    findMany<T extends CandidateLanguageFindManyArgs>(args?: SelectSubset<T, CandidateLanguageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateLanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CandidateLanguage.
     * @param {CandidateLanguageCreateArgs} args - Arguments to create a CandidateLanguage.
     * @example
     * // Create one CandidateLanguage
     * const CandidateLanguage = await prisma.candidateLanguage.create({
     *   data: {
     *     // ... data to create a CandidateLanguage
     *   }
     * })
     * 
     */
    create<T extends CandidateLanguageCreateArgs>(args: SelectSubset<T, CandidateLanguageCreateArgs<ExtArgs>>): Prisma__CandidateLanguageClient<$Result.GetResult<Prisma.$CandidateLanguagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CandidateLanguages.
     * @param {CandidateLanguageCreateManyArgs} args - Arguments to create many CandidateLanguages.
     * @example
     * // Create many CandidateLanguages
     * const candidateLanguage = await prisma.candidateLanguage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidateLanguageCreateManyArgs>(args?: SelectSubset<T, CandidateLanguageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CandidateLanguages and returns the data saved in the database.
     * @param {CandidateLanguageCreateManyAndReturnArgs} args - Arguments to create many CandidateLanguages.
     * @example
     * // Create many CandidateLanguages
     * const candidateLanguage = await prisma.candidateLanguage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CandidateLanguages and only return the `candidateProfileId`
     * const candidateLanguageWithCandidateProfileIdOnly = await prisma.candidateLanguage.createManyAndReturn({
     *   select: { candidateProfileId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidateLanguageCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidateLanguageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateLanguagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CandidateLanguage.
     * @param {CandidateLanguageDeleteArgs} args - Arguments to delete one CandidateLanguage.
     * @example
     * // Delete one CandidateLanguage
     * const CandidateLanguage = await prisma.candidateLanguage.delete({
     *   where: {
     *     // ... filter to delete one CandidateLanguage
     *   }
     * })
     * 
     */
    delete<T extends CandidateLanguageDeleteArgs>(args: SelectSubset<T, CandidateLanguageDeleteArgs<ExtArgs>>): Prisma__CandidateLanguageClient<$Result.GetResult<Prisma.$CandidateLanguagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CandidateLanguage.
     * @param {CandidateLanguageUpdateArgs} args - Arguments to update one CandidateLanguage.
     * @example
     * // Update one CandidateLanguage
     * const candidateLanguage = await prisma.candidateLanguage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidateLanguageUpdateArgs>(args: SelectSubset<T, CandidateLanguageUpdateArgs<ExtArgs>>): Prisma__CandidateLanguageClient<$Result.GetResult<Prisma.$CandidateLanguagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CandidateLanguages.
     * @param {CandidateLanguageDeleteManyArgs} args - Arguments to filter CandidateLanguages to delete.
     * @example
     * // Delete a few CandidateLanguages
     * const { count } = await prisma.candidateLanguage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidateLanguageDeleteManyArgs>(args?: SelectSubset<T, CandidateLanguageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateLanguages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateLanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CandidateLanguages
     * const candidateLanguage = await prisma.candidateLanguage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidateLanguageUpdateManyArgs>(args: SelectSubset<T, CandidateLanguageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateLanguages and returns the data updated in the database.
     * @param {CandidateLanguageUpdateManyAndReturnArgs} args - Arguments to update many CandidateLanguages.
     * @example
     * // Update many CandidateLanguages
     * const candidateLanguage = await prisma.candidateLanguage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CandidateLanguages and only return the `candidateProfileId`
     * const candidateLanguageWithCandidateProfileIdOnly = await prisma.candidateLanguage.updateManyAndReturn({
     *   select: { candidateProfileId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CandidateLanguageUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidateLanguageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateLanguagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CandidateLanguage.
     * @param {CandidateLanguageUpsertArgs} args - Arguments to update or create a CandidateLanguage.
     * @example
     * // Update or create a CandidateLanguage
     * const candidateLanguage = await prisma.candidateLanguage.upsert({
     *   create: {
     *     // ... data to create a CandidateLanguage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CandidateLanguage we want to update
     *   }
     * })
     */
    upsert<T extends CandidateLanguageUpsertArgs>(args: SelectSubset<T, CandidateLanguageUpsertArgs<ExtArgs>>): Prisma__CandidateLanguageClient<$Result.GetResult<Prisma.$CandidateLanguagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CandidateLanguages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateLanguageCountArgs} args - Arguments to filter CandidateLanguages to count.
     * @example
     * // Count the number of CandidateLanguages
     * const count = await prisma.candidateLanguage.count({
     *   where: {
     *     // ... the filter for the CandidateLanguages we want to count
     *   }
     * })
    **/
    count<T extends CandidateLanguageCountArgs>(
      args?: Subset<T, CandidateLanguageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateLanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CandidateLanguage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateLanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CandidateLanguageAggregateArgs>(args: Subset<T, CandidateLanguageAggregateArgs>): Prisma.PrismaPromise<GetCandidateLanguageAggregateType<T>>

    /**
     * Group by CandidateLanguage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateLanguageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CandidateLanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidateLanguageGroupByArgs['orderBy'] }
        : { orderBy?: CandidateLanguageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CandidateLanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CandidateLanguage model
   */
  readonly fields: CandidateLanguageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CandidateLanguage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidateLanguageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidateProfile<T extends CandidateProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidateProfileDefaultArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    language<T extends LanguageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LanguageDefaultArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CandidateLanguage model
   */
  interface CandidateLanguageFieldRefs {
    readonly candidateProfileId: FieldRef<"CandidateLanguage", 'Int'>
    readonly languageName: FieldRef<"CandidateLanguage", 'String'>
    readonly level: FieldRef<"CandidateLanguage", 'Level'>
  }
    

  // Custom InputTypes
  /**
   * CandidateLanguage findUnique
   */
  export type CandidateLanguageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageInclude<ExtArgs> | null
    /**
     * Filter, which CandidateLanguage to fetch.
     */
    where: CandidateLanguageWhereUniqueInput
  }

  /**
   * CandidateLanguage findUniqueOrThrow
   */
  export type CandidateLanguageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageInclude<ExtArgs> | null
    /**
     * Filter, which CandidateLanguage to fetch.
     */
    where: CandidateLanguageWhereUniqueInput
  }

  /**
   * CandidateLanguage findFirst
   */
  export type CandidateLanguageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageInclude<ExtArgs> | null
    /**
     * Filter, which CandidateLanguage to fetch.
     */
    where?: CandidateLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateLanguages to fetch.
     */
    orderBy?: CandidateLanguageOrderByWithRelationInput | CandidateLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateLanguages.
     */
    cursor?: CandidateLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateLanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateLanguages.
     */
    distinct?: CandidateLanguageScalarFieldEnum | CandidateLanguageScalarFieldEnum[]
  }

  /**
   * CandidateLanguage findFirstOrThrow
   */
  export type CandidateLanguageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageInclude<ExtArgs> | null
    /**
     * Filter, which CandidateLanguage to fetch.
     */
    where?: CandidateLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateLanguages to fetch.
     */
    orderBy?: CandidateLanguageOrderByWithRelationInput | CandidateLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateLanguages.
     */
    cursor?: CandidateLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateLanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateLanguages.
     */
    distinct?: CandidateLanguageScalarFieldEnum | CandidateLanguageScalarFieldEnum[]
  }

  /**
   * CandidateLanguage findMany
   */
  export type CandidateLanguageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageInclude<ExtArgs> | null
    /**
     * Filter, which CandidateLanguages to fetch.
     */
    where?: CandidateLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateLanguages to fetch.
     */
    orderBy?: CandidateLanguageOrderByWithRelationInput | CandidateLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CandidateLanguages.
     */
    cursor?: CandidateLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateLanguages.
     */
    skip?: number
    distinct?: CandidateLanguageScalarFieldEnum | CandidateLanguageScalarFieldEnum[]
  }

  /**
   * CandidateLanguage create
   */
  export type CandidateLanguageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageInclude<ExtArgs> | null
    /**
     * The data needed to create a CandidateLanguage.
     */
    data: XOR<CandidateLanguageCreateInput, CandidateLanguageUncheckedCreateInput>
  }

  /**
   * CandidateLanguage createMany
   */
  export type CandidateLanguageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CandidateLanguages.
     */
    data: CandidateLanguageCreateManyInput | CandidateLanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CandidateLanguage createManyAndReturn
   */
  export type CandidateLanguageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * The data used to create many CandidateLanguages.
     */
    data: CandidateLanguageCreateManyInput | CandidateLanguageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CandidateLanguage update
   */
  export type CandidateLanguageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageInclude<ExtArgs> | null
    /**
     * The data needed to update a CandidateLanguage.
     */
    data: XOR<CandidateLanguageUpdateInput, CandidateLanguageUncheckedUpdateInput>
    /**
     * Choose, which CandidateLanguage to update.
     */
    where: CandidateLanguageWhereUniqueInput
  }

  /**
   * CandidateLanguage updateMany
   */
  export type CandidateLanguageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CandidateLanguages.
     */
    data: XOR<CandidateLanguageUpdateManyMutationInput, CandidateLanguageUncheckedUpdateManyInput>
    /**
     * Filter which CandidateLanguages to update
     */
    where?: CandidateLanguageWhereInput
    /**
     * Limit how many CandidateLanguages to update.
     */
    limit?: number
  }

  /**
   * CandidateLanguage updateManyAndReturn
   */
  export type CandidateLanguageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * The data used to update CandidateLanguages.
     */
    data: XOR<CandidateLanguageUpdateManyMutationInput, CandidateLanguageUncheckedUpdateManyInput>
    /**
     * Filter which CandidateLanguages to update
     */
    where?: CandidateLanguageWhereInput
    /**
     * Limit how many CandidateLanguages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CandidateLanguage upsert
   */
  export type CandidateLanguageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageInclude<ExtArgs> | null
    /**
     * The filter to search for the CandidateLanguage to update in case it exists.
     */
    where: CandidateLanguageWhereUniqueInput
    /**
     * In case the CandidateLanguage found by the `where` argument doesn't exist, create a new CandidateLanguage with this data.
     */
    create: XOR<CandidateLanguageCreateInput, CandidateLanguageUncheckedCreateInput>
    /**
     * In case the CandidateLanguage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidateLanguageUpdateInput, CandidateLanguageUncheckedUpdateInput>
  }

  /**
   * CandidateLanguage delete
   */
  export type CandidateLanguageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageInclude<ExtArgs> | null
    /**
     * Filter which CandidateLanguage to delete.
     */
    where: CandidateLanguageWhereUniqueInput
  }

  /**
   * CandidateLanguage deleteMany
   */
  export type CandidateLanguageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateLanguages to delete
     */
    where?: CandidateLanguageWhereInput
    /**
     * Limit how many CandidateLanguages to delete.
     */
    limit?: number
  }

  /**
   * CandidateLanguage without action
   */
  export type CandidateLanguageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageInclude<ExtArgs> | null
  }


  /**
   * Model Education
   */

  export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null
    _avg: EducationAvgAggregateOutputType | null
    _sum: EducationSumAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  export type EducationAvgAggregateOutputType = {
    id: number | null
  }

  export type EducationSumAggregateOutputType = {
    id: number | null
  }

  export type EducationMinAggregateOutputType = {
    id: number | null
    name: string | null
    map: string | null
    slug: string | null
  }

  export type EducationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    map: string | null
    slug: string | null
  }

  export type EducationCountAggregateOutputType = {
    id: number
    name: number
    map: number
    slug: number
    _all: number
  }


  export type EducationAvgAggregateInputType = {
    id?: true
  }

  export type EducationSumAggregateInputType = {
    id?: true
  }

  export type EducationMinAggregateInputType = {
    id?: true
    name?: true
    map?: true
    slug?: true
  }

  export type EducationMaxAggregateInputType = {
    id?: true
    name?: true
    map?: true
    slug?: true
  }

  export type EducationCountAggregateInputType = {
    id?: true
    name?: true
    map?: true
    slug?: true
    _all?: true
  }

  export type EducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Education to aggregate.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Educations
    **/
    _count?: true | EducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EducationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EducationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationMaxAggregateInputType
  }

  export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation[P]>
      : GetScalarType<T[P], AggregateEducation[P]>
  }




  export type EducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithAggregationInput | EducationOrderByWithAggregationInput[]
    by: EducationScalarFieldEnum[] | EducationScalarFieldEnum
    having?: EducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationCountAggregateInputType | true
    _avg?: EducationAvgAggregateInputType
    _sum?: EducationSumAggregateInputType
    _min?: EducationMinAggregateInputType
    _max?: EducationMaxAggregateInputType
  }

  export type EducationGroupByOutputType = {
    id: number
    name: string
    map: string
    slug: string
    _count: EducationCountAggregateOutputType | null
    _avg: EducationAvgAggregateOutputType | null
    _sum: EducationSumAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  type GetEducationGroupByPayload<T extends EducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationGroupByOutputType[P]>
            : GetScalarType<T[P], EducationGroupByOutputType[P]>
        }
      >
    >


  export type EducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    map?: boolean
    slug?: boolean
    candidateEducations?: boolean | Education$candidateEducationsArgs<ExtArgs>
    _count?: boolean | EducationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    map?: boolean
    slug?: boolean
  }, ExtArgs["result"]["education"]>

  export type EducationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    map?: boolean
    slug?: boolean
  }, ExtArgs["result"]["education"]>

  export type EducationSelectScalar = {
    id?: boolean
    name?: boolean
    map?: boolean
    slug?: boolean
  }

  export type EducationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "map" | "slug", ExtArgs["result"]["education"]>
  export type EducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateEducations?: boolean | Education$candidateEducationsArgs<ExtArgs>
    _count?: boolean | EducationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EducationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EducationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Education"
    objects: {
      candidateEducations: Prisma.$CandidateEducationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      map: string
      slug: string
    }, ExtArgs["result"]["education"]>
    composites: {}
  }

  type EducationGetPayload<S extends boolean | null | undefined | EducationDefaultArgs> = $Result.GetResult<Prisma.$EducationPayload, S>

  type EducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EducationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EducationCountAggregateInputType | true
    }

  export interface EducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Education'], meta: { name: 'Education' } }
    /**
     * Find zero or one Education that matches the filter.
     * @param {EducationFindUniqueArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducationFindUniqueArgs>(args: SelectSubset<T, EducationFindUniqueArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Education that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EducationFindUniqueOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducationFindUniqueOrThrowArgs>(args: SelectSubset<T, EducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducationFindFirstArgs>(args?: SelectSubset<T, EducationFindFirstArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducationFindFirstOrThrowArgs>(args?: SelectSubset<T, EducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.education.findMany()
     * 
     * // Get first 10 Educations
     * const educations = await prisma.education.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationWithIdOnly = await prisma.education.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EducationFindManyArgs>(args?: SelectSubset<T, EducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Education.
     * @param {EducationCreateArgs} args - Arguments to create a Education.
     * @example
     * // Create one Education
     * const Education = await prisma.education.create({
     *   data: {
     *     // ... data to create a Education
     *   }
     * })
     * 
     */
    create<T extends EducationCreateArgs>(args: SelectSubset<T, EducationCreateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Educations.
     * @param {EducationCreateManyArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducationCreateManyArgs>(args?: SelectSubset<T, EducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Educations and returns the data saved in the database.
     * @param {EducationCreateManyAndReturnArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EducationCreateManyAndReturnArgs>(args?: SelectSubset<T, EducationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Education.
     * @param {EducationDeleteArgs} args - Arguments to delete one Education.
     * @example
     * // Delete one Education
     * const Education = await prisma.education.delete({
     *   where: {
     *     // ... filter to delete one Education
     *   }
     * })
     * 
     */
    delete<T extends EducationDeleteArgs>(args: SelectSubset<T, EducationDeleteArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Education.
     * @param {EducationUpdateArgs} args - Arguments to update one Education.
     * @example
     * // Update one Education
     * const education = await prisma.education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducationUpdateArgs>(args: SelectSubset<T, EducationUpdateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Educations.
     * @param {EducationDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducationDeleteManyArgs>(args?: SelectSubset<T, EducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducationUpdateManyArgs>(args: SelectSubset<T, EducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations and returns the data updated in the database.
     * @param {EducationUpdateManyAndReturnArgs} args - Arguments to update many Educations.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EducationUpdateManyAndReturnArgs>(args: SelectSubset<T, EducationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Education.
     * @param {EducationUpsertArgs} args - Arguments to update or create a Education.
     * @example
     * // Update or create a Education
     * const education = await prisma.education.upsert({
     *   create: {
     *     // ... data to create a Education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education we want to update
     *   }
     * })
     */
    upsert<T extends EducationUpsertArgs>(args: SelectSubset<T, EducationUpsertArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.education.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
    **/
    count<T extends EducationCountArgs>(
      args?: Subset<T, EducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EducationAggregateArgs>(args: Subset<T, EducationAggregateArgs>): Prisma.PrismaPromise<GetEducationAggregateType<T>>

    /**
     * Group by Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationGroupByArgs['orderBy'] }
        : { orderBy?: EducationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Education model
   */
  readonly fields: EducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidateEducations<T extends Education$candidateEducationsArgs<ExtArgs> = {}>(args?: Subset<T, Education$candidateEducationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateEducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Education model
   */
  interface EducationFieldRefs {
    readonly id: FieldRef<"Education", 'Int'>
    readonly name: FieldRef<"Education", 'String'>
    readonly map: FieldRef<"Education", 'String'>
    readonly slug: FieldRef<"Education", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Education findUnique
   */
  export type EducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findUniqueOrThrow
   */
  export type EducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findFirst
   */
  export type EducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findFirstOrThrow
   */
  export type EducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findMany
   */
  export type EducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Educations to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education create
   */
  export type EducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to create a Education.
     */
    data: XOR<EducationCreateInput, EducationUncheckedCreateInput>
  }

  /**
   * Education createMany
   */
  export type EducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Education createManyAndReturn
   */
  export type EducationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Education update
   */
  export type EducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to update a Education.
     */
    data: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
    /**
     * Choose, which Education to update.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education updateMany
   */
  export type EducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
  }

  /**
   * Education updateManyAndReturn
   */
  export type EducationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
  }

  /**
   * Education upsert
   */
  export type EducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The filter to search for the Education to update in case it exists.
     */
    where: EducationWhereUniqueInput
    /**
     * In case the Education found by the `where` argument doesn't exist, create a new Education with this data.
     */
    create: XOR<EducationCreateInput, EducationUncheckedCreateInput>
    /**
     * In case the Education was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
  }

  /**
   * Education delete
   */
  export type EducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter which Education to delete.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education deleteMany
   */
  export type EducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Educations to delete
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to delete.
     */
    limit?: number
  }

  /**
   * Education.candidateEducations
   */
  export type Education$candidateEducationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationInclude<ExtArgs> | null
    where?: CandidateEducationWhereInput
    orderBy?: CandidateEducationOrderByWithRelationInput | CandidateEducationOrderByWithRelationInput[]
    cursor?: CandidateEducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateEducationScalarFieldEnum | CandidateEducationScalarFieldEnum[]
  }

  /**
   * Education without action
   */
  export type EducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
  }


  /**
   * Model CandidateEducation
   */

  export type AggregateCandidateEducation = {
    _count: CandidateEducationCountAggregateOutputType | null
    _avg: CandidateEducationAvgAggregateOutputType | null
    _sum: CandidateEducationSumAggregateOutputType | null
    _min: CandidateEducationMinAggregateOutputType | null
    _max: CandidateEducationMaxAggregateOutputType | null
  }

  export type CandidateEducationAvgAggregateOutputType = {
    candidateProfileId: number | null
    educationId: number | null
    yearStart: number | null
    yearEnd: number | null
  }

  export type CandidateEducationSumAggregateOutputType = {
    candidateProfileId: number | null
    educationId: number | null
    yearStart: number | null
    yearEnd: number | null
  }

  export type CandidateEducationMinAggregateOutputType = {
    candidateProfileId: number | null
    educationId: number | null
    major: string | null
    degree: string | null
    yearStart: number | null
    yearEnd: number | null
  }

  export type CandidateEducationMaxAggregateOutputType = {
    candidateProfileId: number | null
    educationId: number | null
    major: string | null
    degree: string | null
    yearStart: number | null
    yearEnd: number | null
  }

  export type CandidateEducationCountAggregateOutputType = {
    candidateProfileId: number
    educationId: number
    major: number
    degree: number
    yearStart: number
    yearEnd: number
    _all: number
  }


  export type CandidateEducationAvgAggregateInputType = {
    candidateProfileId?: true
    educationId?: true
    yearStart?: true
    yearEnd?: true
  }

  export type CandidateEducationSumAggregateInputType = {
    candidateProfileId?: true
    educationId?: true
    yearStart?: true
    yearEnd?: true
  }

  export type CandidateEducationMinAggregateInputType = {
    candidateProfileId?: true
    educationId?: true
    major?: true
    degree?: true
    yearStart?: true
    yearEnd?: true
  }

  export type CandidateEducationMaxAggregateInputType = {
    candidateProfileId?: true
    educationId?: true
    major?: true
    degree?: true
    yearStart?: true
    yearEnd?: true
  }

  export type CandidateEducationCountAggregateInputType = {
    candidateProfileId?: true
    educationId?: true
    major?: true
    degree?: true
    yearStart?: true
    yearEnd?: true
    _all?: true
  }

  export type CandidateEducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateEducation to aggregate.
     */
    where?: CandidateEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateEducations to fetch.
     */
    orderBy?: CandidateEducationOrderByWithRelationInput | CandidateEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidateEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateEducations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CandidateEducations
    **/
    _count?: true | CandidateEducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CandidateEducationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CandidateEducationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidateEducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidateEducationMaxAggregateInputType
  }

  export type GetCandidateEducationAggregateType<T extends CandidateEducationAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidateEducation[P]>
      : GetScalarType<T[P], AggregateCandidateEducation[P]>
  }




  export type CandidateEducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateEducationWhereInput
    orderBy?: CandidateEducationOrderByWithAggregationInput | CandidateEducationOrderByWithAggregationInput[]
    by: CandidateEducationScalarFieldEnum[] | CandidateEducationScalarFieldEnum
    having?: CandidateEducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidateEducationCountAggregateInputType | true
    _avg?: CandidateEducationAvgAggregateInputType
    _sum?: CandidateEducationSumAggregateInputType
    _min?: CandidateEducationMinAggregateInputType
    _max?: CandidateEducationMaxAggregateInputType
  }

  export type CandidateEducationGroupByOutputType = {
    candidateProfileId: number
    educationId: number
    major: string
    degree: string
    yearStart: number
    yearEnd: number
    _count: CandidateEducationCountAggregateOutputType | null
    _avg: CandidateEducationAvgAggregateOutputType | null
    _sum: CandidateEducationSumAggregateOutputType | null
    _min: CandidateEducationMinAggregateOutputType | null
    _max: CandidateEducationMaxAggregateOutputType | null
  }

  type GetCandidateEducationGroupByPayload<T extends CandidateEducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateEducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidateEducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidateEducationGroupByOutputType[P]>
            : GetScalarType<T[P], CandidateEducationGroupByOutputType[P]>
        }
      >
    >


  export type CandidateEducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    candidateProfileId?: boolean
    educationId?: boolean
    major?: boolean
    degree?: boolean
    yearStart?: boolean
    yearEnd?: boolean
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    education?: boolean | EducationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateEducation"]>

  export type CandidateEducationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    candidateProfileId?: boolean
    educationId?: boolean
    major?: boolean
    degree?: boolean
    yearStart?: boolean
    yearEnd?: boolean
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    education?: boolean | EducationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateEducation"]>

  export type CandidateEducationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    candidateProfileId?: boolean
    educationId?: boolean
    major?: boolean
    degree?: boolean
    yearStart?: boolean
    yearEnd?: boolean
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    education?: boolean | EducationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateEducation"]>

  export type CandidateEducationSelectScalar = {
    candidateProfileId?: boolean
    educationId?: boolean
    major?: boolean
    degree?: boolean
    yearStart?: boolean
    yearEnd?: boolean
  }

  export type CandidateEducationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"candidateProfileId" | "educationId" | "major" | "degree" | "yearStart" | "yearEnd", ExtArgs["result"]["candidateEducation"]>
  export type CandidateEducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    education?: boolean | EducationDefaultArgs<ExtArgs>
  }
  export type CandidateEducationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    education?: boolean | EducationDefaultArgs<ExtArgs>
  }
  export type CandidateEducationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    education?: boolean | EducationDefaultArgs<ExtArgs>
  }

  export type $CandidateEducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CandidateEducation"
    objects: {
      candidateProfile: Prisma.$CandidateProfilePayload<ExtArgs>
      education: Prisma.$EducationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      candidateProfileId: number
      educationId: number
      major: string
      degree: string
      yearStart: number
      yearEnd: number
    }, ExtArgs["result"]["candidateEducation"]>
    composites: {}
  }

  type CandidateEducationGetPayload<S extends boolean | null | undefined | CandidateEducationDefaultArgs> = $Result.GetResult<Prisma.$CandidateEducationPayload, S>

  type CandidateEducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidateEducationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidateEducationCountAggregateInputType | true
    }

  export interface CandidateEducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CandidateEducation'], meta: { name: 'CandidateEducation' } }
    /**
     * Find zero or one CandidateEducation that matches the filter.
     * @param {CandidateEducationFindUniqueArgs} args - Arguments to find a CandidateEducation
     * @example
     * // Get one CandidateEducation
     * const candidateEducation = await prisma.candidateEducation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateEducationFindUniqueArgs>(args: SelectSubset<T, CandidateEducationFindUniqueArgs<ExtArgs>>): Prisma__CandidateEducationClient<$Result.GetResult<Prisma.$CandidateEducationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CandidateEducation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateEducationFindUniqueOrThrowArgs} args - Arguments to find a CandidateEducation
     * @example
     * // Get one CandidateEducation
     * const candidateEducation = await prisma.candidateEducation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateEducationFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidateEducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidateEducationClient<$Result.GetResult<Prisma.$CandidateEducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateEducation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateEducationFindFirstArgs} args - Arguments to find a CandidateEducation
     * @example
     * // Get one CandidateEducation
     * const candidateEducation = await prisma.candidateEducation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateEducationFindFirstArgs>(args?: SelectSubset<T, CandidateEducationFindFirstArgs<ExtArgs>>): Prisma__CandidateEducationClient<$Result.GetResult<Prisma.$CandidateEducationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateEducation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateEducationFindFirstOrThrowArgs} args - Arguments to find a CandidateEducation
     * @example
     * // Get one CandidateEducation
     * const candidateEducation = await prisma.candidateEducation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateEducationFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidateEducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidateEducationClient<$Result.GetResult<Prisma.$CandidateEducationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CandidateEducations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateEducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CandidateEducations
     * const candidateEducations = await prisma.candidateEducation.findMany()
     * 
     * // Get first 10 CandidateEducations
     * const candidateEducations = await prisma.candidateEducation.findMany({ take: 10 })
     * 
     * // Only select the `candidateProfileId`
     * const candidateEducationWithCandidateProfileIdOnly = await prisma.candidateEducation.findMany({ select: { candidateProfileId: true } })
     * 
     */
    findMany<T extends CandidateEducationFindManyArgs>(args?: SelectSubset<T, CandidateEducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateEducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CandidateEducation.
     * @param {CandidateEducationCreateArgs} args - Arguments to create a CandidateEducation.
     * @example
     * // Create one CandidateEducation
     * const CandidateEducation = await prisma.candidateEducation.create({
     *   data: {
     *     // ... data to create a CandidateEducation
     *   }
     * })
     * 
     */
    create<T extends CandidateEducationCreateArgs>(args: SelectSubset<T, CandidateEducationCreateArgs<ExtArgs>>): Prisma__CandidateEducationClient<$Result.GetResult<Prisma.$CandidateEducationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CandidateEducations.
     * @param {CandidateEducationCreateManyArgs} args - Arguments to create many CandidateEducations.
     * @example
     * // Create many CandidateEducations
     * const candidateEducation = await prisma.candidateEducation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidateEducationCreateManyArgs>(args?: SelectSubset<T, CandidateEducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CandidateEducations and returns the data saved in the database.
     * @param {CandidateEducationCreateManyAndReturnArgs} args - Arguments to create many CandidateEducations.
     * @example
     * // Create many CandidateEducations
     * const candidateEducation = await prisma.candidateEducation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CandidateEducations and only return the `candidateProfileId`
     * const candidateEducationWithCandidateProfileIdOnly = await prisma.candidateEducation.createManyAndReturn({
     *   select: { candidateProfileId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidateEducationCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidateEducationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateEducationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CandidateEducation.
     * @param {CandidateEducationDeleteArgs} args - Arguments to delete one CandidateEducation.
     * @example
     * // Delete one CandidateEducation
     * const CandidateEducation = await prisma.candidateEducation.delete({
     *   where: {
     *     // ... filter to delete one CandidateEducation
     *   }
     * })
     * 
     */
    delete<T extends CandidateEducationDeleteArgs>(args: SelectSubset<T, CandidateEducationDeleteArgs<ExtArgs>>): Prisma__CandidateEducationClient<$Result.GetResult<Prisma.$CandidateEducationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CandidateEducation.
     * @param {CandidateEducationUpdateArgs} args - Arguments to update one CandidateEducation.
     * @example
     * // Update one CandidateEducation
     * const candidateEducation = await prisma.candidateEducation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidateEducationUpdateArgs>(args: SelectSubset<T, CandidateEducationUpdateArgs<ExtArgs>>): Prisma__CandidateEducationClient<$Result.GetResult<Prisma.$CandidateEducationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CandidateEducations.
     * @param {CandidateEducationDeleteManyArgs} args - Arguments to filter CandidateEducations to delete.
     * @example
     * // Delete a few CandidateEducations
     * const { count } = await prisma.candidateEducation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidateEducationDeleteManyArgs>(args?: SelectSubset<T, CandidateEducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateEducations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateEducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CandidateEducations
     * const candidateEducation = await prisma.candidateEducation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidateEducationUpdateManyArgs>(args: SelectSubset<T, CandidateEducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateEducations and returns the data updated in the database.
     * @param {CandidateEducationUpdateManyAndReturnArgs} args - Arguments to update many CandidateEducations.
     * @example
     * // Update many CandidateEducations
     * const candidateEducation = await prisma.candidateEducation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CandidateEducations and only return the `candidateProfileId`
     * const candidateEducationWithCandidateProfileIdOnly = await prisma.candidateEducation.updateManyAndReturn({
     *   select: { candidateProfileId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CandidateEducationUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidateEducationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateEducationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CandidateEducation.
     * @param {CandidateEducationUpsertArgs} args - Arguments to update or create a CandidateEducation.
     * @example
     * // Update or create a CandidateEducation
     * const candidateEducation = await prisma.candidateEducation.upsert({
     *   create: {
     *     // ... data to create a CandidateEducation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CandidateEducation we want to update
     *   }
     * })
     */
    upsert<T extends CandidateEducationUpsertArgs>(args: SelectSubset<T, CandidateEducationUpsertArgs<ExtArgs>>): Prisma__CandidateEducationClient<$Result.GetResult<Prisma.$CandidateEducationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CandidateEducations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateEducationCountArgs} args - Arguments to filter CandidateEducations to count.
     * @example
     * // Count the number of CandidateEducations
     * const count = await prisma.candidateEducation.count({
     *   where: {
     *     // ... the filter for the CandidateEducations we want to count
     *   }
     * })
    **/
    count<T extends CandidateEducationCountArgs>(
      args?: Subset<T, CandidateEducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateEducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CandidateEducation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateEducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CandidateEducationAggregateArgs>(args: Subset<T, CandidateEducationAggregateArgs>): Prisma.PrismaPromise<GetCandidateEducationAggregateType<T>>

    /**
     * Group by CandidateEducation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateEducationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CandidateEducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidateEducationGroupByArgs['orderBy'] }
        : { orderBy?: CandidateEducationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CandidateEducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CandidateEducation model
   */
  readonly fields: CandidateEducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CandidateEducation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidateEducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidateProfile<T extends CandidateProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidateProfileDefaultArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    education<T extends EducationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EducationDefaultArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CandidateEducation model
   */
  interface CandidateEducationFieldRefs {
    readonly candidateProfileId: FieldRef<"CandidateEducation", 'Int'>
    readonly educationId: FieldRef<"CandidateEducation", 'Int'>
    readonly major: FieldRef<"CandidateEducation", 'String'>
    readonly degree: FieldRef<"CandidateEducation", 'String'>
    readonly yearStart: FieldRef<"CandidateEducation", 'Int'>
    readonly yearEnd: FieldRef<"CandidateEducation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CandidateEducation findUnique
   */
  export type CandidateEducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationInclude<ExtArgs> | null
    /**
     * Filter, which CandidateEducation to fetch.
     */
    where: CandidateEducationWhereUniqueInput
  }

  /**
   * CandidateEducation findUniqueOrThrow
   */
  export type CandidateEducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationInclude<ExtArgs> | null
    /**
     * Filter, which CandidateEducation to fetch.
     */
    where: CandidateEducationWhereUniqueInput
  }

  /**
   * CandidateEducation findFirst
   */
  export type CandidateEducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationInclude<ExtArgs> | null
    /**
     * Filter, which CandidateEducation to fetch.
     */
    where?: CandidateEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateEducations to fetch.
     */
    orderBy?: CandidateEducationOrderByWithRelationInput | CandidateEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateEducations.
     */
    cursor?: CandidateEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateEducations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateEducations.
     */
    distinct?: CandidateEducationScalarFieldEnum | CandidateEducationScalarFieldEnum[]
  }

  /**
   * CandidateEducation findFirstOrThrow
   */
  export type CandidateEducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationInclude<ExtArgs> | null
    /**
     * Filter, which CandidateEducation to fetch.
     */
    where?: CandidateEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateEducations to fetch.
     */
    orderBy?: CandidateEducationOrderByWithRelationInput | CandidateEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateEducations.
     */
    cursor?: CandidateEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateEducations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateEducations.
     */
    distinct?: CandidateEducationScalarFieldEnum | CandidateEducationScalarFieldEnum[]
  }

  /**
   * CandidateEducation findMany
   */
  export type CandidateEducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationInclude<ExtArgs> | null
    /**
     * Filter, which CandidateEducations to fetch.
     */
    where?: CandidateEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateEducations to fetch.
     */
    orderBy?: CandidateEducationOrderByWithRelationInput | CandidateEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CandidateEducations.
     */
    cursor?: CandidateEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateEducations.
     */
    skip?: number
    distinct?: CandidateEducationScalarFieldEnum | CandidateEducationScalarFieldEnum[]
  }

  /**
   * CandidateEducation create
   */
  export type CandidateEducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationInclude<ExtArgs> | null
    /**
     * The data needed to create a CandidateEducation.
     */
    data: XOR<CandidateEducationCreateInput, CandidateEducationUncheckedCreateInput>
  }

  /**
   * CandidateEducation createMany
   */
  export type CandidateEducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CandidateEducations.
     */
    data: CandidateEducationCreateManyInput | CandidateEducationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CandidateEducation createManyAndReturn
   */
  export type CandidateEducationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * The data used to create many CandidateEducations.
     */
    data: CandidateEducationCreateManyInput | CandidateEducationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CandidateEducation update
   */
  export type CandidateEducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationInclude<ExtArgs> | null
    /**
     * The data needed to update a CandidateEducation.
     */
    data: XOR<CandidateEducationUpdateInput, CandidateEducationUncheckedUpdateInput>
    /**
     * Choose, which CandidateEducation to update.
     */
    where: CandidateEducationWhereUniqueInput
  }

  /**
   * CandidateEducation updateMany
   */
  export type CandidateEducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CandidateEducations.
     */
    data: XOR<CandidateEducationUpdateManyMutationInput, CandidateEducationUncheckedUpdateManyInput>
    /**
     * Filter which CandidateEducations to update
     */
    where?: CandidateEducationWhereInput
    /**
     * Limit how many CandidateEducations to update.
     */
    limit?: number
  }

  /**
   * CandidateEducation updateManyAndReturn
   */
  export type CandidateEducationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * The data used to update CandidateEducations.
     */
    data: XOR<CandidateEducationUpdateManyMutationInput, CandidateEducationUncheckedUpdateManyInput>
    /**
     * Filter which CandidateEducations to update
     */
    where?: CandidateEducationWhereInput
    /**
     * Limit how many CandidateEducations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CandidateEducation upsert
   */
  export type CandidateEducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationInclude<ExtArgs> | null
    /**
     * The filter to search for the CandidateEducation to update in case it exists.
     */
    where: CandidateEducationWhereUniqueInput
    /**
     * In case the CandidateEducation found by the `where` argument doesn't exist, create a new CandidateEducation with this data.
     */
    create: XOR<CandidateEducationCreateInput, CandidateEducationUncheckedCreateInput>
    /**
     * In case the CandidateEducation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidateEducationUpdateInput, CandidateEducationUncheckedUpdateInput>
  }

  /**
   * CandidateEducation delete
   */
  export type CandidateEducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationInclude<ExtArgs> | null
    /**
     * Filter which CandidateEducation to delete.
     */
    where: CandidateEducationWhereUniqueInput
  }

  /**
   * CandidateEducation deleteMany
   */
  export type CandidateEducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateEducations to delete
     */
    where?: CandidateEducationWhereInput
    /**
     * Limit how many CandidateEducations to delete.
     */
    limit?: number
  }

  /**
   * CandidateEducation without action
   */
  export type CandidateEducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationInclude<ExtArgs> | null
  }


  /**
   * Model CandidateExperience
   */

  export type AggregateCandidateExperience = {
    _count: CandidateExperienceCountAggregateOutputType | null
    _avg: CandidateExperienceAvgAggregateOutputType | null
    _sum: CandidateExperienceSumAggregateOutputType | null
    _min: CandidateExperienceMinAggregateOutputType | null
    _max: CandidateExperienceMaxAggregateOutputType | null
  }

  export type CandidateExperienceAvgAggregateOutputType = {
    id: number | null
    candidateProfileId: number | null
  }

  export type CandidateExperienceSumAggregateOutputType = {
    id: number | null
    candidateProfileId: number | null
  }

  export type CandidateExperienceMinAggregateOutputType = {
    id: number | null
    candidateProfileId: number | null
    company: string | null
    department: string | null
    responsibilities: string | null
    startDate: Date | null
    endDate: Date | null
    currentlyWorking: boolean | null
  }

  export type CandidateExperienceMaxAggregateOutputType = {
    id: number | null
    candidateProfileId: number | null
    company: string | null
    department: string | null
    responsibilities: string | null
    startDate: Date | null
    endDate: Date | null
    currentlyWorking: boolean | null
  }

  export type CandidateExperienceCountAggregateOutputType = {
    id: number
    candidateProfileId: number
    company: number
    department: number
    responsibilities: number
    startDate: number
    endDate: number
    currentlyWorking: number
    _all: number
  }


  export type CandidateExperienceAvgAggregateInputType = {
    id?: true
    candidateProfileId?: true
  }

  export type CandidateExperienceSumAggregateInputType = {
    id?: true
    candidateProfileId?: true
  }

  export type CandidateExperienceMinAggregateInputType = {
    id?: true
    candidateProfileId?: true
    company?: true
    department?: true
    responsibilities?: true
    startDate?: true
    endDate?: true
    currentlyWorking?: true
  }

  export type CandidateExperienceMaxAggregateInputType = {
    id?: true
    candidateProfileId?: true
    company?: true
    department?: true
    responsibilities?: true
    startDate?: true
    endDate?: true
    currentlyWorking?: true
  }

  export type CandidateExperienceCountAggregateInputType = {
    id?: true
    candidateProfileId?: true
    company?: true
    department?: true
    responsibilities?: true
    startDate?: true
    endDate?: true
    currentlyWorking?: true
    _all?: true
  }

  export type CandidateExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateExperience to aggregate.
     */
    where?: CandidateExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateExperiences to fetch.
     */
    orderBy?: CandidateExperienceOrderByWithRelationInput | CandidateExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidateExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CandidateExperiences
    **/
    _count?: true | CandidateExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CandidateExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CandidateExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidateExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidateExperienceMaxAggregateInputType
  }

  export type GetCandidateExperienceAggregateType<T extends CandidateExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidateExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidateExperience[P]>
      : GetScalarType<T[P], AggregateCandidateExperience[P]>
  }




  export type CandidateExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateExperienceWhereInput
    orderBy?: CandidateExperienceOrderByWithAggregationInput | CandidateExperienceOrderByWithAggregationInput[]
    by: CandidateExperienceScalarFieldEnum[] | CandidateExperienceScalarFieldEnum
    having?: CandidateExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidateExperienceCountAggregateInputType | true
    _avg?: CandidateExperienceAvgAggregateInputType
    _sum?: CandidateExperienceSumAggregateInputType
    _min?: CandidateExperienceMinAggregateInputType
    _max?: CandidateExperienceMaxAggregateInputType
  }

  export type CandidateExperienceGroupByOutputType = {
    id: number
    candidateProfileId: number
    company: string
    department: string
    responsibilities: string
    startDate: Date
    endDate: Date | null
    currentlyWorking: boolean
    _count: CandidateExperienceCountAggregateOutputType | null
    _avg: CandidateExperienceAvgAggregateOutputType | null
    _sum: CandidateExperienceSumAggregateOutputType | null
    _min: CandidateExperienceMinAggregateOutputType | null
    _max: CandidateExperienceMaxAggregateOutputType | null
  }

  type GetCandidateExperienceGroupByPayload<T extends CandidateExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidateExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidateExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], CandidateExperienceGroupByOutputType[P]>
        }
      >
    >


  export type CandidateExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateProfileId?: boolean
    company?: boolean
    department?: boolean
    responsibilities?: boolean
    startDate?: boolean
    endDate?: boolean
    currentlyWorking?: boolean
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateExperience"]>

  export type CandidateExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateProfileId?: boolean
    company?: boolean
    department?: boolean
    responsibilities?: boolean
    startDate?: boolean
    endDate?: boolean
    currentlyWorking?: boolean
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateExperience"]>

  export type CandidateExperienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateProfileId?: boolean
    company?: boolean
    department?: boolean
    responsibilities?: boolean
    startDate?: boolean
    endDate?: boolean
    currentlyWorking?: boolean
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateExperience"]>

  export type CandidateExperienceSelectScalar = {
    id?: boolean
    candidateProfileId?: boolean
    company?: boolean
    department?: boolean
    responsibilities?: boolean
    startDate?: boolean
    endDate?: boolean
    currentlyWorking?: boolean
  }

  export type CandidateExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "candidateProfileId" | "company" | "department" | "responsibilities" | "startDate" | "endDate" | "currentlyWorking", ExtArgs["result"]["candidateExperience"]>
  export type CandidateExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
  }
  export type CandidateExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
  }
  export type CandidateExperienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
  }

  export type $CandidateExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CandidateExperience"
    objects: {
      candidateProfile: Prisma.$CandidateProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      candidateProfileId: number
      company: string
      department: string
      responsibilities: string
      startDate: Date
      endDate: Date | null
      currentlyWorking: boolean
    }, ExtArgs["result"]["candidateExperience"]>
    composites: {}
  }

  type CandidateExperienceGetPayload<S extends boolean | null | undefined | CandidateExperienceDefaultArgs> = $Result.GetResult<Prisma.$CandidateExperiencePayload, S>

  type CandidateExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidateExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidateExperienceCountAggregateInputType | true
    }

  export interface CandidateExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CandidateExperience'], meta: { name: 'CandidateExperience' } }
    /**
     * Find zero or one CandidateExperience that matches the filter.
     * @param {CandidateExperienceFindUniqueArgs} args - Arguments to find a CandidateExperience
     * @example
     * // Get one CandidateExperience
     * const candidateExperience = await prisma.candidateExperience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateExperienceFindUniqueArgs>(args: SelectSubset<T, CandidateExperienceFindUniqueArgs<ExtArgs>>): Prisma__CandidateExperienceClient<$Result.GetResult<Prisma.$CandidateExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CandidateExperience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateExperienceFindUniqueOrThrowArgs} args - Arguments to find a CandidateExperience
     * @example
     * // Get one CandidateExperience
     * const candidateExperience = await prisma.candidateExperience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidateExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidateExperienceClient<$Result.GetResult<Prisma.$CandidateExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateExperience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateExperienceFindFirstArgs} args - Arguments to find a CandidateExperience
     * @example
     * // Get one CandidateExperience
     * const candidateExperience = await prisma.candidateExperience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateExperienceFindFirstArgs>(args?: SelectSubset<T, CandidateExperienceFindFirstArgs<ExtArgs>>): Prisma__CandidateExperienceClient<$Result.GetResult<Prisma.$CandidateExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateExperience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateExperienceFindFirstOrThrowArgs} args - Arguments to find a CandidateExperience
     * @example
     * // Get one CandidateExperience
     * const candidateExperience = await prisma.candidateExperience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidateExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidateExperienceClient<$Result.GetResult<Prisma.$CandidateExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CandidateExperiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CandidateExperiences
     * const candidateExperiences = await prisma.candidateExperience.findMany()
     * 
     * // Get first 10 CandidateExperiences
     * const candidateExperiences = await prisma.candidateExperience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidateExperienceWithIdOnly = await prisma.candidateExperience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CandidateExperienceFindManyArgs>(args?: SelectSubset<T, CandidateExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CandidateExperience.
     * @param {CandidateExperienceCreateArgs} args - Arguments to create a CandidateExperience.
     * @example
     * // Create one CandidateExperience
     * const CandidateExperience = await prisma.candidateExperience.create({
     *   data: {
     *     // ... data to create a CandidateExperience
     *   }
     * })
     * 
     */
    create<T extends CandidateExperienceCreateArgs>(args: SelectSubset<T, CandidateExperienceCreateArgs<ExtArgs>>): Prisma__CandidateExperienceClient<$Result.GetResult<Prisma.$CandidateExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CandidateExperiences.
     * @param {CandidateExperienceCreateManyArgs} args - Arguments to create many CandidateExperiences.
     * @example
     * // Create many CandidateExperiences
     * const candidateExperience = await prisma.candidateExperience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidateExperienceCreateManyArgs>(args?: SelectSubset<T, CandidateExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CandidateExperiences and returns the data saved in the database.
     * @param {CandidateExperienceCreateManyAndReturnArgs} args - Arguments to create many CandidateExperiences.
     * @example
     * // Create many CandidateExperiences
     * const candidateExperience = await prisma.candidateExperience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CandidateExperiences and only return the `id`
     * const candidateExperienceWithIdOnly = await prisma.candidateExperience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidateExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidateExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateExperiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CandidateExperience.
     * @param {CandidateExperienceDeleteArgs} args - Arguments to delete one CandidateExperience.
     * @example
     * // Delete one CandidateExperience
     * const CandidateExperience = await prisma.candidateExperience.delete({
     *   where: {
     *     // ... filter to delete one CandidateExperience
     *   }
     * })
     * 
     */
    delete<T extends CandidateExperienceDeleteArgs>(args: SelectSubset<T, CandidateExperienceDeleteArgs<ExtArgs>>): Prisma__CandidateExperienceClient<$Result.GetResult<Prisma.$CandidateExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CandidateExperience.
     * @param {CandidateExperienceUpdateArgs} args - Arguments to update one CandidateExperience.
     * @example
     * // Update one CandidateExperience
     * const candidateExperience = await prisma.candidateExperience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidateExperienceUpdateArgs>(args: SelectSubset<T, CandidateExperienceUpdateArgs<ExtArgs>>): Prisma__CandidateExperienceClient<$Result.GetResult<Prisma.$CandidateExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CandidateExperiences.
     * @param {CandidateExperienceDeleteManyArgs} args - Arguments to filter CandidateExperiences to delete.
     * @example
     * // Delete a few CandidateExperiences
     * const { count } = await prisma.candidateExperience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidateExperienceDeleteManyArgs>(args?: SelectSubset<T, CandidateExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CandidateExperiences
     * const candidateExperience = await prisma.candidateExperience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidateExperienceUpdateManyArgs>(args: SelectSubset<T, CandidateExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateExperiences and returns the data updated in the database.
     * @param {CandidateExperienceUpdateManyAndReturnArgs} args - Arguments to update many CandidateExperiences.
     * @example
     * // Update many CandidateExperiences
     * const candidateExperience = await prisma.candidateExperience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CandidateExperiences and only return the `id`
     * const candidateExperienceWithIdOnly = await prisma.candidateExperience.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CandidateExperienceUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidateExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateExperiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CandidateExperience.
     * @param {CandidateExperienceUpsertArgs} args - Arguments to update or create a CandidateExperience.
     * @example
     * // Update or create a CandidateExperience
     * const candidateExperience = await prisma.candidateExperience.upsert({
     *   create: {
     *     // ... data to create a CandidateExperience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CandidateExperience we want to update
     *   }
     * })
     */
    upsert<T extends CandidateExperienceUpsertArgs>(args: SelectSubset<T, CandidateExperienceUpsertArgs<ExtArgs>>): Prisma__CandidateExperienceClient<$Result.GetResult<Prisma.$CandidateExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CandidateExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateExperienceCountArgs} args - Arguments to filter CandidateExperiences to count.
     * @example
     * // Count the number of CandidateExperiences
     * const count = await prisma.candidateExperience.count({
     *   where: {
     *     // ... the filter for the CandidateExperiences we want to count
     *   }
     * })
    **/
    count<T extends CandidateExperienceCountArgs>(
      args?: Subset<T, CandidateExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CandidateExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CandidateExperienceAggregateArgs>(args: Subset<T, CandidateExperienceAggregateArgs>): Prisma.PrismaPromise<GetCandidateExperienceAggregateType<T>>

    /**
     * Group by CandidateExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateExperienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CandidateExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidateExperienceGroupByArgs['orderBy'] }
        : { orderBy?: CandidateExperienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CandidateExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CandidateExperience model
   */
  readonly fields: CandidateExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CandidateExperience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidateExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidateProfile<T extends CandidateProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidateProfileDefaultArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CandidateExperience model
   */
  interface CandidateExperienceFieldRefs {
    readonly id: FieldRef<"CandidateExperience", 'Int'>
    readonly candidateProfileId: FieldRef<"CandidateExperience", 'Int'>
    readonly company: FieldRef<"CandidateExperience", 'String'>
    readonly department: FieldRef<"CandidateExperience", 'String'>
    readonly responsibilities: FieldRef<"CandidateExperience", 'String'>
    readonly startDate: FieldRef<"CandidateExperience", 'DateTime'>
    readonly endDate: FieldRef<"CandidateExperience", 'DateTime'>
    readonly currentlyWorking: FieldRef<"CandidateExperience", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * CandidateExperience findUnique
   */
  export type CandidateExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateExperience
     */
    select?: CandidateExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateExperience
     */
    omit?: CandidateExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateExperienceInclude<ExtArgs> | null
    /**
     * Filter, which CandidateExperience to fetch.
     */
    where: CandidateExperienceWhereUniqueInput
  }

  /**
   * CandidateExperience findUniqueOrThrow
   */
  export type CandidateExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateExperience
     */
    select?: CandidateExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateExperience
     */
    omit?: CandidateExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateExperienceInclude<ExtArgs> | null
    /**
     * Filter, which CandidateExperience to fetch.
     */
    where: CandidateExperienceWhereUniqueInput
  }

  /**
   * CandidateExperience findFirst
   */
  export type CandidateExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateExperience
     */
    select?: CandidateExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateExperience
     */
    omit?: CandidateExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateExperienceInclude<ExtArgs> | null
    /**
     * Filter, which CandidateExperience to fetch.
     */
    where?: CandidateExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateExperiences to fetch.
     */
    orderBy?: CandidateExperienceOrderByWithRelationInput | CandidateExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateExperiences.
     */
    cursor?: CandidateExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateExperiences.
     */
    distinct?: CandidateExperienceScalarFieldEnum | CandidateExperienceScalarFieldEnum[]
  }

  /**
   * CandidateExperience findFirstOrThrow
   */
  export type CandidateExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateExperience
     */
    select?: CandidateExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateExperience
     */
    omit?: CandidateExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateExperienceInclude<ExtArgs> | null
    /**
     * Filter, which CandidateExperience to fetch.
     */
    where?: CandidateExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateExperiences to fetch.
     */
    orderBy?: CandidateExperienceOrderByWithRelationInput | CandidateExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateExperiences.
     */
    cursor?: CandidateExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateExperiences.
     */
    distinct?: CandidateExperienceScalarFieldEnum | CandidateExperienceScalarFieldEnum[]
  }

  /**
   * CandidateExperience findMany
   */
  export type CandidateExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateExperience
     */
    select?: CandidateExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateExperience
     */
    omit?: CandidateExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateExperienceInclude<ExtArgs> | null
    /**
     * Filter, which CandidateExperiences to fetch.
     */
    where?: CandidateExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateExperiences to fetch.
     */
    orderBy?: CandidateExperienceOrderByWithRelationInput | CandidateExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CandidateExperiences.
     */
    cursor?: CandidateExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateExperiences.
     */
    skip?: number
    distinct?: CandidateExperienceScalarFieldEnum | CandidateExperienceScalarFieldEnum[]
  }

  /**
   * CandidateExperience create
   */
  export type CandidateExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateExperience
     */
    select?: CandidateExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateExperience
     */
    omit?: CandidateExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a CandidateExperience.
     */
    data: XOR<CandidateExperienceCreateInput, CandidateExperienceUncheckedCreateInput>
  }

  /**
   * CandidateExperience createMany
   */
  export type CandidateExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CandidateExperiences.
     */
    data: CandidateExperienceCreateManyInput | CandidateExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CandidateExperience createManyAndReturn
   */
  export type CandidateExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateExperience
     */
    select?: CandidateExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateExperience
     */
    omit?: CandidateExperienceOmit<ExtArgs> | null
    /**
     * The data used to create many CandidateExperiences.
     */
    data: CandidateExperienceCreateManyInput | CandidateExperienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateExperienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CandidateExperience update
   */
  export type CandidateExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateExperience
     */
    select?: CandidateExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateExperience
     */
    omit?: CandidateExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a CandidateExperience.
     */
    data: XOR<CandidateExperienceUpdateInput, CandidateExperienceUncheckedUpdateInput>
    /**
     * Choose, which CandidateExperience to update.
     */
    where: CandidateExperienceWhereUniqueInput
  }

  /**
   * CandidateExperience updateMany
   */
  export type CandidateExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CandidateExperiences.
     */
    data: XOR<CandidateExperienceUpdateManyMutationInput, CandidateExperienceUncheckedUpdateManyInput>
    /**
     * Filter which CandidateExperiences to update
     */
    where?: CandidateExperienceWhereInput
    /**
     * Limit how many CandidateExperiences to update.
     */
    limit?: number
  }

  /**
   * CandidateExperience updateManyAndReturn
   */
  export type CandidateExperienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateExperience
     */
    select?: CandidateExperienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateExperience
     */
    omit?: CandidateExperienceOmit<ExtArgs> | null
    /**
     * The data used to update CandidateExperiences.
     */
    data: XOR<CandidateExperienceUpdateManyMutationInput, CandidateExperienceUncheckedUpdateManyInput>
    /**
     * Filter which CandidateExperiences to update
     */
    where?: CandidateExperienceWhereInput
    /**
     * Limit how many CandidateExperiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateExperienceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CandidateExperience upsert
   */
  export type CandidateExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateExperience
     */
    select?: CandidateExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateExperience
     */
    omit?: CandidateExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the CandidateExperience to update in case it exists.
     */
    where: CandidateExperienceWhereUniqueInput
    /**
     * In case the CandidateExperience found by the `where` argument doesn't exist, create a new CandidateExperience with this data.
     */
    create: XOR<CandidateExperienceCreateInput, CandidateExperienceUncheckedCreateInput>
    /**
     * In case the CandidateExperience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidateExperienceUpdateInput, CandidateExperienceUncheckedUpdateInput>
  }

  /**
   * CandidateExperience delete
   */
  export type CandidateExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateExperience
     */
    select?: CandidateExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateExperience
     */
    omit?: CandidateExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateExperienceInclude<ExtArgs> | null
    /**
     * Filter which CandidateExperience to delete.
     */
    where: CandidateExperienceWhereUniqueInput
  }

  /**
   * CandidateExperience deleteMany
   */
  export type CandidateExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateExperiences to delete
     */
    where?: CandidateExperienceWhereInput
    /**
     * Limit how many CandidateExperiences to delete.
     */
    limit?: number
  }

  /**
   * CandidateExperience without action
   */
  export type CandidateExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateExperience
     */
    select?: CandidateExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateExperience
     */
    omit?: CandidateExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateExperienceInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    teamSize: number | null
    views: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
    userId: number | null
    teamSize: number | null
    views: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    description: string | null
    address: string | null
    teamSize: number | null
    estDate: Date | null
    views: number | null
    websiteUrl: string | null
    isApproved: boolean | null
    mapLink: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    description: string | null
    address: string | null
    teamSize: number | null
    estDate: Date | null
    views: number | null
    websiteUrl: string | null
    isApproved: boolean | null
    mapLink: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    address: number
    teamSize: number
    estDate: number
    views: number
    websiteUrl: number
    isApproved: number
    mapLink: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
    userId?: true
    teamSize?: true
    views?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
    userId?: true
    teamSize?: true
    views?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    address?: true
    teamSize?: true
    estDate?: true
    views?: true
    websiteUrl?: true
    isApproved?: true
    mapLink?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    address?: true
    teamSize?: true
    estDate?: true
    views?: true
    websiteUrl?: true
    isApproved?: true
    mapLink?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    address?: true
    teamSize?: true
    estDate?: true
    views?: true
    websiteUrl?: true
    isApproved?: true
    mapLink?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    userId: number
    name: string
    description: string
    address: string
    teamSize: number
    estDate: Date
    views: number
    websiteUrl: string | null
    isApproved: boolean
    mapLink: string | null
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    teamSize?: boolean
    estDate?: boolean
    views?: boolean
    websiteUrl?: boolean
    isApproved?: boolean
    mapLink?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    images?: boolean | Company$imagesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    teamSize?: boolean
    estDate?: boolean
    views?: boolean
    websiteUrl?: boolean
    isApproved?: boolean
    mapLink?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    teamSize?: boolean
    estDate?: boolean
    views?: boolean
    websiteUrl?: boolean
    isApproved?: boolean
    mapLink?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    teamSize?: boolean
    estDate?: boolean
    views?: boolean
    websiteUrl?: boolean
    isApproved?: boolean
    mapLink?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "address" | "teamSize" | "estDate" | "views" | "websiteUrl" | "isApproved" | "mapLink", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    images?: boolean | Company$imagesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      images: Prisma.$CompanyImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      name: string
      description: string
      address: string
      teamSize: number
      estDate: Date
      views: number
      websiteUrl: string | null
      isApproved: boolean
      mapLink: string | null
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends Company$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Company$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'Int'>
    readonly userId: FieldRef<"Company", 'Int'>
    readonly name: FieldRef<"Company", 'String'>
    readonly description: FieldRef<"Company", 'String'>
    readonly address: FieldRef<"Company", 'String'>
    readonly teamSize: FieldRef<"Company", 'Int'>
    readonly estDate: FieldRef<"Company", 'DateTime'>
    readonly views: FieldRef<"Company", 'Int'>
    readonly websiteUrl: FieldRef<"Company", 'String'>
    readonly isApproved: FieldRef<"Company", 'Boolean'>
    readonly mapLink: FieldRef<"Company", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.images
   */
  export type Company$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyImage
     */
    select?: CompanyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyImage
     */
    omit?: CompanyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyImageInclude<ExtArgs> | null
    where?: CompanyImageWhereInput
    orderBy?: CompanyImageOrderByWithRelationInput | CompanyImageOrderByWithRelationInput[]
    cursor?: CompanyImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyImageScalarFieldEnum | CompanyImageScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model CompanyImage
   */

  export type AggregateCompanyImage = {
    _count: CompanyImageCountAggregateOutputType | null
    _avg: CompanyImageAvgAggregateOutputType | null
    _sum: CompanyImageSumAggregateOutputType | null
    _min: CompanyImageMinAggregateOutputType | null
    _max: CompanyImageMaxAggregateOutputType | null
  }

  export type CompanyImageAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type CompanyImageSumAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type CompanyImageMinAggregateOutputType = {
    id: number | null
    companyId: number | null
    imageUrl: string | null
  }

  export type CompanyImageMaxAggregateOutputType = {
    id: number | null
    companyId: number | null
    imageUrl: string | null
  }

  export type CompanyImageCountAggregateOutputType = {
    id: number
    companyId: number
    imageUrl: number
    _all: number
  }


  export type CompanyImageAvgAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type CompanyImageSumAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type CompanyImageMinAggregateInputType = {
    id?: true
    companyId?: true
    imageUrl?: true
  }

  export type CompanyImageMaxAggregateInputType = {
    id?: true
    companyId?: true
    imageUrl?: true
  }

  export type CompanyImageCountAggregateInputType = {
    id?: true
    companyId?: true
    imageUrl?: true
    _all?: true
  }

  export type CompanyImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyImage to aggregate.
     */
    where?: CompanyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyImages to fetch.
     */
    orderBy?: CompanyImageOrderByWithRelationInput | CompanyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyImages
    **/
    _count?: true | CompanyImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanyImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyImageMaxAggregateInputType
  }

  export type GetCompanyImageAggregateType<T extends CompanyImageAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyImage[P]>
      : GetScalarType<T[P], AggregateCompanyImage[P]>
  }




  export type CompanyImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyImageWhereInput
    orderBy?: CompanyImageOrderByWithAggregationInput | CompanyImageOrderByWithAggregationInput[]
    by: CompanyImageScalarFieldEnum[] | CompanyImageScalarFieldEnum
    having?: CompanyImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyImageCountAggregateInputType | true
    _avg?: CompanyImageAvgAggregateInputType
    _sum?: CompanyImageSumAggregateInputType
    _min?: CompanyImageMinAggregateInputType
    _max?: CompanyImageMaxAggregateInputType
  }

  export type CompanyImageGroupByOutputType = {
    id: number
    companyId: number
    imageUrl: string
    _count: CompanyImageCountAggregateOutputType | null
    _avg: CompanyImageAvgAggregateOutputType | null
    _sum: CompanyImageSumAggregateOutputType | null
    _min: CompanyImageMinAggregateOutputType | null
    _max: CompanyImageMaxAggregateOutputType | null
  }

  type GetCompanyImageGroupByPayload<T extends CompanyImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyImageGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyImageGroupByOutputType[P]>
        }
      >
    >


  export type CompanyImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    imageUrl?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyImage"]>

  export type CompanyImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    imageUrl?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyImage"]>

  export type CompanyImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    imageUrl?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyImage"]>

  export type CompanyImageSelectScalar = {
    id?: boolean
    companyId?: boolean
    imageUrl?: boolean
  }

  export type CompanyImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "imageUrl", ExtArgs["result"]["companyImage"]>
  export type CompanyImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CompanyImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CompanyImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $CompanyImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyImage"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyId: number
      imageUrl: string
    }, ExtArgs["result"]["companyImage"]>
    composites: {}
  }

  type CompanyImageGetPayload<S extends boolean | null | undefined | CompanyImageDefaultArgs> = $Result.GetResult<Prisma.$CompanyImagePayload, S>

  type CompanyImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyImageCountAggregateInputType | true
    }

  export interface CompanyImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyImage'], meta: { name: 'CompanyImage' } }
    /**
     * Find zero or one CompanyImage that matches the filter.
     * @param {CompanyImageFindUniqueArgs} args - Arguments to find a CompanyImage
     * @example
     * // Get one CompanyImage
     * const companyImage = await prisma.companyImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyImageFindUniqueArgs>(args: SelectSubset<T, CompanyImageFindUniqueArgs<ExtArgs>>): Prisma__CompanyImageClient<$Result.GetResult<Prisma.$CompanyImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanyImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyImageFindUniqueOrThrowArgs} args - Arguments to find a CompanyImage
     * @example
     * // Get one CompanyImage
     * const companyImage = await prisma.companyImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyImageFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyImageClient<$Result.GetResult<Prisma.$CompanyImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyImageFindFirstArgs} args - Arguments to find a CompanyImage
     * @example
     * // Get one CompanyImage
     * const companyImage = await prisma.companyImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyImageFindFirstArgs>(args?: SelectSubset<T, CompanyImageFindFirstArgs<ExtArgs>>): Prisma__CompanyImageClient<$Result.GetResult<Prisma.$CompanyImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyImageFindFirstOrThrowArgs} args - Arguments to find a CompanyImage
     * @example
     * // Get one CompanyImage
     * const companyImage = await prisma.companyImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyImageFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyImageClient<$Result.GetResult<Prisma.$CompanyImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanyImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyImages
     * const companyImages = await prisma.companyImage.findMany()
     * 
     * // Get first 10 CompanyImages
     * const companyImages = await prisma.companyImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyImageWithIdOnly = await prisma.companyImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyImageFindManyArgs>(args?: SelectSubset<T, CompanyImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanyImage.
     * @param {CompanyImageCreateArgs} args - Arguments to create a CompanyImage.
     * @example
     * // Create one CompanyImage
     * const CompanyImage = await prisma.companyImage.create({
     *   data: {
     *     // ... data to create a CompanyImage
     *   }
     * })
     * 
     */
    create<T extends CompanyImageCreateArgs>(args: SelectSubset<T, CompanyImageCreateArgs<ExtArgs>>): Prisma__CompanyImageClient<$Result.GetResult<Prisma.$CompanyImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanyImages.
     * @param {CompanyImageCreateManyArgs} args - Arguments to create many CompanyImages.
     * @example
     * // Create many CompanyImages
     * const companyImage = await prisma.companyImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyImageCreateManyArgs>(args?: SelectSubset<T, CompanyImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanyImages and returns the data saved in the database.
     * @param {CompanyImageCreateManyAndReturnArgs} args - Arguments to create many CompanyImages.
     * @example
     * // Create many CompanyImages
     * const companyImage = await prisma.companyImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanyImages and only return the `id`
     * const companyImageWithIdOnly = await prisma.companyImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyImageCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompanyImage.
     * @param {CompanyImageDeleteArgs} args - Arguments to delete one CompanyImage.
     * @example
     * // Delete one CompanyImage
     * const CompanyImage = await prisma.companyImage.delete({
     *   where: {
     *     // ... filter to delete one CompanyImage
     *   }
     * })
     * 
     */
    delete<T extends CompanyImageDeleteArgs>(args: SelectSubset<T, CompanyImageDeleteArgs<ExtArgs>>): Prisma__CompanyImageClient<$Result.GetResult<Prisma.$CompanyImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanyImage.
     * @param {CompanyImageUpdateArgs} args - Arguments to update one CompanyImage.
     * @example
     * // Update one CompanyImage
     * const companyImage = await prisma.companyImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyImageUpdateArgs>(args: SelectSubset<T, CompanyImageUpdateArgs<ExtArgs>>): Prisma__CompanyImageClient<$Result.GetResult<Prisma.$CompanyImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanyImages.
     * @param {CompanyImageDeleteManyArgs} args - Arguments to filter CompanyImages to delete.
     * @example
     * // Delete a few CompanyImages
     * const { count } = await prisma.companyImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyImageDeleteManyArgs>(args?: SelectSubset<T, CompanyImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyImages
     * const companyImage = await prisma.companyImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyImageUpdateManyArgs>(args: SelectSubset<T, CompanyImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyImages and returns the data updated in the database.
     * @param {CompanyImageUpdateManyAndReturnArgs} args - Arguments to update many CompanyImages.
     * @example
     * // Update many CompanyImages
     * const companyImage = await prisma.companyImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanyImages and only return the `id`
     * const companyImageWithIdOnly = await prisma.companyImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyImageUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompanyImage.
     * @param {CompanyImageUpsertArgs} args - Arguments to update or create a CompanyImage.
     * @example
     * // Update or create a CompanyImage
     * const companyImage = await prisma.companyImage.upsert({
     *   create: {
     *     // ... data to create a CompanyImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyImage we want to update
     *   }
     * })
     */
    upsert<T extends CompanyImageUpsertArgs>(args: SelectSubset<T, CompanyImageUpsertArgs<ExtArgs>>): Prisma__CompanyImageClient<$Result.GetResult<Prisma.$CompanyImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyImageCountArgs} args - Arguments to filter CompanyImages to count.
     * @example
     * // Count the number of CompanyImages
     * const count = await prisma.companyImage.count({
     *   where: {
     *     // ... the filter for the CompanyImages we want to count
     *   }
     * })
    **/
    count<T extends CompanyImageCountArgs>(
      args?: Subset<T, CompanyImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyImageAggregateArgs>(args: Subset<T, CompanyImageAggregateArgs>): Prisma.PrismaPromise<GetCompanyImageAggregateType<T>>

    /**
     * Group by CompanyImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyImageGroupByArgs['orderBy'] }
        : { orderBy?: CompanyImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanyImage model
   */
  readonly fields: CompanyImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompanyImage model
   */
  interface CompanyImageFieldRefs {
    readonly id: FieldRef<"CompanyImage", 'Int'>
    readonly companyId: FieldRef<"CompanyImage", 'Int'>
    readonly imageUrl: FieldRef<"CompanyImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CompanyImage findUnique
   */
  export type CompanyImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyImage
     */
    select?: CompanyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyImage
     */
    omit?: CompanyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyImageInclude<ExtArgs> | null
    /**
     * Filter, which CompanyImage to fetch.
     */
    where: CompanyImageWhereUniqueInput
  }

  /**
   * CompanyImage findUniqueOrThrow
   */
  export type CompanyImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyImage
     */
    select?: CompanyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyImage
     */
    omit?: CompanyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyImageInclude<ExtArgs> | null
    /**
     * Filter, which CompanyImage to fetch.
     */
    where: CompanyImageWhereUniqueInput
  }

  /**
   * CompanyImage findFirst
   */
  export type CompanyImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyImage
     */
    select?: CompanyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyImage
     */
    omit?: CompanyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyImageInclude<ExtArgs> | null
    /**
     * Filter, which CompanyImage to fetch.
     */
    where?: CompanyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyImages to fetch.
     */
    orderBy?: CompanyImageOrderByWithRelationInput | CompanyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyImages.
     */
    cursor?: CompanyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyImages.
     */
    distinct?: CompanyImageScalarFieldEnum | CompanyImageScalarFieldEnum[]
  }

  /**
   * CompanyImage findFirstOrThrow
   */
  export type CompanyImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyImage
     */
    select?: CompanyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyImage
     */
    omit?: CompanyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyImageInclude<ExtArgs> | null
    /**
     * Filter, which CompanyImage to fetch.
     */
    where?: CompanyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyImages to fetch.
     */
    orderBy?: CompanyImageOrderByWithRelationInput | CompanyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyImages.
     */
    cursor?: CompanyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyImages.
     */
    distinct?: CompanyImageScalarFieldEnum | CompanyImageScalarFieldEnum[]
  }

  /**
   * CompanyImage findMany
   */
  export type CompanyImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyImage
     */
    select?: CompanyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyImage
     */
    omit?: CompanyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyImageInclude<ExtArgs> | null
    /**
     * Filter, which CompanyImages to fetch.
     */
    where?: CompanyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyImages to fetch.
     */
    orderBy?: CompanyImageOrderByWithRelationInput | CompanyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyImages.
     */
    cursor?: CompanyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyImages.
     */
    skip?: number
    distinct?: CompanyImageScalarFieldEnum | CompanyImageScalarFieldEnum[]
  }

  /**
   * CompanyImage create
   */
  export type CompanyImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyImage
     */
    select?: CompanyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyImage
     */
    omit?: CompanyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyImageInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanyImage.
     */
    data: XOR<CompanyImageCreateInput, CompanyImageUncheckedCreateInput>
  }

  /**
   * CompanyImage createMany
   */
  export type CompanyImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyImages.
     */
    data: CompanyImageCreateManyInput | CompanyImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanyImage createManyAndReturn
   */
  export type CompanyImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyImage
     */
    select?: CompanyImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyImage
     */
    omit?: CompanyImageOmit<ExtArgs> | null
    /**
     * The data used to create many CompanyImages.
     */
    data: CompanyImageCreateManyInput | CompanyImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyImage update
   */
  export type CompanyImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyImage
     */
    select?: CompanyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyImage
     */
    omit?: CompanyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyImageInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanyImage.
     */
    data: XOR<CompanyImageUpdateInput, CompanyImageUncheckedUpdateInput>
    /**
     * Choose, which CompanyImage to update.
     */
    where: CompanyImageWhereUniqueInput
  }

  /**
   * CompanyImage updateMany
   */
  export type CompanyImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyImages.
     */
    data: XOR<CompanyImageUpdateManyMutationInput, CompanyImageUncheckedUpdateManyInput>
    /**
     * Filter which CompanyImages to update
     */
    where?: CompanyImageWhereInput
    /**
     * Limit how many CompanyImages to update.
     */
    limit?: number
  }

  /**
   * CompanyImage updateManyAndReturn
   */
  export type CompanyImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyImage
     */
    select?: CompanyImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyImage
     */
    omit?: CompanyImageOmit<ExtArgs> | null
    /**
     * The data used to update CompanyImages.
     */
    data: XOR<CompanyImageUpdateManyMutationInput, CompanyImageUncheckedUpdateManyInput>
    /**
     * Filter which CompanyImages to update
     */
    where?: CompanyImageWhereInput
    /**
     * Limit how many CompanyImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyImage upsert
   */
  export type CompanyImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyImage
     */
    select?: CompanyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyImage
     */
    omit?: CompanyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyImageInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanyImage to update in case it exists.
     */
    where: CompanyImageWhereUniqueInput
    /**
     * In case the CompanyImage found by the `where` argument doesn't exist, create a new CompanyImage with this data.
     */
    create: XOR<CompanyImageCreateInput, CompanyImageUncheckedCreateInput>
    /**
     * In case the CompanyImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyImageUpdateInput, CompanyImageUncheckedUpdateInput>
  }

  /**
   * CompanyImage delete
   */
  export type CompanyImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyImage
     */
    select?: CompanyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyImage
     */
    omit?: CompanyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyImageInclude<ExtArgs> | null
    /**
     * Filter which CompanyImage to delete.
     */
    where: CompanyImageWhereUniqueInput
  }

  /**
   * CompanyImage deleteMany
   */
  export type CompanyImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyImages to delete
     */
    where?: CompanyImageWhereInput
    /**
     * Limit how many CompanyImages to delete.
     */
    limit?: number
  }

  /**
   * CompanyImage without action
   */
  export type CompanyImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyImage
     */
    select?: CompanyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyImage
     */
    omit?: CompanyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyImageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    status: 'status'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CandidateProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fullName: 'fullName',
    gender: 'gender',
    phone: 'phone',
    cv: 'cv',
    birthday: 'birthday',
    address: 'address',
    openToWork: 'openToWork',
    status: 'status'
  };

  export type CandidateProfileScalarFieldEnum = (typeof CandidateProfileScalarFieldEnum)[keyof typeof CandidateProfileScalarFieldEnum]


  export const LanguageScalarFieldEnum: {
    name: 'name'
  };

  export type LanguageScalarFieldEnum = (typeof LanguageScalarFieldEnum)[keyof typeof LanguageScalarFieldEnum]


  export const CandidateLanguageScalarFieldEnum: {
    candidateProfileId: 'candidateProfileId',
    languageName: 'languageName',
    level: 'level'
  };

  export type CandidateLanguageScalarFieldEnum = (typeof CandidateLanguageScalarFieldEnum)[keyof typeof CandidateLanguageScalarFieldEnum]


  export const EducationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    map: 'map',
    slug: 'slug'
  };

  export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum]


  export const CandidateEducationScalarFieldEnum: {
    candidateProfileId: 'candidateProfileId',
    educationId: 'educationId',
    major: 'major',
    degree: 'degree',
    yearStart: 'yearStart',
    yearEnd: 'yearEnd'
  };

  export type CandidateEducationScalarFieldEnum = (typeof CandidateEducationScalarFieldEnum)[keyof typeof CandidateEducationScalarFieldEnum]


  export const CandidateExperienceScalarFieldEnum: {
    id: 'id',
    candidateProfileId: 'candidateProfileId',
    company: 'company',
    department: 'department',
    responsibilities: 'responsibilities',
    startDate: 'startDate',
    endDate: 'endDate',
    currentlyWorking: 'currentlyWorking'
  };

  export type CandidateExperienceScalarFieldEnum = (typeof CandidateExperienceScalarFieldEnum)[keyof typeof CandidateExperienceScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    address: 'address',
    teamSize: 'teamSize',
    estDate: 'estDate',
    views: 'views',
    websiteUrl: 'websiteUrl',
    isApproved: 'isApproved',
    mapLink: 'mapLink'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const CompanyImageScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    imageUrl: 'imageUrl'
  };

  export type CompanyImageScalarFieldEnum = (typeof CompanyImageScalarFieldEnum)[keyof typeof CompanyImageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Level'
   */
  export type EnumLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Level'>
    


  /**
   * Reference to a field of type 'Level[]'
   */
  export type ListEnumLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Level[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: BoolFilter<"User"> | boolean
    candidateProfile?: XOR<CandidateProfileNullableScalarRelationFilter, CandidateProfileWhereInput> | null
    companies?: CompanyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    candidateProfile?: CandidateProfileOrderByWithRelationInput
    companies?: CompanyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: BoolFilter<"User"> | boolean
    candidateProfile?: XOR<CandidateProfileNullableScalarRelationFilter, CandidateProfileWhereInput> | null
    companies?: CompanyListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    status?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type CandidateProfileWhereInput = {
    AND?: CandidateProfileWhereInput | CandidateProfileWhereInput[]
    OR?: CandidateProfileWhereInput[]
    NOT?: CandidateProfileWhereInput | CandidateProfileWhereInput[]
    id?: IntFilter<"CandidateProfile"> | number
    userId?: IntFilter<"CandidateProfile"> | number
    fullName?: StringFilter<"CandidateProfile"> | string
    gender?: EnumGenderFilter<"CandidateProfile"> | $Enums.Gender
    phone?: StringFilter<"CandidateProfile"> | string
    cv?: StringFilter<"CandidateProfile"> | string
    birthday?: DateTimeFilter<"CandidateProfile"> | Date | string
    address?: StringFilter<"CandidateProfile"> | string
    openToWork?: BoolFilter<"CandidateProfile"> | boolean
    status?: BoolFilter<"CandidateProfile"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    candidateLanguages?: CandidateLanguageListRelationFilter
    candidateEducations?: CandidateEducationListRelationFilter
    candidateExperiences?: CandidateExperienceListRelationFilter
  }

  export type CandidateProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    cv?: SortOrder
    birthday?: SortOrder
    address?: SortOrder
    openToWork?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    candidateLanguages?: CandidateLanguageOrderByRelationAggregateInput
    candidateEducations?: CandidateEducationOrderByRelationAggregateInput
    candidateExperiences?: CandidateExperienceOrderByRelationAggregateInput
  }

  export type CandidateProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: CandidateProfileWhereInput | CandidateProfileWhereInput[]
    OR?: CandidateProfileWhereInput[]
    NOT?: CandidateProfileWhereInput | CandidateProfileWhereInput[]
    fullName?: StringFilter<"CandidateProfile"> | string
    gender?: EnumGenderFilter<"CandidateProfile"> | $Enums.Gender
    phone?: StringFilter<"CandidateProfile"> | string
    cv?: StringFilter<"CandidateProfile"> | string
    birthday?: DateTimeFilter<"CandidateProfile"> | Date | string
    address?: StringFilter<"CandidateProfile"> | string
    openToWork?: BoolFilter<"CandidateProfile"> | boolean
    status?: BoolFilter<"CandidateProfile"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    candidateLanguages?: CandidateLanguageListRelationFilter
    candidateEducations?: CandidateEducationListRelationFilter
    candidateExperiences?: CandidateExperienceListRelationFilter
  }, "id" | "userId">

  export type CandidateProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    cv?: SortOrder
    birthday?: SortOrder
    address?: SortOrder
    openToWork?: SortOrder
    status?: SortOrder
    _count?: CandidateProfileCountOrderByAggregateInput
    _avg?: CandidateProfileAvgOrderByAggregateInput
    _max?: CandidateProfileMaxOrderByAggregateInput
    _min?: CandidateProfileMinOrderByAggregateInput
    _sum?: CandidateProfileSumOrderByAggregateInput
  }

  export type CandidateProfileScalarWhereWithAggregatesInput = {
    AND?: CandidateProfileScalarWhereWithAggregatesInput | CandidateProfileScalarWhereWithAggregatesInput[]
    OR?: CandidateProfileScalarWhereWithAggregatesInput[]
    NOT?: CandidateProfileScalarWhereWithAggregatesInput | CandidateProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CandidateProfile"> | number
    userId?: IntWithAggregatesFilter<"CandidateProfile"> | number
    fullName?: StringWithAggregatesFilter<"CandidateProfile"> | string
    gender?: EnumGenderWithAggregatesFilter<"CandidateProfile"> | $Enums.Gender
    phone?: StringWithAggregatesFilter<"CandidateProfile"> | string
    cv?: StringWithAggregatesFilter<"CandidateProfile"> | string
    birthday?: DateTimeWithAggregatesFilter<"CandidateProfile"> | Date | string
    address?: StringWithAggregatesFilter<"CandidateProfile"> | string
    openToWork?: BoolWithAggregatesFilter<"CandidateProfile"> | boolean
    status?: BoolWithAggregatesFilter<"CandidateProfile"> | boolean
  }

  export type LanguageWhereInput = {
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    name?: StringFilter<"Language"> | string
    candidateLanguages?: CandidateLanguageListRelationFilter
  }

  export type LanguageOrderByWithRelationInput = {
    name?: SortOrder
    candidateLanguages?: CandidateLanguageOrderByRelationAggregateInput
  }

  export type LanguageWhereUniqueInput = Prisma.AtLeast<{
    name?: string
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    candidateLanguages?: CandidateLanguageListRelationFilter
  }, "name">

  export type LanguageOrderByWithAggregationInput = {
    name?: SortOrder
    _count?: LanguageCountOrderByAggregateInput
    _max?: LanguageMaxOrderByAggregateInput
    _min?: LanguageMinOrderByAggregateInput
  }

  export type LanguageScalarWhereWithAggregatesInput = {
    AND?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    OR?: LanguageScalarWhereWithAggregatesInput[]
    NOT?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"Language"> | string
  }

  export type CandidateLanguageWhereInput = {
    AND?: CandidateLanguageWhereInput | CandidateLanguageWhereInput[]
    OR?: CandidateLanguageWhereInput[]
    NOT?: CandidateLanguageWhereInput | CandidateLanguageWhereInput[]
    candidateProfileId?: IntFilter<"CandidateLanguage"> | number
    languageName?: StringFilter<"CandidateLanguage"> | string
    level?: EnumLevelFilter<"CandidateLanguage"> | $Enums.Level
    candidateProfile?: XOR<CandidateProfileScalarRelationFilter, CandidateProfileWhereInput>
    language?: XOR<LanguageScalarRelationFilter, LanguageWhereInput>
  }

  export type CandidateLanguageOrderByWithRelationInput = {
    candidateProfileId?: SortOrder
    languageName?: SortOrder
    level?: SortOrder
    candidateProfile?: CandidateProfileOrderByWithRelationInput
    language?: LanguageOrderByWithRelationInput
  }

  export type CandidateLanguageWhereUniqueInput = Prisma.AtLeast<{
    candidateProfileId_languageName?: CandidateLanguageCandidateProfileIdLanguageNameCompoundUniqueInput
    AND?: CandidateLanguageWhereInput | CandidateLanguageWhereInput[]
    OR?: CandidateLanguageWhereInput[]
    NOT?: CandidateLanguageWhereInput | CandidateLanguageWhereInput[]
    candidateProfileId?: IntFilter<"CandidateLanguage"> | number
    languageName?: StringFilter<"CandidateLanguage"> | string
    level?: EnumLevelFilter<"CandidateLanguage"> | $Enums.Level
    candidateProfile?: XOR<CandidateProfileScalarRelationFilter, CandidateProfileWhereInput>
    language?: XOR<LanguageScalarRelationFilter, LanguageWhereInput>
  }, "candidateProfileId_languageName">

  export type CandidateLanguageOrderByWithAggregationInput = {
    candidateProfileId?: SortOrder
    languageName?: SortOrder
    level?: SortOrder
    _count?: CandidateLanguageCountOrderByAggregateInput
    _avg?: CandidateLanguageAvgOrderByAggregateInput
    _max?: CandidateLanguageMaxOrderByAggregateInput
    _min?: CandidateLanguageMinOrderByAggregateInput
    _sum?: CandidateLanguageSumOrderByAggregateInput
  }

  export type CandidateLanguageScalarWhereWithAggregatesInput = {
    AND?: CandidateLanguageScalarWhereWithAggregatesInput | CandidateLanguageScalarWhereWithAggregatesInput[]
    OR?: CandidateLanguageScalarWhereWithAggregatesInput[]
    NOT?: CandidateLanguageScalarWhereWithAggregatesInput | CandidateLanguageScalarWhereWithAggregatesInput[]
    candidateProfileId?: IntWithAggregatesFilter<"CandidateLanguage"> | number
    languageName?: StringWithAggregatesFilter<"CandidateLanguage"> | string
    level?: EnumLevelWithAggregatesFilter<"CandidateLanguage"> | $Enums.Level
  }

  export type EducationWhereInput = {
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    id?: IntFilter<"Education"> | number
    name?: StringFilter<"Education"> | string
    map?: StringFilter<"Education"> | string
    slug?: StringFilter<"Education"> | string
    candidateEducations?: CandidateEducationListRelationFilter
  }

  export type EducationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    map?: SortOrder
    slug?: SortOrder
    candidateEducations?: CandidateEducationOrderByRelationAggregateInput
  }

  export type EducationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    name?: StringFilter<"Education"> | string
    map?: StringFilter<"Education"> | string
    candidateEducations?: CandidateEducationListRelationFilter
  }, "id" | "slug">

  export type EducationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    map?: SortOrder
    slug?: SortOrder
    _count?: EducationCountOrderByAggregateInput
    _avg?: EducationAvgOrderByAggregateInput
    _max?: EducationMaxOrderByAggregateInput
    _min?: EducationMinOrderByAggregateInput
    _sum?: EducationSumOrderByAggregateInput
  }

  export type EducationScalarWhereWithAggregatesInput = {
    AND?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    OR?: EducationScalarWhereWithAggregatesInput[]
    NOT?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Education"> | number
    name?: StringWithAggregatesFilter<"Education"> | string
    map?: StringWithAggregatesFilter<"Education"> | string
    slug?: StringWithAggregatesFilter<"Education"> | string
  }

  export type CandidateEducationWhereInput = {
    AND?: CandidateEducationWhereInput | CandidateEducationWhereInput[]
    OR?: CandidateEducationWhereInput[]
    NOT?: CandidateEducationWhereInput | CandidateEducationWhereInput[]
    candidateProfileId?: IntFilter<"CandidateEducation"> | number
    educationId?: IntFilter<"CandidateEducation"> | number
    major?: StringFilter<"CandidateEducation"> | string
    degree?: StringFilter<"CandidateEducation"> | string
    yearStart?: IntFilter<"CandidateEducation"> | number
    yearEnd?: IntFilter<"CandidateEducation"> | number
    candidateProfile?: XOR<CandidateProfileScalarRelationFilter, CandidateProfileWhereInput>
    education?: XOR<EducationScalarRelationFilter, EducationWhereInput>
  }

  export type CandidateEducationOrderByWithRelationInput = {
    candidateProfileId?: SortOrder
    educationId?: SortOrder
    major?: SortOrder
    degree?: SortOrder
    yearStart?: SortOrder
    yearEnd?: SortOrder
    candidateProfile?: CandidateProfileOrderByWithRelationInput
    education?: EducationOrderByWithRelationInput
  }

  export type CandidateEducationWhereUniqueInput = Prisma.AtLeast<{
    candidateProfileId_educationId?: CandidateEducationCandidateProfileIdEducationIdCompoundUniqueInput
    AND?: CandidateEducationWhereInput | CandidateEducationWhereInput[]
    OR?: CandidateEducationWhereInput[]
    NOT?: CandidateEducationWhereInput | CandidateEducationWhereInput[]
    candidateProfileId?: IntFilter<"CandidateEducation"> | number
    educationId?: IntFilter<"CandidateEducation"> | number
    major?: StringFilter<"CandidateEducation"> | string
    degree?: StringFilter<"CandidateEducation"> | string
    yearStart?: IntFilter<"CandidateEducation"> | number
    yearEnd?: IntFilter<"CandidateEducation"> | number
    candidateProfile?: XOR<CandidateProfileScalarRelationFilter, CandidateProfileWhereInput>
    education?: XOR<EducationScalarRelationFilter, EducationWhereInput>
  }, "candidateProfileId_educationId">

  export type CandidateEducationOrderByWithAggregationInput = {
    candidateProfileId?: SortOrder
    educationId?: SortOrder
    major?: SortOrder
    degree?: SortOrder
    yearStart?: SortOrder
    yearEnd?: SortOrder
    _count?: CandidateEducationCountOrderByAggregateInput
    _avg?: CandidateEducationAvgOrderByAggregateInput
    _max?: CandidateEducationMaxOrderByAggregateInput
    _min?: CandidateEducationMinOrderByAggregateInput
    _sum?: CandidateEducationSumOrderByAggregateInput
  }

  export type CandidateEducationScalarWhereWithAggregatesInput = {
    AND?: CandidateEducationScalarWhereWithAggregatesInput | CandidateEducationScalarWhereWithAggregatesInput[]
    OR?: CandidateEducationScalarWhereWithAggregatesInput[]
    NOT?: CandidateEducationScalarWhereWithAggregatesInput | CandidateEducationScalarWhereWithAggregatesInput[]
    candidateProfileId?: IntWithAggregatesFilter<"CandidateEducation"> | number
    educationId?: IntWithAggregatesFilter<"CandidateEducation"> | number
    major?: StringWithAggregatesFilter<"CandidateEducation"> | string
    degree?: StringWithAggregatesFilter<"CandidateEducation"> | string
    yearStart?: IntWithAggregatesFilter<"CandidateEducation"> | number
    yearEnd?: IntWithAggregatesFilter<"CandidateEducation"> | number
  }

  export type CandidateExperienceWhereInput = {
    AND?: CandidateExperienceWhereInput | CandidateExperienceWhereInput[]
    OR?: CandidateExperienceWhereInput[]
    NOT?: CandidateExperienceWhereInput | CandidateExperienceWhereInput[]
    id?: IntFilter<"CandidateExperience"> | number
    candidateProfileId?: IntFilter<"CandidateExperience"> | number
    company?: StringFilter<"CandidateExperience"> | string
    department?: StringFilter<"CandidateExperience"> | string
    responsibilities?: StringFilter<"CandidateExperience"> | string
    startDate?: DateTimeFilter<"CandidateExperience"> | Date | string
    endDate?: DateTimeNullableFilter<"CandidateExperience"> | Date | string | null
    currentlyWorking?: BoolFilter<"CandidateExperience"> | boolean
    candidateProfile?: XOR<CandidateProfileScalarRelationFilter, CandidateProfileWhereInput>
  }

  export type CandidateExperienceOrderByWithRelationInput = {
    id?: SortOrder
    candidateProfileId?: SortOrder
    company?: SortOrder
    department?: SortOrder
    responsibilities?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    currentlyWorking?: SortOrder
    candidateProfile?: CandidateProfileOrderByWithRelationInput
  }

  export type CandidateExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CandidateExperienceWhereInput | CandidateExperienceWhereInput[]
    OR?: CandidateExperienceWhereInput[]
    NOT?: CandidateExperienceWhereInput | CandidateExperienceWhereInput[]
    candidateProfileId?: IntFilter<"CandidateExperience"> | number
    company?: StringFilter<"CandidateExperience"> | string
    department?: StringFilter<"CandidateExperience"> | string
    responsibilities?: StringFilter<"CandidateExperience"> | string
    startDate?: DateTimeFilter<"CandidateExperience"> | Date | string
    endDate?: DateTimeNullableFilter<"CandidateExperience"> | Date | string | null
    currentlyWorking?: BoolFilter<"CandidateExperience"> | boolean
    candidateProfile?: XOR<CandidateProfileScalarRelationFilter, CandidateProfileWhereInput>
  }, "id">

  export type CandidateExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    candidateProfileId?: SortOrder
    company?: SortOrder
    department?: SortOrder
    responsibilities?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    currentlyWorking?: SortOrder
    _count?: CandidateExperienceCountOrderByAggregateInput
    _avg?: CandidateExperienceAvgOrderByAggregateInput
    _max?: CandidateExperienceMaxOrderByAggregateInput
    _min?: CandidateExperienceMinOrderByAggregateInput
    _sum?: CandidateExperienceSumOrderByAggregateInput
  }

  export type CandidateExperienceScalarWhereWithAggregatesInput = {
    AND?: CandidateExperienceScalarWhereWithAggregatesInput | CandidateExperienceScalarWhereWithAggregatesInput[]
    OR?: CandidateExperienceScalarWhereWithAggregatesInput[]
    NOT?: CandidateExperienceScalarWhereWithAggregatesInput | CandidateExperienceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CandidateExperience"> | number
    candidateProfileId?: IntWithAggregatesFilter<"CandidateExperience"> | number
    company?: StringWithAggregatesFilter<"CandidateExperience"> | string
    department?: StringWithAggregatesFilter<"CandidateExperience"> | string
    responsibilities?: StringWithAggregatesFilter<"CandidateExperience"> | string
    startDate?: DateTimeWithAggregatesFilter<"CandidateExperience"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"CandidateExperience"> | Date | string | null
    currentlyWorking?: BoolWithAggregatesFilter<"CandidateExperience"> | boolean
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: IntFilter<"Company"> | number
    userId?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    description?: StringFilter<"Company"> | string
    address?: StringFilter<"Company"> | string
    teamSize?: IntFilter<"Company"> | number
    estDate?: DateTimeFilter<"Company"> | Date | string
    views?: IntFilter<"Company"> | number
    websiteUrl?: StringNullableFilter<"Company"> | string | null
    isApproved?: BoolFilter<"Company"> | boolean
    mapLink?: StringNullableFilter<"Company"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    images?: CompanyImageListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    teamSize?: SortOrder
    estDate?: SortOrder
    views?: SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    isApproved?: SortOrder
    mapLink?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    images?: CompanyImageOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    userId?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    description?: StringFilter<"Company"> | string
    address?: StringFilter<"Company"> | string
    teamSize?: IntFilter<"Company"> | number
    estDate?: DateTimeFilter<"Company"> | Date | string
    views?: IntFilter<"Company"> | number
    websiteUrl?: StringNullableFilter<"Company"> | string | null
    isApproved?: BoolFilter<"Company"> | boolean
    mapLink?: StringNullableFilter<"Company"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    images?: CompanyImageListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    teamSize?: SortOrder
    estDate?: SortOrder
    views?: SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    isApproved?: SortOrder
    mapLink?: SortOrderInput | SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Company"> | number
    userId?: IntWithAggregatesFilter<"Company"> | number
    name?: StringWithAggregatesFilter<"Company"> | string
    description?: StringWithAggregatesFilter<"Company"> | string
    address?: StringWithAggregatesFilter<"Company"> | string
    teamSize?: IntWithAggregatesFilter<"Company"> | number
    estDate?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    views?: IntWithAggregatesFilter<"Company"> | number
    websiteUrl?: StringNullableWithAggregatesFilter<"Company"> | string | null
    isApproved?: BoolWithAggregatesFilter<"Company"> | boolean
    mapLink?: StringNullableWithAggregatesFilter<"Company"> | string | null
  }

  export type CompanyImageWhereInput = {
    AND?: CompanyImageWhereInput | CompanyImageWhereInput[]
    OR?: CompanyImageWhereInput[]
    NOT?: CompanyImageWhereInput | CompanyImageWhereInput[]
    id?: IntFilter<"CompanyImage"> | number
    companyId?: IntFilter<"CompanyImage"> | number
    imageUrl?: StringFilter<"CompanyImage"> | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type CompanyImageOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    imageUrl?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type CompanyImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanyImageWhereInput | CompanyImageWhereInput[]
    OR?: CompanyImageWhereInput[]
    NOT?: CompanyImageWhereInput | CompanyImageWhereInput[]
    companyId?: IntFilter<"CompanyImage"> | number
    imageUrl?: StringFilter<"CompanyImage"> | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id">

  export type CompanyImageOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    imageUrl?: SortOrder
    _count?: CompanyImageCountOrderByAggregateInput
    _avg?: CompanyImageAvgOrderByAggregateInput
    _max?: CompanyImageMaxOrderByAggregateInput
    _min?: CompanyImageMinOrderByAggregateInput
    _sum?: CompanyImageSumOrderByAggregateInput
  }

  export type CompanyImageScalarWhereWithAggregatesInput = {
    AND?: CompanyImageScalarWhereWithAggregatesInput | CompanyImageScalarWhereWithAggregatesInput[]
    OR?: CompanyImageScalarWhereWithAggregatesInput[]
    NOT?: CompanyImageScalarWhereWithAggregatesInput | CompanyImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CompanyImage"> | number
    companyId?: IntWithAggregatesFilter<"CompanyImage"> | number
    imageUrl?: StringWithAggregatesFilter<"CompanyImage"> | string
  }

  export type UserCreateInput = {
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    status?: boolean
    candidateProfile?: CandidateProfileCreateNestedOneWithoutUserInput
    companies?: CompanyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    status?: boolean
    candidateProfile?: CandidateProfileUncheckedCreateNestedOneWithoutUserInput
    companies?: CompanyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: BoolFieldUpdateOperationsInput | boolean
    candidateProfile?: CandidateProfileUpdateOneWithoutUserNestedInput
    companies?: CompanyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: BoolFieldUpdateOperationsInput | boolean
    candidateProfile?: CandidateProfileUncheckedUpdateOneWithoutUserNestedInput
    companies?: CompanyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    status?: boolean
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CandidateProfileCreateInput = {
    fullName: string
    gender: $Enums.Gender
    phone: string
    cv: string
    birthday: Date | string
    address: string
    openToWork?: boolean
    status?: boolean
    user: UserCreateNestedOneWithoutCandidateProfileInput
    candidateLanguages?: CandidateLanguageCreateNestedManyWithoutCandidateProfileInput
    candidateEducations?: CandidateEducationCreateNestedManyWithoutCandidateProfileInput
    candidateExperiences?: CandidateExperienceCreateNestedManyWithoutCandidateProfileInput
  }

  export type CandidateProfileUncheckedCreateInput = {
    id?: number
    userId: number
    fullName: string
    gender: $Enums.Gender
    phone: string
    cv: string
    birthday: Date | string
    address: string
    openToWork?: boolean
    status?: boolean
    candidateLanguages?: CandidateLanguageUncheckedCreateNestedManyWithoutCandidateProfileInput
    candidateEducations?: CandidateEducationUncheckedCreateNestedManyWithoutCandidateProfileInput
    candidateExperiences?: CandidateExperienceUncheckedCreateNestedManyWithoutCandidateProfileInput
  }

  export type CandidateProfileUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    openToWork?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCandidateProfileNestedInput
    candidateLanguages?: CandidateLanguageUpdateManyWithoutCandidateProfileNestedInput
    candidateEducations?: CandidateEducationUpdateManyWithoutCandidateProfileNestedInput
    candidateExperiences?: CandidateExperienceUpdateManyWithoutCandidateProfileNestedInput
  }

  export type CandidateProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    openToWork?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    candidateLanguages?: CandidateLanguageUncheckedUpdateManyWithoutCandidateProfileNestedInput
    candidateEducations?: CandidateEducationUncheckedUpdateManyWithoutCandidateProfileNestedInput
    candidateExperiences?: CandidateExperienceUncheckedUpdateManyWithoutCandidateProfileNestedInput
  }

  export type CandidateProfileCreateManyInput = {
    id?: number
    userId: number
    fullName: string
    gender: $Enums.Gender
    phone: string
    cv: string
    birthday: Date | string
    address: string
    openToWork?: boolean
    status?: boolean
  }

  export type CandidateProfileUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    openToWork?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CandidateProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    openToWork?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LanguageCreateInput = {
    name: string
    candidateLanguages?: CandidateLanguageCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUncheckedCreateInput = {
    name: string
    candidateLanguages?: CandidateLanguageUncheckedCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    candidateLanguages?: CandidateLanguageUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    candidateLanguages?: CandidateLanguageUncheckedUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageCreateManyInput = {
    name: string
  }

  export type LanguageUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LanguageUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CandidateLanguageCreateInput = {
    level?: $Enums.Level
    candidateProfile: CandidateProfileCreateNestedOneWithoutCandidateLanguagesInput
    language: LanguageCreateNestedOneWithoutCandidateLanguagesInput
  }

  export type CandidateLanguageUncheckedCreateInput = {
    candidateProfileId: number
    languageName: string
    level?: $Enums.Level
  }

  export type CandidateLanguageUpdateInput = {
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    candidateProfile?: CandidateProfileUpdateOneRequiredWithoutCandidateLanguagesNestedInput
    language?: LanguageUpdateOneRequiredWithoutCandidateLanguagesNestedInput
  }

  export type CandidateLanguageUncheckedUpdateInput = {
    candidateProfileId?: IntFieldUpdateOperationsInput | number
    languageName?: StringFieldUpdateOperationsInput | string
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
  }

  export type CandidateLanguageCreateManyInput = {
    candidateProfileId: number
    languageName: string
    level?: $Enums.Level
  }

  export type CandidateLanguageUpdateManyMutationInput = {
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
  }

  export type CandidateLanguageUncheckedUpdateManyInput = {
    candidateProfileId?: IntFieldUpdateOperationsInput | number
    languageName?: StringFieldUpdateOperationsInput | string
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
  }

  export type EducationCreateInput = {
    name: string
    map: string
    slug: string
    candidateEducations?: CandidateEducationCreateNestedManyWithoutEducationInput
  }

  export type EducationUncheckedCreateInput = {
    id?: number
    name: string
    map: string
    slug: string
    candidateEducations?: CandidateEducationUncheckedCreateNestedManyWithoutEducationInput
  }

  export type EducationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    map?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    candidateEducations?: CandidateEducationUpdateManyWithoutEducationNestedInput
  }

  export type EducationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    map?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    candidateEducations?: CandidateEducationUncheckedUpdateManyWithoutEducationNestedInput
  }

  export type EducationCreateManyInput = {
    id?: number
    name: string
    map: string
    slug: string
  }

  export type EducationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    map?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type EducationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    map?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type CandidateEducationCreateInput = {
    major: string
    degree: string
    yearStart: number
    yearEnd: number
    candidateProfile: CandidateProfileCreateNestedOneWithoutCandidateEducationsInput
    education: EducationCreateNestedOneWithoutCandidateEducationsInput
  }

  export type CandidateEducationUncheckedCreateInput = {
    candidateProfileId: number
    educationId: number
    major: string
    degree: string
    yearStart: number
    yearEnd: number
  }

  export type CandidateEducationUpdateInput = {
    major?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    yearStart?: IntFieldUpdateOperationsInput | number
    yearEnd?: IntFieldUpdateOperationsInput | number
    candidateProfile?: CandidateProfileUpdateOneRequiredWithoutCandidateEducationsNestedInput
    education?: EducationUpdateOneRequiredWithoutCandidateEducationsNestedInput
  }

  export type CandidateEducationUncheckedUpdateInput = {
    candidateProfileId?: IntFieldUpdateOperationsInput | number
    educationId?: IntFieldUpdateOperationsInput | number
    major?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    yearStart?: IntFieldUpdateOperationsInput | number
    yearEnd?: IntFieldUpdateOperationsInput | number
  }

  export type CandidateEducationCreateManyInput = {
    candidateProfileId: number
    educationId: number
    major: string
    degree: string
    yearStart: number
    yearEnd: number
  }

  export type CandidateEducationUpdateManyMutationInput = {
    major?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    yearStart?: IntFieldUpdateOperationsInput | number
    yearEnd?: IntFieldUpdateOperationsInput | number
  }

  export type CandidateEducationUncheckedUpdateManyInput = {
    candidateProfileId?: IntFieldUpdateOperationsInput | number
    educationId?: IntFieldUpdateOperationsInput | number
    major?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    yearStart?: IntFieldUpdateOperationsInput | number
    yearEnd?: IntFieldUpdateOperationsInput | number
  }

  export type CandidateExperienceCreateInput = {
    company: string
    department: string
    responsibilities: string
    startDate: Date | string
    endDate?: Date | string | null
    currentlyWorking?: boolean
    candidateProfile: CandidateProfileCreateNestedOneWithoutCandidateExperiencesInput
  }

  export type CandidateExperienceUncheckedCreateInput = {
    id?: number
    candidateProfileId: number
    company: string
    department: string
    responsibilities: string
    startDate: Date | string
    endDate?: Date | string | null
    currentlyWorking?: boolean
  }

  export type CandidateExperienceUpdateInput = {
    company?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    responsibilities?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentlyWorking?: BoolFieldUpdateOperationsInput | boolean
    candidateProfile?: CandidateProfileUpdateOneRequiredWithoutCandidateExperiencesNestedInput
  }

  export type CandidateExperienceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidateProfileId?: IntFieldUpdateOperationsInput | number
    company?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    responsibilities?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentlyWorking?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CandidateExperienceCreateManyInput = {
    id?: number
    candidateProfileId: number
    company: string
    department: string
    responsibilities: string
    startDate: Date | string
    endDate?: Date | string | null
    currentlyWorking?: boolean
  }

  export type CandidateExperienceUpdateManyMutationInput = {
    company?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    responsibilities?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentlyWorking?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CandidateExperienceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidateProfileId?: IntFieldUpdateOperationsInput | number
    company?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    responsibilities?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentlyWorking?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CompanyCreateInput = {
    name: string
    description: string
    address: string
    teamSize: number
    estDate: Date | string
    views?: number
    websiteUrl?: string | null
    isApproved?: boolean
    mapLink?: string | null
    user: UserCreateNestedOneWithoutCompaniesInput
    images?: CompanyImageCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    userId: number
    name: string
    description: string
    address: string
    teamSize: number
    estDate: Date | string
    views?: number
    websiteUrl?: string | null
    isApproved?: boolean
    mapLink?: string | null
    images?: CompanyImageUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    teamSize?: IntFieldUpdateOperationsInput | number
    estDate?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    mapLink?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCompaniesNestedInput
    images?: CompanyImageUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    teamSize?: IntFieldUpdateOperationsInput | number
    estDate?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    mapLink?: NullableStringFieldUpdateOperationsInput | string | null
    images?: CompanyImageUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: number
    userId: number
    name: string
    description: string
    address: string
    teamSize: number
    estDate: Date | string
    views?: number
    websiteUrl?: string | null
    isApproved?: boolean
    mapLink?: string | null
  }

  export type CompanyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    teamSize?: IntFieldUpdateOperationsInput | number
    estDate?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    mapLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    teamSize?: IntFieldUpdateOperationsInput | number
    estDate?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    mapLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyImageCreateInput = {
    imageUrl: string
    company: CompanyCreateNestedOneWithoutImagesInput
  }

  export type CompanyImageUncheckedCreateInput = {
    id?: number
    companyId: number
    imageUrl: string
  }

  export type CompanyImageUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    company?: CompanyUpdateOneRequiredWithoutImagesNestedInput
  }

  export type CompanyImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyImageCreateManyInput = {
    id?: number
    companyId: number
    imageUrl: string
  }

  export type CompanyImageUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CandidateProfileNullableScalarRelationFilter = {
    is?: CandidateProfileWhereInput | null
    isNot?: CandidateProfileWhereInput | null
  }

  export type CompanyListRelationFilter = {
    every?: CompanyWhereInput
    some?: CompanyWhereInput
    none?: CompanyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CompanyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CandidateLanguageListRelationFilter = {
    every?: CandidateLanguageWhereInput
    some?: CandidateLanguageWhereInput
    none?: CandidateLanguageWhereInput
  }

  export type CandidateEducationListRelationFilter = {
    every?: CandidateEducationWhereInput
    some?: CandidateEducationWhereInput
    none?: CandidateEducationWhereInput
  }

  export type CandidateExperienceListRelationFilter = {
    every?: CandidateExperienceWhereInput
    some?: CandidateExperienceWhereInput
    none?: CandidateExperienceWhereInput
  }

  export type CandidateLanguageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CandidateEducationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CandidateExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CandidateProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    cv?: SortOrder
    birthday?: SortOrder
    address?: SortOrder
    openToWork?: SortOrder
    status?: SortOrder
  }

  export type CandidateProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CandidateProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    cv?: SortOrder
    birthday?: SortOrder
    address?: SortOrder
    openToWork?: SortOrder
    status?: SortOrder
  }

  export type CandidateProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    cv?: SortOrder
    birthday?: SortOrder
    address?: SortOrder
    openToWork?: SortOrder
    status?: SortOrder
  }

  export type CandidateProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type LanguageCountOrderByAggregateInput = {
    name?: SortOrder
  }

  export type LanguageMaxOrderByAggregateInput = {
    name?: SortOrder
  }

  export type LanguageMinOrderByAggregateInput = {
    name?: SortOrder
  }

  export type EnumLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelFilter<$PrismaModel> | $Enums.Level
  }

  export type CandidateProfileScalarRelationFilter = {
    is?: CandidateProfileWhereInput
    isNot?: CandidateProfileWhereInput
  }

  export type LanguageScalarRelationFilter = {
    is?: LanguageWhereInput
    isNot?: LanguageWhereInput
  }

  export type CandidateLanguageCandidateProfileIdLanguageNameCompoundUniqueInput = {
    candidateProfileId: number
    languageName: string
  }

  export type CandidateLanguageCountOrderByAggregateInput = {
    candidateProfileId?: SortOrder
    languageName?: SortOrder
    level?: SortOrder
  }

  export type CandidateLanguageAvgOrderByAggregateInput = {
    candidateProfileId?: SortOrder
  }

  export type CandidateLanguageMaxOrderByAggregateInput = {
    candidateProfileId?: SortOrder
    languageName?: SortOrder
    level?: SortOrder
  }

  export type CandidateLanguageMinOrderByAggregateInput = {
    candidateProfileId?: SortOrder
    languageName?: SortOrder
    level?: SortOrder
  }

  export type CandidateLanguageSumOrderByAggregateInput = {
    candidateProfileId?: SortOrder
  }

  export type EnumLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelWithAggregatesFilter<$PrismaModel> | $Enums.Level
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLevelFilter<$PrismaModel>
    _max?: NestedEnumLevelFilter<$PrismaModel>
  }

  export type EducationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    map?: SortOrder
    slug?: SortOrder
  }

  export type EducationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EducationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    map?: SortOrder
    slug?: SortOrder
  }

  export type EducationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    map?: SortOrder
    slug?: SortOrder
  }

  export type EducationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EducationScalarRelationFilter = {
    is?: EducationWhereInput
    isNot?: EducationWhereInput
  }

  export type CandidateEducationCandidateProfileIdEducationIdCompoundUniqueInput = {
    candidateProfileId: number
    educationId: number
  }

  export type CandidateEducationCountOrderByAggregateInput = {
    candidateProfileId?: SortOrder
    educationId?: SortOrder
    major?: SortOrder
    degree?: SortOrder
    yearStart?: SortOrder
    yearEnd?: SortOrder
  }

  export type CandidateEducationAvgOrderByAggregateInput = {
    candidateProfileId?: SortOrder
    educationId?: SortOrder
    yearStart?: SortOrder
    yearEnd?: SortOrder
  }

  export type CandidateEducationMaxOrderByAggregateInput = {
    candidateProfileId?: SortOrder
    educationId?: SortOrder
    major?: SortOrder
    degree?: SortOrder
    yearStart?: SortOrder
    yearEnd?: SortOrder
  }

  export type CandidateEducationMinOrderByAggregateInput = {
    candidateProfileId?: SortOrder
    educationId?: SortOrder
    major?: SortOrder
    degree?: SortOrder
    yearStart?: SortOrder
    yearEnd?: SortOrder
  }

  export type CandidateEducationSumOrderByAggregateInput = {
    candidateProfileId?: SortOrder
    educationId?: SortOrder
    yearStart?: SortOrder
    yearEnd?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CandidateExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    candidateProfileId?: SortOrder
    company?: SortOrder
    department?: SortOrder
    responsibilities?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    currentlyWorking?: SortOrder
  }

  export type CandidateExperienceAvgOrderByAggregateInput = {
    id?: SortOrder
    candidateProfileId?: SortOrder
  }

  export type CandidateExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    candidateProfileId?: SortOrder
    company?: SortOrder
    department?: SortOrder
    responsibilities?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    currentlyWorking?: SortOrder
  }

  export type CandidateExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    candidateProfileId?: SortOrder
    company?: SortOrder
    department?: SortOrder
    responsibilities?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    currentlyWorking?: SortOrder
  }

  export type CandidateExperienceSumOrderByAggregateInput = {
    id?: SortOrder
    candidateProfileId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CompanyImageListRelationFilter = {
    every?: CompanyImageWhereInput
    some?: CompanyImageWhereInput
    none?: CompanyImageWhereInput
  }

  export type CompanyImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    teamSize?: SortOrder
    estDate?: SortOrder
    views?: SortOrder
    websiteUrl?: SortOrder
    isApproved?: SortOrder
    mapLink?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamSize?: SortOrder
    views?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    teamSize?: SortOrder
    estDate?: SortOrder
    views?: SortOrder
    websiteUrl?: SortOrder
    isApproved?: SortOrder
    mapLink?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    teamSize?: SortOrder
    estDate?: SortOrder
    views?: SortOrder
    websiteUrl?: SortOrder
    isApproved?: SortOrder
    mapLink?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamSize?: SortOrder
    views?: SortOrder
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type CompanyImageCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    imageUrl?: SortOrder
  }

  export type CompanyImageAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type CompanyImageMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    imageUrl?: SortOrder
  }

  export type CompanyImageMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    imageUrl?: SortOrder
  }

  export type CompanyImageSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type CandidateProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<CandidateProfileCreateWithoutUserInput, CandidateProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutUserInput
    connect?: CandidateProfileWhereUniqueInput
  }

  export type CompanyCreateNestedManyWithoutUserInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput> | CompanyCreateWithoutUserInput[] | CompanyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput | CompanyCreateOrConnectWithoutUserInput[]
    createMany?: CompanyCreateManyUserInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type CandidateProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CandidateProfileCreateWithoutUserInput, CandidateProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutUserInput
    connect?: CandidateProfileWhereUniqueInput
  }

  export type CompanyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput> | CompanyCreateWithoutUserInput[] | CompanyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput | CompanyCreateOrConnectWithoutUserInput[]
    createMany?: CompanyCreateManyUserInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CandidateProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<CandidateProfileCreateWithoutUserInput, CandidateProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutUserInput
    upsert?: CandidateProfileUpsertWithoutUserInput
    disconnect?: CandidateProfileWhereInput | boolean
    delete?: CandidateProfileWhereInput | boolean
    connect?: CandidateProfileWhereUniqueInput
    update?: XOR<XOR<CandidateProfileUpdateToOneWithWhereWithoutUserInput, CandidateProfileUpdateWithoutUserInput>, CandidateProfileUncheckedUpdateWithoutUserInput>
  }

  export type CompanyUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput> | CompanyCreateWithoutUserInput[] | CompanyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput | CompanyCreateOrConnectWithoutUserInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutUserInput | CompanyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompanyCreateManyUserInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutUserInput | CompanyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutUserInput | CompanyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CandidateProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CandidateProfileCreateWithoutUserInput, CandidateProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutUserInput
    upsert?: CandidateProfileUpsertWithoutUserInput
    disconnect?: CandidateProfileWhereInput | boolean
    delete?: CandidateProfileWhereInput | boolean
    connect?: CandidateProfileWhereUniqueInput
    update?: XOR<XOR<CandidateProfileUpdateToOneWithWhereWithoutUserInput, CandidateProfileUpdateWithoutUserInput>, CandidateProfileUncheckedUpdateWithoutUserInput>
  }

  export type CompanyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput> | CompanyCreateWithoutUserInput[] | CompanyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput | CompanyCreateOrConnectWithoutUserInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutUserInput | CompanyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompanyCreateManyUserInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutUserInput | CompanyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutUserInput | CompanyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCandidateProfileInput = {
    create?: XOR<UserCreateWithoutCandidateProfileInput, UserUncheckedCreateWithoutCandidateProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCandidateProfileInput
    connect?: UserWhereUniqueInput
  }

  export type CandidateLanguageCreateNestedManyWithoutCandidateProfileInput = {
    create?: XOR<CandidateLanguageCreateWithoutCandidateProfileInput, CandidateLanguageUncheckedCreateWithoutCandidateProfileInput> | CandidateLanguageCreateWithoutCandidateProfileInput[] | CandidateLanguageUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: CandidateLanguageCreateOrConnectWithoutCandidateProfileInput | CandidateLanguageCreateOrConnectWithoutCandidateProfileInput[]
    createMany?: CandidateLanguageCreateManyCandidateProfileInputEnvelope
    connect?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
  }

  export type CandidateEducationCreateNestedManyWithoutCandidateProfileInput = {
    create?: XOR<CandidateEducationCreateWithoutCandidateProfileInput, CandidateEducationUncheckedCreateWithoutCandidateProfileInput> | CandidateEducationCreateWithoutCandidateProfileInput[] | CandidateEducationUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: CandidateEducationCreateOrConnectWithoutCandidateProfileInput | CandidateEducationCreateOrConnectWithoutCandidateProfileInput[]
    createMany?: CandidateEducationCreateManyCandidateProfileInputEnvelope
    connect?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
  }

  export type CandidateExperienceCreateNestedManyWithoutCandidateProfileInput = {
    create?: XOR<CandidateExperienceCreateWithoutCandidateProfileInput, CandidateExperienceUncheckedCreateWithoutCandidateProfileInput> | CandidateExperienceCreateWithoutCandidateProfileInput[] | CandidateExperienceUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: CandidateExperienceCreateOrConnectWithoutCandidateProfileInput | CandidateExperienceCreateOrConnectWithoutCandidateProfileInput[]
    createMany?: CandidateExperienceCreateManyCandidateProfileInputEnvelope
    connect?: CandidateExperienceWhereUniqueInput | CandidateExperienceWhereUniqueInput[]
  }

  export type CandidateLanguageUncheckedCreateNestedManyWithoutCandidateProfileInput = {
    create?: XOR<CandidateLanguageCreateWithoutCandidateProfileInput, CandidateLanguageUncheckedCreateWithoutCandidateProfileInput> | CandidateLanguageCreateWithoutCandidateProfileInput[] | CandidateLanguageUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: CandidateLanguageCreateOrConnectWithoutCandidateProfileInput | CandidateLanguageCreateOrConnectWithoutCandidateProfileInput[]
    createMany?: CandidateLanguageCreateManyCandidateProfileInputEnvelope
    connect?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
  }

  export type CandidateEducationUncheckedCreateNestedManyWithoutCandidateProfileInput = {
    create?: XOR<CandidateEducationCreateWithoutCandidateProfileInput, CandidateEducationUncheckedCreateWithoutCandidateProfileInput> | CandidateEducationCreateWithoutCandidateProfileInput[] | CandidateEducationUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: CandidateEducationCreateOrConnectWithoutCandidateProfileInput | CandidateEducationCreateOrConnectWithoutCandidateProfileInput[]
    createMany?: CandidateEducationCreateManyCandidateProfileInputEnvelope
    connect?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
  }

  export type CandidateExperienceUncheckedCreateNestedManyWithoutCandidateProfileInput = {
    create?: XOR<CandidateExperienceCreateWithoutCandidateProfileInput, CandidateExperienceUncheckedCreateWithoutCandidateProfileInput> | CandidateExperienceCreateWithoutCandidateProfileInput[] | CandidateExperienceUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: CandidateExperienceCreateOrConnectWithoutCandidateProfileInput | CandidateExperienceCreateOrConnectWithoutCandidateProfileInput[]
    createMany?: CandidateExperienceCreateManyCandidateProfileInputEnvelope
    connect?: CandidateExperienceWhereUniqueInput | CandidateExperienceWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutCandidateProfileNestedInput = {
    create?: XOR<UserCreateWithoutCandidateProfileInput, UserUncheckedCreateWithoutCandidateProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCandidateProfileInput
    upsert?: UserUpsertWithoutCandidateProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCandidateProfileInput, UserUpdateWithoutCandidateProfileInput>, UserUncheckedUpdateWithoutCandidateProfileInput>
  }

  export type CandidateLanguageUpdateManyWithoutCandidateProfileNestedInput = {
    create?: XOR<CandidateLanguageCreateWithoutCandidateProfileInput, CandidateLanguageUncheckedCreateWithoutCandidateProfileInput> | CandidateLanguageCreateWithoutCandidateProfileInput[] | CandidateLanguageUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: CandidateLanguageCreateOrConnectWithoutCandidateProfileInput | CandidateLanguageCreateOrConnectWithoutCandidateProfileInput[]
    upsert?: CandidateLanguageUpsertWithWhereUniqueWithoutCandidateProfileInput | CandidateLanguageUpsertWithWhereUniqueWithoutCandidateProfileInput[]
    createMany?: CandidateLanguageCreateManyCandidateProfileInputEnvelope
    set?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    disconnect?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    delete?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    connect?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    update?: CandidateLanguageUpdateWithWhereUniqueWithoutCandidateProfileInput | CandidateLanguageUpdateWithWhereUniqueWithoutCandidateProfileInput[]
    updateMany?: CandidateLanguageUpdateManyWithWhereWithoutCandidateProfileInput | CandidateLanguageUpdateManyWithWhereWithoutCandidateProfileInput[]
    deleteMany?: CandidateLanguageScalarWhereInput | CandidateLanguageScalarWhereInput[]
  }

  export type CandidateEducationUpdateManyWithoutCandidateProfileNestedInput = {
    create?: XOR<CandidateEducationCreateWithoutCandidateProfileInput, CandidateEducationUncheckedCreateWithoutCandidateProfileInput> | CandidateEducationCreateWithoutCandidateProfileInput[] | CandidateEducationUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: CandidateEducationCreateOrConnectWithoutCandidateProfileInput | CandidateEducationCreateOrConnectWithoutCandidateProfileInput[]
    upsert?: CandidateEducationUpsertWithWhereUniqueWithoutCandidateProfileInput | CandidateEducationUpsertWithWhereUniqueWithoutCandidateProfileInput[]
    createMany?: CandidateEducationCreateManyCandidateProfileInputEnvelope
    set?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    disconnect?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    delete?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    connect?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    update?: CandidateEducationUpdateWithWhereUniqueWithoutCandidateProfileInput | CandidateEducationUpdateWithWhereUniqueWithoutCandidateProfileInput[]
    updateMany?: CandidateEducationUpdateManyWithWhereWithoutCandidateProfileInput | CandidateEducationUpdateManyWithWhereWithoutCandidateProfileInput[]
    deleteMany?: CandidateEducationScalarWhereInput | CandidateEducationScalarWhereInput[]
  }

  export type CandidateExperienceUpdateManyWithoutCandidateProfileNestedInput = {
    create?: XOR<CandidateExperienceCreateWithoutCandidateProfileInput, CandidateExperienceUncheckedCreateWithoutCandidateProfileInput> | CandidateExperienceCreateWithoutCandidateProfileInput[] | CandidateExperienceUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: CandidateExperienceCreateOrConnectWithoutCandidateProfileInput | CandidateExperienceCreateOrConnectWithoutCandidateProfileInput[]
    upsert?: CandidateExperienceUpsertWithWhereUniqueWithoutCandidateProfileInput | CandidateExperienceUpsertWithWhereUniqueWithoutCandidateProfileInput[]
    createMany?: CandidateExperienceCreateManyCandidateProfileInputEnvelope
    set?: CandidateExperienceWhereUniqueInput | CandidateExperienceWhereUniqueInput[]
    disconnect?: CandidateExperienceWhereUniqueInput | CandidateExperienceWhereUniqueInput[]
    delete?: CandidateExperienceWhereUniqueInput | CandidateExperienceWhereUniqueInput[]
    connect?: CandidateExperienceWhereUniqueInput | CandidateExperienceWhereUniqueInput[]
    update?: CandidateExperienceUpdateWithWhereUniqueWithoutCandidateProfileInput | CandidateExperienceUpdateWithWhereUniqueWithoutCandidateProfileInput[]
    updateMany?: CandidateExperienceUpdateManyWithWhereWithoutCandidateProfileInput | CandidateExperienceUpdateManyWithWhereWithoutCandidateProfileInput[]
    deleteMany?: CandidateExperienceScalarWhereInput | CandidateExperienceScalarWhereInput[]
  }

  export type CandidateLanguageUncheckedUpdateManyWithoutCandidateProfileNestedInput = {
    create?: XOR<CandidateLanguageCreateWithoutCandidateProfileInput, CandidateLanguageUncheckedCreateWithoutCandidateProfileInput> | CandidateLanguageCreateWithoutCandidateProfileInput[] | CandidateLanguageUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: CandidateLanguageCreateOrConnectWithoutCandidateProfileInput | CandidateLanguageCreateOrConnectWithoutCandidateProfileInput[]
    upsert?: CandidateLanguageUpsertWithWhereUniqueWithoutCandidateProfileInput | CandidateLanguageUpsertWithWhereUniqueWithoutCandidateProfileInput[]
    createMany?: CandidateLanguageCreateManyCandidateProfileInputEnvelope
    set?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    disconnect?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    delete?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    connect?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    update?: CandidateLanguageUpdateWithWhereUniqueWithoutCandidateProfileInput | CandidateLanguageUpdateWithWhereUniqueWithoutCandidateProfileInput[]
    updateMany?: CandidateLanguageUpdateManyWithWhereWithoutCandidateProfileInput | CandidateLanguageUpdateManyWithWhereWithoutCandidateProfileInput[]
    deleteMany?: CandidateLanguageScalarWhereInput | CandidateLanguageScalarWhereInput[]
  }

  export type CandidateEducationUncheckedUpdateManyWithoutCandidateProfileNestedInput = {
    create?: XOR<CandidateEducationCreateWithoutCandidateProfileInput, CandidateEducationUncheckedCreateWithoutCandidateProfileInput> | CandidateEducationCreateWithoutCandidateProfileInput[] | CandidateEducationUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: CandidateEducationCreateOrConnectWithoutCandidateProfileInput | CandidateEducationCreateOrConnectWithoutCandidateProfileInput[]
    upsert?: CandidateEducationUpsertWithWhereUniqueWithoutCandidateProfileInput | CandidateEducationUpsertWithWhereUniqueWithoutCandidateProfileInput[]
    createMany?: CandidateEducationCreateManyCandidateProfileInputEnvelope
    set?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    disconnect?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    delete?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    connect?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    update?: CandidateEducationUpdateWithWhereUniqueWithoutCandidateProfileInput | CandidateEducationUpdateWithWhereUniqueWithoutCandidateProfileInput[]
    updateMany?: CandidateEducationUpdateManyWithWhereWithoutCandidateProfileInput | CandidateEducationUpdateManyWithWhereWithoutCandidateProfileInput[]
    deleteMany?: CandidateEducationScalarWhereInput | CandidateEducationScalarWhereInput[]
  }

  export type CandidateExperienceUncheckedUpdateManyWithoutCandidateProfileNestedInput = {
    create?: XOR<CandidateExperienceCreateWithoutCandidateProfileInput, CandidateExperienceUncheckedCreateWithoutCandidateProfileInput> | CandidateExperienceCreateWithoutCandidateProfileInput[] | CandidateExperienceUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: CandidateExperienceCreateOrConnectWithoutCandidateProfileInput | CandidateExperienceCreateOrConnectWithoutCandidateProfileInput[]
    upsert?: CandidateExperienceUpsertWithWhereUniqueWithoutCandidateProfileInput | CandidateExperienceUpsertWithWhereUniqueWithoutCandidateProfileInput[]
    createMany?: CandidateExperienceCreateManyCandidateProfileInputEnvelope
    set?: CandidateExperienceWhereUniqueInput | CandidateExperienceWhereUniqueInput[]
    disconnect?: CandidateExperienceWhereUniqueInput | CandidateExperienceWhereUniqueInput[]
    delete?: CandidateExperienceWhereUniqueInput | CandidateExperienceWhereUniqueInput[]
    connect?: CandidateExperienceWhereUniqueInput | CandidateExperienceWhereUniqueInput[]
    update?: CandidateExperienceUpdateWithWhereUniqueWithoutCandidateProfileInput | CandidateExperienceUpdateWithWhereUniqueWithoutCandidateProfileInput[]
    updateMany?: CandidateExperienceUpdateManyWithWhereWithoutCandidateProfileInput | CandidateExperienceUpdateManyWithWhereWithoutCandidateProfileInput[]
    deleteMany?: CandidateExperienceScalarWhereInput | CandidateExperienceScalarWhereInput[]
  }

  export type CandidateLanguageCreateNestedManyWithoutLanguageInput = {
    create?: XOR<CandidateLanguageCreateWithoutLanguageInput, CandidateLanguageUncheckedCreateWithoutLanguageInput> | CandidateLanguageCreateWithoutLanguageInput[] | CandidateLanguageUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: CandidateLanguageCreateOrConnectWithoutLanguageInput | CandidateLanguageCreateOrConnectWithoutLanguageInput[]
    createMany?: CandidateLanguageCreateManyLanguageInputEnvelope
    connect?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
  }

  export type CandidateLanguageUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: XOR<CandidateLanguageCreateWithoutLanguageInput, CandidateLanguageUncheckedCreateWithoutLanguageInput> | CandidateLanguageCreateWithoutLanguageInput[] | CandidateLanguageUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: CandidateLanguageCreateOrConnectWithoutLanguageInput | CandidateLanguageCreateOrConnectWithoutLanguageInput[]
    createMany?: CandidateLanguageCreateManyLanguageInputEnvelope
    connect?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
  }

  export type CandidateLanguageUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<CandidateLanguageCreateWithoutLanguageInput, CandidateLanguageUncheckedCreateWithoutLanguageInput> | CandidateLanguageCreateWithoutLanguageInput[] | CandidateLanguageUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: CandidateLanguageCreateOrConnectWithoutLanguageInput | CandidateLanguageCreateOrConnectWithoutLanguageInput[]
    upsert?: CandidateLanguageUpsertWithWhereUniqueWithoutLanguageInput | CandidateLanguageUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: CandidateLanguageCreateManyLanguageInputEnvelope
    set?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    disconnect?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    delete?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    connect?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    update?: CandidateLanguageUpdateWithWhereUniqueWithoutLanguageInput | CandidateLanguageUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: CandidateLanguageUpdateManyWithWhereWithoutLanguageInput | CandidateLanguageUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: CandidateLanguageScalarWhereInput | CandidateLanguageScalarWhereInput[]
  }

  export type CandidateLanguageUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<CandidateLanguageCreateWithoutLanguageInput, CandidateLanguageUncheckedCreateWithoutLanguageInput> | CandidateLanguageCreateWithoutLanguageInput[] | CandidateLanguageUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: CandidateLanguageCreateOrConnectWithoutLanguageInput | CandidateLanguageCreateOrConnectWithoutLanguageInput[]
    upsert?: CandidateLanguageUpsertWithWhereUniqueWithoutLanguageInput | CandidateLanguageUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: CandidateLanguageCreateManyLanguageInputEnvelope
    set?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    disconnect?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    delete?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    connect?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    update?: CandidateLanguageUpdateWithWhereUniqueWithoutLanguageInput | CandidateLanguageUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: CandidateLanguageUpdateManyWithWhereWithoutLanguageInput | CandidateLanguageUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: CandidateLanguageScalarWhereInput | CandidateLanguageScalarWhereInput[]
  }

  export type CandidateProfileCreateNestedOneWithoutCandidateLanguagesInput = {
    create?: XOR<CandidateProfileCreateWithoutCandidateLanguagesInput, CandidateProfileUncheckedCreateWithoutCandidateLanguagesInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutCandidateLanguagesInput
    connect?: CandidateProfileWhereUniqueInput
  }

  export type LanguageCreateNestedOneWithoutCandidateLanguagesInput = {
    create?: XOR<LanguageCreateWithoutCandidateLanguagesInput, LanguageUncheckedCreateWithoutCandidateLanguagesInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutCandidateLanguagesInput
    connect?: LanguageWhereUniqueInput
  }

  export type EnumLevelFieldUpdateOperationsInput = {
    set?: $Enums.Level
  }

  export type CandidateProfileUpdateOneRequiredWithoutCandidateLanguagesNestedInput = {
    create?: XOR<CandidateProfileCreateWithoutCandidateLanguagesInput, CandidateProfileUncheckedCreateWithoutCandidateLanguagesInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutCandidateLanguagesInput
    upsert?: CandidateProfileUpsertWithoutCandidateLanguagesInput
    connect?: CandidateProfileWhereUniqueInput
    update?: XOR<XOR<CandidateProfileUpdateToOneWithWhereWithoutCandidateLanguagesInput, CandidateProfileUpdateWithoutCandidateLanguagesInput>, CandidateProfileUncheckedUpdateWithoutCandidateLanguagesInput>
  }

  export type LanguageUpdateOneRequiredWithoutCandidateLanguagesNestedInput = {
    create?: XOR<LanguageCreateWithoutCandidateLanguagesInput, LanguageUncheckedCreateWithoutCandidateLanguagesInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutCandidateLanguagesInput
    upsert?: LanguageUpsertWithoutCandidateLanguagesInput
    connect?: LanguageWhereUniqueInput
    update?: XOR<XOR<LanguageUpdateToOneWithWhereWithoutCandidateLanguagesInput, LanguageUpdateWithoutCandidateLanguagesInput>, LanguageUncheckedUpdateWithoutCandidateLanguagesInput>
  }

  export type CandidateEducationCreateNestedManyWithoutEducationInput = {
    create?: XOR<CandidateEducationCreateWithoutEducationInput, CandidateEducationUncheckedCreateWithoutEducationInput> | CandidateEducationCreateWithoutEducationInput[] | CandidateEducationUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: CandidateEducationCreateOrConnectWithoutEducationInput | CandidateEducationCreateOrConnectWithoutEducationInput[]
    createMany?: CandidateEducationCreateManyEducationInputEnvelope
    connect?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
  }

  export type CandidateEducationUncheckedCreateNestedManyWithoutEducationInput = {
    create?: XOR<CandidateEducationCreateWithoutEducationInput, CandidateEducationUncheckedCreateWithoutEducationInput> | CandidateEducationCreateWithoutEducationInput[] | CandidateEducationUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: CandidateEducationCreateOrConnectWithoutEducationInput | CandidateEducationCreateOrConnectWithoutEducationInput[]
    createMany?: CandidateEducationCreateManyEducationInputEnvelope
    connect?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
  }

  export type CandidateEducationUpdateManyWithoutEducationNestedInput = {
    create?: XOR<CandidateEducationCreateWithoutEducationInput, CandidateEducationUncheckedCreateWithoutEducationInput> | CandidateEducationCreateWithoutEducationInput[] | CandidateEducationUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: CandidateEducationCreateOrConnectWithoutEducationInput | CandidateEducationCreateOrConnectWithoutEducationInput[]
    upsert?: CandidateEducationUpsertWithWhereUniqueWithoutEducationInput | CandidateEducationUpsertWithWhereUniqueWithoutEducationInput[]
    createMany?: CandidateEducationCreateManyEducationInputEnvelope
    set?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    disconnect?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    delete?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    connect?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    update?: CandidateEducationUpdateWithWhereUniqueWithoutEducationInput | CandidateEducationUpdateWithWhereUniqueWithoutEducationInput[]
    updateMany?: CandidateEducationUpdateManyWithWhereWithoutEducationInput | CandidateEducationUpdateManyWithWhereWithoutEducationInput[]
    deleteMany?: CandidateEducationScalarWhereInput | CandidateEducationScalarWhereInput[]
  }

  export type CandidateEducationUncheckedUpdateManyWithoutEducationNestedInput = {
    create?: XOR<CandidateEducationCreateWithoutEducationInput, CandidateEducationUncheckedCreateWithoutEducationInput> | CandidateEducationCreateWithoutEducationInput[] | CandidateEducationUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: CandidateEducationCreateOrConnectWithoutEducationInput | CandidateEducationCreateOrConnectWithoutEducationInput[]
    upsert?: CandidateEducationUpsertWithWhereUniqueWithoutEducationInput | CandidateEducationUpsertWithWhereUniqueWithoutEducationInput[]
    createMany?: CandidateEducationCreateManyEducationInputEnvelope
    set?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    disconnect?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    delete?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    connect?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    update?: CandidateEducationUpdateWithWhereUniqueWithoutEducationInput | CandidateEducationUpdateWithWhereUniqueWithoutEducationInput[]
    updateMany?: CandidateEducationUpdateManyWithWhereWithoutEducationInput | CandidateEducationUpdateManyWithWhereWithoutEducationInput[]
    deleteMany?: CandidateEducationScalarWhereInput | CandidateEducationScalarWhereInput[]
  }

  export type CandidateProfileCreateNestedOneWithoutCandidateEducationsInput = {
    create?: XOR<CandidateProfileCreateWithoutCandidateEducationsInput, CandidateProfileUncheckedCreateWithoutCandidateEducationsInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutCandidateEducationsInput
    connect?: CandidateProfileWhereUniqueInput
  }

  export type EducationCreateNestedOneWithoutCandidateEducationsInput = {
    create?: XOR<EducationCreateWithoutCandidateEducationsInput, EducationUncheckedCreateWithoutCandidateEducationsInput>
    connectOrCreate?: EducationCreateOrConnectWithoutCandidateEducationsInput
    connect?: EducationWhereUniqueInput
  }

  export type CandidateProfileUpdateOneRequiredWithoutCandidateEducationsNestedInput = {
    create?: XOR<CandidateProfileCreateWithoutCandidateEducationsInput, CandidateProfileUncheckedCreateWithoutCandidateEducationsInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutCandidateEducationsInput
    upsert?: CandidateProfileUpsertWithoutCandidateEducationsInput
    connect?: CandidateProfileWhereUniqueInput
    update?: XOR<XOR<CandidateProfileUpdateToOneWithWhereWithoutCandidateEducationsInput, CandidateProfileUpdateWithoutCandidateEducationsInput>, CandidateProfileUncheckedUpdateWithoutCandidateEducationsInput>
  }

  export type EducationUpdateOneRequiredWithoutCandidateEducationsNestedInput = {
    create?: XOR<EducationCreateWithoutCandidateEducationsInput, EducationUncheckedCreateWithoutCandidateEducationsInput>
    connectOrCreate?: EducationCreateOrConnectWithoutCandidateEducationsInput
    upsert?: EducationUpsertWithoutCandidateEducationsInput
    connect?: EducationWhereUniqueInput
    update?: XOR<XOR<EducationUpdateToOneWithWhereWithoutCandidateEducationsInput, EducationUpdateWithoutCandidateEducationsInput>, EducationUncheckedUpdateWithoutCandidateEducationsInput>
  }

  export type CandidateProfileCreateNestedOneWithoutCandidateExperiencesInput = {
    create?: XOR<CandidateProfileCreateWithoutCandidateExperiencesInput, CandidateProfileUncheckedCreateWithoutCandidateExperiencesInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutCandidateExperiencesInput
    connect?: CandidateProfileWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CandidateProfileUpdateOneRequiredWithoutCandidateExperiencesNestedInput = {
    create?: XOR<CandidateProfileCreateWithoutCandidateExperiencesInput, CandidateProfileUncheckedCreateWithoutCandidateExperiencesInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutCandidateExperiencesInput
    upsert?: CandidateProfileUpsertWithoutCandidateExperiencesInput
    connect?: CandidateProfileWhereUniqueInput
    update?: XOR<XOR<CandidateProfileUpdateToOneWithWhereWithoutCandidateExperiencesInput, CandidateProfileUpdateWithoutCandidateExperiencesInput>, CandidateProfileUncheckedUpdateWithoutCandidateExperiencesInput>
  }

  export type UserCreateNestedOneWithoutCompaniesInput = {
    create?: XOR<UserCreateWithoutCompaniesInput, UserUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompaniesInput
    connect?: UserWhereUniqueInput
  }

  export type CompanyImageCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CompanyImageCreateWithoutCompanyInput, CompanyImageUncheckedCreateWithoutCompanyInput> | CompanyImageCreateWithoutCompanyInput[] | CompanyImageUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyImageCreateOrConnectWithoutCompanyInput | CompanyImageCreateOrConnectWithoutCompanyInput[]
    createMany?: CompanyImageCreateManyCompanyInputEnvelope
    connect?: CompanyImageWhereUniqueInput | CompanyImageWhereUniqueInput[]
  }

  export type CompanyImageUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CompanyImageCreateWithoutCompanyInput, CompanyImageUncheckedCreateWithoutCompanyInput> | CompanyImageCreateWithoutCompanyInput[] | CompanyImageUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyImageCreateOrConnectWithoutCompanyInput | CompanyImageCreateOrConnectWithoutCompanyInput[]
    createMany?: CompanyImageCreateManyCompanyInputEnvelope
    connect?: CompanyImageWhereUniqueInput | CompanyImageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCompaniesNestedInput = {
    create?: XOR<UserCreateWithoutCompaniesInput, UserUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompaniesInput
    upsert?: UserUpsertWithoutCompaniesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompaniesInput, UserUpdateWithoutCompaniesInput>, UserUncheckedUpdateWithoutCompaniesInput>
  }

  export type CompanyImageUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CompanyImageCreateWithoutCompanyInput, CompanyImageUncheckedCreateWithoutCompanyInput> | CompanyImageCreateWithoutCompanyInput[] | CompanyImageUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyImageCreateOrConnectWithoutCompanyInput | CompanyImageCreateOrConnectWithoutCompanyInput[]
    upsert?: CompanyImageUpsertWithWhereUniqueWithoutCompanyInput | CompanyImageUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CompanyImageCreateManyCompanyInputEnvelope
    set?: CompanyImageWhereUniqueInput | CompanyImageWhereUniqueInput[]
    disconnect?: CompanyImageWhereUniqueInput | CompanyImageWhereUniqueInput[]
    delete?: CompanyImageWhereUniqueInput | CompanyImageWhereUniqueInput[]
    connect?: CompanyImageWhereUniqueInput | CompanyImageWhereUniqueInput[]
    update?: CompanyImageUpdateWithWhereUniqueWithoutCompanyInput | CompanyImageUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CompanyImageUpdateManyWithWhereWithoutCompanyInput | CompanyImageUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CompanyImageScalarWhereInput | CompanyImageScalarWhereInput[]
  }

  export type CompanyImageUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CompanyImageCreateWithoutCompanyInput, CompanyImageUncheckedCreateWithoutCompanyInput> | CompanyImageCreateWithoutCompanyInput[] | CompanyImageUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyImageCreateOrConnectWithoutCompanyInput | CompanyImageCreateOrConnectWithoutCompanyInput[]
    upsert?: CompanyImageUpsertWithWhereUniqueWithoutCompanyInput | CompanyImageUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CompanyImageCreateManyCompanyInputEnvelope
    set?: CompanyImageWhereUniqueInput | CompanyImageWhereUniqueInput[]
    disconnect?: CompanyImageWhereUniqueInput | CompanyImageWhereUniqueInput[]
    delete?: CompanyImageWhereUniqueInput | CompanyImageWhereUniqueInput[]
    connect?: CompanyImageWhereUniqueInput | CompanyImageWhereUniqueInput[]
    update?: CompanyImageUpdateWithWhereUniqueWithoutCompanyInput | CompanyImageUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CompanyImageUpdateManyWithWhereWithoutCompanyInput | CompanyImageUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CompanyImageScalarWhereInput | CompanyImageScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutImagesInput = {
    create?: XOR<CompanyCreateWithoutImagesInput, CompanyUncheckedCreateWithoutImagesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutImagesInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<CompanyCreateWithoutImagesInput, CompanyUncheckedCreateWithoutImagesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutImagesInput
    upsert?: CompanyUpsertWithoutImagesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutImagesInput, CompanyUpdateWithoutImagesInput>, CompanyUncheckedUpdateWithoutImagesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelFilter<$PrismaModel> | $Enums.Level
  }

  export type NestedEnumLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelWithAggregatesFilter<$PrismaModel> | $Enums.Level
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLevelFilter<$PrismaModel>
    _max?: NestedEnumLevelFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CandidateProfileCreateWithoutUserInput = {
    fullName: string
    gender: $Enums.Gender
    phone: string
    cv: string
    birthday: Date | string
    address: string
    openToWork?: boolean
    status?: boolean
    candidateLanguages?: CandidateLanguageCreateNestedManyWithoutCandidateProfileInput
    candidateEducations?: CandidateEducationCreateNestedManyWithoutCandidateProfileInput
    candidateExperiences?: CandidateExperienceCreateNestedManyWithoutCandidateProfileInput
  }

  export type CandidateProfileUncheckedCreateWithoutUserInput = {
    id?: number
    fullName: string
    gender: $Enums.Gender
    phone: string
    cv: string
    birthday: Date | string
    address: string
    openToWork?: boolean
    status?: boolean
    candidateLanguages?: CandidateLanguageUncheckedCreateNestedManyWithoutCandidateProfileInput
    candidateEducations?: CandidateEducationUncheckedCreateNestedManyWithoutCandidateProfileInput
    candidateExperiences?: CandidateExperienceUncheckedCreateNestedManyWithoutCandidateProfileInput
  }

  export type CandidateProfileCreateOrConnectWithoutUserInput = {
    where: CandidateProfileWhereUniqueInput
    create: XOR<CandidateProfileCreateWithoutUserInput, CandidateProfileUncheckedCreateWithoutUserInput>
  }

  export type CompanyCreateWithoutUserInput = {
    name: string
    description: string
    address: string
    teamSize: number
    estDate: Date | string
    views?: number
    websiteUrl?: string | null
    isApproved?: boolean
    mapLink?: string | null
    images?: CompanyImageCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    description: string
    address: string
    teamSize: number
    estDate: Date | string
    views?: number
    websiteUrl?: string | null
    isApproved?: boolean
    mapLink?: string | null
    images?: CompanyImageUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUserInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
  }

  export type CompanyCreateManyUserInputEnvelope = {
    data: CompanyCreateManyUserInput | CompanyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CandidateProfileUpsertWithoutUserInput = {
    update: XOR<CandidateProfileUpdateWithoutUserInput, CandidateProfileUncheckedUpdateWithoutUserInput>
    create: XOR<CandidateProfileCreateWithoutUserInput, CandidateProfileUncheckedCreateWithoutUserInput>
    where?: CandidateProfileWhereInput
  }

  export type CandidateProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: CandidateProfileWhereInput
    data: XOR<CandidateProfileUpdateWithoutUserInput, CandidateProfileUncheckedUpdateWithoutUserInput>
  }

  export type CandidateProfileUpdateWithoutUserInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    openToWork?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    candidateLanguages?: CandidateLanguageUpdateManyWithoutCandidateProfileNestedInput
    candidateEducations?: CandidateEducationUpdateManyWithoutCandidateProfileNestedInput
    candidateExperiences?: CandidateExperienceUpdateManyWithoutCandidateProfileNestedInput
  }

  export type CandidateProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    openToWork?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    candidateLanguages?: CandidateLanguageUncheckedUpdateManyWithoutCandidateProfileNestedInput
    candidateEducations?: CandidateEducationUncheckedUpdateManyWithoutCandidateProfileNestedInput
    candidateExperiences?: CandidateExperienceUncheckedUpdateManyWithoutCandidateProfileNestedInput
  }

  export type CompanyUpsertWithWhereUniqueWithoutUserInput = {
    where: CompanyWhereUniqueInput
    update: XOR<CompanyUpdateWithoutUserInput, CompanyUncheckedUpdateWithoutUserInput>
    create: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
  }

  export type CompanyUpdateWithWhereUniqueWithoutUserInput = {
    where: CompanyWhereUniqueInput
    data: XOR<CompanyUpdateWithoutUserInput, CompanyUncheckedUpdateWithoutUserInput>
  }

  export type CompanyUpdateManyWithWhereWithoutUserInput = {
    where: CompanyScalarWhereInput
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyWithoutUserInput>
  }

  export type CompanyScalarWhereInput = {
    AND?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
    OR?: CompanyScalarWhereInput[]
    NOT?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
    id?: IntFilter<"Company"> | number
    userId?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    description?: StringFilter<"Company"> | string
    address?: StringFilter<"Company"> | string
    teamSize?: IntFilter<"Company"> | number
    estDate?: DateTimeFilter<"Company"> | Date | string
    views?: IntFilter<"Company"> | number
    websiteUrl?: StringNullableFilter<"Company"> | string | null
    isApproved?: BoolFilter<"Company"> | boolean
    mapLink?: StringNullableFilter<"Company"> | string | null
  }

  export type UserCreateWithoutCandidateProfileInput = {
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    status?: boolean
    companies?: CompanyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCandidateProfileInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    status?: boolean
    companies?: CompanyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCandidateProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCandidateProfileInput, UserUncheckedCreateWithoutCandidateProfileInput>
  }

  export type CandidateLanguageCreateWithoutCandidateProfileInput = {
    level?: $Enums.Level
    language: LanguageCreateNestedOneWithoutCandidateLanguagesInput
  }

  export type CandidateLanguageUncheckedCreateWithoutCandidateProfileInput = {
    languageName: string
    level?: $Enums.Level
  }

  export type CandidateLanguageCreateOrConnectWithoutCandidateProfileInput = {
    where: CandidateLanguageWhereUniqueInput
    create: XOR<CandidateLanguageCreateWithoutCandidateProfileInput, CandidateLanguageUncheckedCreateWithoutCandidateProfileInput>
  }

  export type CandidateLanguageCreateManyCandidateProfileInputEnvelope = {
    data: CandidateLanguageCreateManyCandidateProfileInput | CandidateLanguageCreateManyCandidateProfileInput[]
    skipDuplicates?: boolean
  }

  export type CandidateEducationCreateWithoutCandidateProfileInput = {
    major: string
    degree: string
    yearStart: number
    yearEnd: number
    education: EducationCreateNestedOneWithoutCandidateEducationsInput
  }

  export type CandidateEducationUncheckedCreateWithoutCandidateProfileInput = {
    educationId: number
    major: string
    degree: string
    yearStart: number
    yearEnd: number
  }

  export type CandidateEducationCreateOrConnectWithoutCandidateProfileInput = {
    where: CandidateEducationWhereUniqueInput
    create: XOR<CandidateEducationCreateWithoutCandidateProfileInput, CandidateEducationUncheckedCreateWithoutCandidateProfileInput>
  }

  export type CandidateEducationCreateManyCandidateProfileInputEnvelope = {
    data: CandidateEducationCreateManyCandidateProfileInput | CandidateEducationCreateManyCandidateProfileInput[]
    skipDuplicates?: boolean
  }

  export type CandidateExperienceCreateWithoutCandidateProfileInput = {
    company: string
    department: string
    responsibilities: string
    startDate: Date | string
    endDate?: Date | string | null
    currentlyWorking?: boolean
  }

  export type CandidateExperienceUncheckedCreateWithoutCandidateProfileInput = {
    id?: number
    company: string
    department: string
    responsibilities: string
    startDate: Date | string
    endDate?: Date | string | null
    currentlyWorking?: boolean
  }

  export type CandidateExperienceCreateOrConnectWithoutCandidateProfileInput = {
    where: CandidateExperienceWhereUniqueInput
    create: XOR<CandidateExperienceCreateWithoutCandidateProfileInput, CandidateExperienceUncheckedCreateWithoutCandidateProfileInput>
  }

  export type CandidateExperienceCreateManyCandidateProfileInputEnvelope = {
    data: CandidateExperienceCreateManyCandidateProfileInput | CandidateExperienceCreateManyCandidateProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCandidateProfileInput = {
    update: XOR<UserUpdateWithoutCandidateProfileInput, UserUncheckedUpdateWithoutCandidateProfileInput>
    create: XOR<UserCreateWithoutCandidateProfileInput, UserUncheckedCreateWithoutCandidateProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCandidateProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCandidateProfileInput, UserUncheckedUpdateWithoutCandidateProfileInput>
  }

  export type UserUpdateWithoutCandidateProfileInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: BoolFieldUpdateOperationsInput | boolean
    companies?: CompanyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCandidateProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: BoolFieldUpdateOperationsInput | boolean
    companies?: CompanyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CandidateLanguageUpsertWithWhereUniqueWithoutCandidateProfileInput = {
    where: CandidateLanguageWhereUniqueInput
    update: XOR<CandidateLanguageUpdateWithoutCandidateProfileInput, CandidateLanguageUncheckedUpdateWithoutCandidateProfileInput>
    create: XOR<CandidateLanguageCreateWithoutCandidateProfileInput, CandidateLanguageUncheckedCreateWithoutCandidateProfileInput>
  }

  export type CandidateLanguageUpdateWithWhereUniqueWithoutCandidateProfileInput = {
    where: CandidateLanguageWhereUniqueInput
    data: XOR<CandidateLanguageUpdateWithoutCandidateProfileInput, CandidateLanguageUncheckedUpdateWithoutCandidateProfileInput>
  }

  export type CandidateLanguageUpdateManyWithWhereWithoutCandidateProfileInput = {
    where: CandidateLanguageScalarWhereInput
    data: XOR<CandidateLanguageUpdateManyMutationInput, CandidateLanguageUncheckedUpdateManyWithoutCandidateProfileInput>
  }

  export type CandidateLanguageScalarWhereInput = {
    AND?: CandidateLanguageScalarWhereInput | CandidateLanguageScalarWhereInput[]
    OR?: CandidateLanguageScalarWhereInput[]
    NOT?: CandidateLanguageScalarWhereInput | CandidateLanguageScalarWhereInput[]
    candidateProfileId?: IntFilter<"CandidateLanguage"> | number
    languageName?: StringFilter<"CandidateLanguage"> | string
    level?: EnumLevelFilter<"CandidateLanguage"> | $Enums.Level
  }

  export type CandidateEducationUpsertWithWhereUniqueWithoutCandidateProfileInput = {
    where: CandidateEducationWhereUniqueInput
    update: XOR<CandidateEducationUpdateWithoutCandidateProfileInput, CandidateEducationUncheckedUpdateWithoutCandidateProfileInput>
    create: XOR<CandidateEducationCreateWithoutCandidateProfileInput, CandidateEducationUncheckedCreateWithoutCandidateProfileInput>
  }

  export type CandidateEducationUpdateWithWhereUniqueWithoutCandidateProfileInput = {
    where: CandidateEducationWhereUniqueInput
    data: XOR<CandidateEducationUpdateWithoutCandidateProfileInput, CandidateEducationUncheckedUpdateWithoutCandidateProfileInput>
  }

  export type CandidateEducationUpdateManyWithWhereWithoutCandidateProfileInput = {
    where: CandidateEducationScalarWhereInput
    data: XOR<CandidateEducationUpdateManyMutationInput, CandidateEducationUncheckedUpdateManyWithoutCandidateProfileInput>
  }

  export type CandidateEducationScalarWhereInput = {
    AND?: CandidateEducationScalarWhereInput | CandidateEducationScalarWhereInput[]
    OR?: CandidateEducationScalarWhereInput[]
    NOT?: CandidateEducationScalarWhereInput | CandidateEducationScalarWhereInput[]
    candidateProfileId?: IntFilter<"CandidateEducation"> | number
    educationId?: IntFilter<"CandidateEducation"> | number
    major?: StringFilter<"CandidateEducation"> | string
    degree?: StringFilter<"CandidateEducation"> | string
    yearStart?: IntFilter<"CandidateEducation"> | number
    yearEnd?: IntFilter<"CandidateEducation"> | number
  }

  export type CandidateExperienceUpsertWithWhereUniqueWithoutCandidateProfileInput = {
    where: CandidateExperienceWhereUniqueInput
    update: XOR<CandidateExperienceUpdateWithoutCandidateProfileInput, CandidateExperienceUncheckedUpdateWithoutCandidateProfileInput>
    create: XOR<CandidateExperienceCreateWithoutCandidateProfileInput, CandidateExperienceUncheckedCreateWithoutCandidateProfileInput>
  }

  export type CandidateExperienceUpdateWithWhereUniqueWithoutCandidateProfileInput = {
    where: CandidateExperienceWhereUniqueInput
    data: XOR<CandidateExperienceUpdateWithoutCandidateProfileInput, CandidateExperienceUncheckedUpdateWithoutCandidateProfileInput>
  }

  export type CandidateExperienceUpdateManyWithWhereWithoutCandidateProfileInput = {
    where: CandidateExperienceScalarWhereInput
    data: XOR<CandidateExperienceUpdateManyMutationInput, CandidateExperienceUncheckedUpdateManyWithoutCandidateProfileInput>
  }

  export type CandidateExperienceScalarWhereInput = {
    AND?: CandidateExperienceScalarWhereInput | CandidateExperienceScalarWhereInput[]
    OR?: CandidateExperienceScalarWhereInput[]
    NOT?: CandidateExperienceScalarWhereInput | CandidateExperienceScalarWhereInput[]
    id?: IntFilter<"CandidateExperience"> | number
    candidateProfileId?: IntFilter<"CandidateExperience"> | number
    company?: StringFilter<"CandidateExperience"> | string
    department?: StringFilter<"CandidateExperience"> | string
    responsibilities?: StringFilter<"CandidateExperience"> | string
    startDate?: DateTimeFilter<"CandidateExperience"> | Date | string
    endDate?: DateTimeNullableFilter<"CandidateExperience"> | Date | string | null
    currentlyWorking?: BoolFilter<"CandidateExperience"> | boolean
  }

  export type CandidateLanguageCreateWithoutLanguageInput = {
    level?: $Enums.Level
    candidateProfile: CandidateProfileCreateNestedOneWithoutCandidateLanguagesInput
  }

  export type CandidateLanguageUncheckedCreateWithoutLanguageInput = {
    candidateProfileId: number
    level?: $Enums.Level
  }

  export type CandidateLanguageCreateOrConnectWithoutLanguageInput = {
    where: CandidateLanguageWhereUniqueInput
    create: XOR<CandidateLanguageCreateWithoutLanguageInput, CandidateLanguageUncheckedCreateWithoutLanguageInput>
  }

  export type CandidateLanguageCreateManyLanguageInputEnvelope = {
    data: CandidateLanguageCreateManyLanguageInput | CandidateLanguageCreateManyLanguageInput[]
    skipDuplicates?: boolean
  }

  export type CandidateLanguageUpsertWithWhereUniqueWithoutLanguageInput = {
    where: CandidateLanguageWhereUniqueInput
    update: XOR<CandidateLanguageUpdateWithoutLanguageInput, CandidateLanguageUncheckedUpdateWithoutLanguageInput>
    create: XOR<CandidateLanguageCreateWithoutLanguageInput, CandidateLanguageUncheckedCreateWithoutLanguageInput>
  }

  export type CandidateLanguageUpdateWithWhereUniqueWithoutLanguageInput = {
    where: CandidateLanguageWhereUniqueInput
    data: XOR<CandidateLanguageUpdateWithoutLanguageInput, CandidateLanguageUncheckedUpdateWithoutLanguageInput>
  }

  export type CandidateLanguageUpdateManyWithWhereWithoutLanguageInput = {
    where: CandidateLanguageScalarWhereInput
    data: XOR<CandidateLanguageUpdateManyMutationInput, CandidateLanguageUncheckedUpdateManyWithoutLanguageInput>
  }

  export type CandidateProfileCreateWithoutCandidateLanguagesInput = {
    fullName: string
    gender: $Enums.Gender
    phone: string
    cv: string
    birthday: Date | string
    address: string
    openToWork?: boolean
    status?: boolean
    user: UserCreateNestedOneWithoutCandidateProfileInput
    candidateEducations?: CandidateEducationCreateNestedManyWithoutCandidateProfileInput
    candidateExperiences?: CandidateExperienceCreateNestedManyWithoutCandidateProfileInput
  }

  export type CandidateProfileUncheckedCreateWithoutCandidateLanguagesInput = {
    id?: number
    userId: number
    fullName: string
    gender: $Enums.Gender
    phone: string
    cv: string
    birthday: Date | string
    address: string
    openToWork?: boolean
    status?: boolean
    candidateEducations?: CandidateEducationUncheckedCreateNestedManyWithoutCandidateProfileInput
    candidateExperiences?: CandidateExperienceUncheckedCreateNestedManyWithoutCandidateProfileInput
  }

  export type CandidateProfileCreateOrConnectWithoutCandidateLanguagesInput = {
    where: CandidateProfileWhereUniqueInput
    create: XOR<CandidateProfileCreateWithoutCandidateLanguagesInput, CandidateProfileUncheckedCreateWithoutCandidateLanguagesInput>
  }

  export type LanguageCreateWithoutCandidateLanguagesInput = {
    name: string
  }

  export type LanguageUncheckedCreateWithoutCandidateLanguagesInput = {
    name: string
  }

  export type LanguageCreateOrConnectWithoutCandidateLanguagesInput = {
    where: LanguageWhereUniqueInput
    create: XOR<LanguageCreateWithoutCandidateLanguagesInput, LanguageUncheckedCreateWithoutCandidateLanguagesInput>
  }

  export type CandidateProfileUpsertWithoutCandidateLanguagesInput = {
    update: XOR<CandidateProfileUpdateWithoutCandidateLanguagesInput, CandidateProfileUncheckedUpdateWithoutCandidateLanguagesInput>
    create: XOR<CandidateProfileCreateWithoutCandidateLanguagesInput, CandidateProfileUncheckedCreateWithoutCandidateLanguagesInput>
    where?: CandidateProfileWhereInput
  }

  export type CandidateProfileUpdateToOneWithWhereWithoutCandidateLanguagesInput = {
    where?: CandidateProfileWhereInput
    data: XOR<CandidateProfileUpdateWithoutCandidateLanguagesInput, CandidateProfileUncheckedUpdateWithoutCandidateLanguagesInput>
  }

  export type CandidateProfileUpdateWithoutCandidateLanguagesInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    openToWork?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCandidateProfileNestedInput
    candidateEducations?: CandidateEducationUpdateManyWithoutCandidateProfileNestedInput
    candidateExperiences?: CandidateExperienceUpdateManyWithoutCandidateProfileNestedInput
  }

  export type CandidateProfileUncheckedUpdateWithoutCandidateLanguagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    openToWork?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    candidateEducations?: CandidateEducationUncheckedUpdateManyWithoutCandidateProfileNestedInput
    candidateExperiences?: CandidateExperienceUncheckedUpdateManyWithoutCandidateProfileNestedInput
  }

  export type LanguageUpsertWithoutCandidateLanguagesInput = {
    update: XOR<LanguageUpdateWithoutCandidateLanguagesInput, LanguageUncheckedUpdateWithoutCandidateLanguagesInput>
    create: XOR<LanguageCreateWithoutCandidateLanguagesInput, LanguageUncheckedCreateWithoutCandidateLanguagesInput>
    where?: LanguageWhereInput
  }

  export type LanguageUpdateToOneWithWhereWithoutCandidateLanguagesInput = {
    where?: LanguageWhereInput
    data: XOR<LanguageUpdateWithoutCandidateLanguagesInput, LanguageUncheckedUpdateWithoutCandidateLanguagesInput>
  }

  export type LanguageUpdateWithoutCandidateLanguagesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LanguageUncheckedUpdateWithoutCandidateLanguagesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CandidateEducationCreateWithoutEducationInput = {
    major: string
    degree: string
    yearStart: number
    yearEnd: number
    candidateProfile: CandidateProfileCreateNestedOneWithoutCandidateEducationsInput
  }

  export type CandidateEducationUncheckedCreateWithoutEducationInput = {
    candidateProfileId: number
    major: string
    degree: string
    yearStart: number
    yearEnd: number
  }

  export type CandidateEducationCreateOrConnectWithoutEducationInput = {
    where: CandidateEducationWhereUniqueInput
    create: XOR<CandidateEducationCreateWithoutEducationInput, CandidateEducationUncheckedCreateWithoutEducationInput>
  }

  export type CandidateEducationCreateManyEducationInputEnvelope = {
    data: CandidateEducationCreateManyEducationInput | CandidateEducationCreateManyEducationInput[]
    skipDuplicates?: boolean
  }

  export type CandidateEducationUpsertWithWhereUniqueWithoutEducationInput = {
    where: CandidateEducationWhereUniqueInput
    update: XOR<CandidateEducationUpdateWithoutEducationInput, CandidateEducationUncheckedUpdateWithoutEducationInput>
    create: XOR<CandidateEducationCreateWithoutEducationInput, CandidateEducationUncheckedCreateWithoutEducationInput>
  }

  export type CandidateEducationUpdateWithWhereUniqueWithoutEducationInput = {
    where: CandidateEducationWhereUniqueInput
    data: XOR<CandidateEducationUpdateWithoutEducationInput, CandidateEducationUncheckedUpdateWithoutEducationInput>
  }

  export type CandidateEducationUpdateManyWithWhereWithoutEducationInput = {
    where: CandidateEducationScalarWhereInput
    data: XOR<CandidateEducationUpdateManyMutationInput, CandidateEducationUncheckedUpdateManyWithoutEducationInput>
  }

  export type CandidateProfileCreateWithoutCandidateEducationsInput = {
    fullName: string
    gender: $Enums.Gender
    phone: string
    cv: string
    birthday: Date | string
    address: string
    openToWork?: boolean
    status?: boolean
    user: UserCreateNestedOneWithoutCandidateProfileInput
    candidateLanguages?: CandidateLanguageCreateNestedManyWithoutCandidateProfileInput
    candidateExperiences?: CandidateExperienceCreateNestedManyWithoutCandidateProfileInput
  }

  export type CandidateProfileUncheckedCreateWithoutCandidateEducationsInput = {
    id?: number
    userId: number
    fullName: string
    gender: $Enums.Gender
    phone: string
    cv: string
    birthday: Date | string
    address: string
    openToWork?: boolean
    status?: boolean
    candidateLanguages?: CandidateLanguageUncheckedCreateNestedManyWithoutCandidateProfileInput
    candidateExperiences?: CandidateExperienceUncheckedCreateNestedManyWithoutCandidateProfileInput
  }

  export type CandidateProfileCreateOrConnectWithoutCandidateEducationsInput = {
    where: CandidateProfileWhereUniqueInput
    create: XOR<CandidateProfileCreateWithoutCandidateEducationsInput, CandidateProfileUncheckedCreateWithoutCandidateEducationsInput>
  }

  export type EducationCreateWithoutCandidateEducationsInput = {
    name: string
    map: string
    slug: string
  }

  export type EducationUncheckedCreateWithoutCandidateEducationsInput = {
    id?: number
    name: string
    map: string
    slug: string
  }

  export type EducationCreateOrConnectWithoutCandidateEducationsInput = {
    where: EducationWhereUniqueInput
    create: XOR<EducationCreateWithoutCandidateEducationsInput, EducationUncheckedCreateWithoutCandidateEducationsInput>
  }

  export type CandidateProfileUpsertWithoutCandidateEducationsInput = {
    update: XOR<CandidateProfileUpdateWithoutCandidateEducationsInput, CandidateProfileUncheckedUpdateWithoutCandidateEducationsInput>
    create: XOR<CandidateProfileCreateWithoutCandidateEducationsInput, CandidateProfileUncheckedCreateWithoutCandidateEducationsInput>
    where?: CandidateProfileWhereInput
  }

  export type CandidateProfileUpdateToOneWithWhereWithoutCandidateEducationsInput = {
    where?: CandidateProfileWhereInput
    data: XOR<CandidateProfileUpdateWithoutCandidateEducationsInput, CandidateProfileUncheckedUpdateWithoutCandidateEducationsInput>
  }

  export type CandidateProfileUpdateWithoutCandidateEducationsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    openToWork?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCandidateProfileNestedInput
    candidateLanguages?: CandidateLanguageUpdateManyWithoutCandidateProfileNestedInput
    candidateExperiences?: CandidateExperienceUpdateManyWithoutCandidateProfileNestedInput
  }

  export type CandidateProfileUncheckedUpdateWithoutCandidateEducationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    openToWork?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    candidateLanguages?: CandidateLanguageUncheckedUpdateManyWithoutCandidateProfileNestedInput
    candidateExperiences?: CandidateExperienceUncheckedUpdateManyWithoutCandidateProfileNestedInput
  }

  export type EducationUpsertWithoutCandidateEducationsInput = {
    update: XOR<EducationUpdateWithoutCandidateEducationsInput, EducationUncheckedUpdateWithoutCandidateEducationsInput>
    create: XOR<EducationCreateWithoutCandidateEducationsInput, EducationUncheckedCreateWithoutCandidateEducationsInput>
    where?: EducationWhereInput
  }

  export type EducationUpdateToOneWithWhereWithoutCandidateEducationsInput = {
    where?: EducationWhereInput
    data: XOR<EducationUpdateWithoutCandidateEducationsInput, EducationUncheckedUpdateWithoutCandidateEducationsInput>
  }

  export type EducationUpdateWithoutCandidateEducationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    map?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type EducationUncheckedUpdateWithoutCandidateEducationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    map?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type CandidateProfileCreateWithoutCandidateExperiencesInput = {
    fullName: string
    gender: $Enums.Gender
    phone: string
    cv: string
    birthday: Date | string
    address: string
    openToWork?: boolean
    status?: boolean
    user: UserCreateNestedOneWithoutCandidateProfileInput
    candidateLanguages?: CandidateLanguageCreateNestedManyWithoutCandidateProfileInput
    candidateEducations?: CandidateEducationCreateNestedManyWithoutCandidateProfileInput
  }

  export type CandidateProfileUncheckedCreateWithoutCandidateExperiencesInput = {
    id?: number
    userId: number
    fullName: string
    gender: $Enums.Gender
    phone: string
    cv: string
    birthday: Date | string
    address: string
    openToWork?: boolean
    status?: boolean
    candidateLanguages?: CandidateLanguageUncheckedCreateNestedManyWithoutCandidateProfileInput
    candidateEducations?: CandidateEducationUncheckedCreateNestedManyWithoutCandidateProfileInput
  }

  export type CandidateProfileCreateOrConnectWithoutCandidateExperiencesInput = {
    where: CandidateProfileWhereUniqueInput
    create: XOR<CandidateProfileCreateWithoutCandidateExperiencesInput, CandidateProfileUncheckedCreateWithoutCandidateExperiencesInput>
  }

  export type CandidateProfileUpsertWithoutCandidateExperiencesInput = {
    update: XOR<CandidateProfileUpdateWithoutCandidateExperiencesInput, CandidateProfileUncheckedUpdateWithoutCandidateExperiencesInput>
    create: XOR<CandidateProfileCreateWithoutCandidateExperiencesInput, CandidateProfileUncheckedCreateWithoutCandidateExperiencesInput>
    where?: CandidateProfileWhereInput
  }

  export type CandidateProfileUpdateToOneWithWhereWithoutCandidateExperiencesInput = {
    where?: CandidateProfileWhereInput
    data: XOR<CandidateProfileUpdateWithoutCandidateExperiencesInput, CandidateProfileUncheckedUpdateWithoutCandidateExperiencesInput>
  }

  export type CandidateProfileUpdateWithoutCandidateExperiencesInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    openToWork?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCandidateProfileNestedInput
    candidateLanguages?: CandidateLanguageUpdateManyWithoutCandidateProfileNestedInput
    candidateEducations?: CandidateEducationUpdateManyWithoutCandidateProfileNestedInput
  }

  export type CandidateProfileUncheckedUpdateWithoutCandidateExperiencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    openToWork?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    candidateLanguages?: CandidateLanguageUncheckedUpdateManyWithoutCandidateProfileNestedInput
    candidateEducations?: CandidateEducationUncheckedUpdateManyWithoutCandidateProfileNestedInput
  }

  export type UserCreateWithoutCompaniesInput = {
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    status?: boolean
    candidateProfile?: CandidateProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompaniesInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    status?: boolean
    candidateProfile?: CandidateProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompaniesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompaniesInput, UserUncheckedCreateWithoutCompaniesInput>
  }

  export type CompanyImageCreateWithoutCompanyInput = {
    imageUrl: string
  }

  export type CompanyImageUncheckedCreateWithoutCompanyInput = {
    id?: number
    imageUrl: string
  }

  export type CompanyImageCreateOrConnectWithoutCompanyInput = {
    where: CompanyImageWhereUniqueInput
    create: XOR<CompanyImageCreateWithoutCompanyInput, CompanyImageUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyImageCreateManyCompanyInputEnvelope = {
    data: CompanyImageCreateManyCompanyInput | CompanyImageCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCompaniesInput = {
    update: XOR<UserUpdateWithoutCompaniesInput, UserUncheckedUpdateWithoutCompaniesInput>
    create: XOR<UserCreateWithoutCompaniesInput, UserUncheckedCreateWithoutCompaniesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompaniesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompaniesInput, UserUncheckedUpdateWithoutCompaniesInput>
  }

  export type UserUpdateWithoutCompaniesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: BoolFieldUpdateOperationsInput | boolean
    candidateProfile?: CandidateProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompaniesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: BoolFieldUpdateOperationsInput | boolean
    candidateProfile?: CandidateProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CompanyImageUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CompanyImageWhereUniqueInput
    update: XOR<CompanyImageUpdateWithoutCompanyInput, CompanyImageUncheckedUpdateWithoutCompanyInput>
    create: XOR<CompanyImageCreateWithoutCompanyInput, CompanyImageUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyImageUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CompanyImageWhereUniqueInput
    data: XOR<CompanyImageUpdateWithoutCompanyInput, CompanyImageUncheckedUpdateWithoutCompanyInput>
  }

  export type CompanyImageUpdateManyWithWhereWithoutCompanyInput = {
    where: CompanyImageScalarWhereInput
    data: XOR<CompanyImageUpdateManyMutationInput, CompanyImageUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CompanyImageScalarWhereInput = {
    AND?: CompanyImageScalarWhereInput | CompanyImageScalarWhereInput[]
    OR?: CompanyImageScalarWhereInput[]
    NOT?: CompanyImageScalarWhereInput | CompanyImageScalarWhereInput[]
    id?: IntFilter<"CompanyImage"> | number
    companyId?: IntFilter<"CompanyImage"> | number
    imageUrl?: StringFilter<"CompanyImage"> | string
  }

  export type CompanyCreateWithoutImagesInput = {
    name: string
    description: string
    address: string
    teamSize: number
    estDate: Date | string
    views?: number
    websiteUrl?: string | null
    isApproved?: boolean
    mapLink?: string | null
    user: UserCreateNestedOneWithoutCompaniesInput
  }

  export type CompanyUncheckedCreateWithoutImagesInput = {
    id?: number
    userId: number
    name: string
    description: string
    address: string
    teamSize: number
    estDate: Date | string
    views?: number
    websiteUrl?: string | null
    isApproved?: boolean
    mapLink?: string | null
  }

  export type CompanyCreateOrConnectWithoutImagesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutImagesInput, CompanyUncheckedCreateWithoutImagesInput>
  }

  export type CompanyUpsertWithoutImagesInput = {
    update: XOR<CompanyUpdateWithoutImagesInput, CompanyUncheckedUpdateWithoutImagesInput>
    create: XOR<CompanyCreateWithoutImagesInput, CompanyUncheckedCreateWithoutImagesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutImagesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutImagesInput, CompanyUncheckedUpdateWithoutImagesInput>
  }

  export type CompanyUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    teamSize?: IntFieldUpdateOperationsInput | number
    estDate?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    mapLink?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCompaniesNestedInput
  }

  export type CompanyUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    teamSize?: IntFieldUpdateOperationsInput | number
    estDate?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    mapLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyCreateManyUserInput = {
    id?: number
    name: string
    description: string
    address: string
    teamSize: number
    estDate: Date | string
    views?: number
    websiteUrl?: string | null
    isApproved?: boolean
    mapLink?: string | null
  }

  export type CompanyUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    teamSize?: IntFieldUpdateOperationsInput | number
    estDate?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    mapLink?: NullableStringFieldUpdateOperationsInput | string | null
    images?: CompanyImageUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    teamSize?: IntFieldUpdateOperationsInput | number
    estDate?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    mapLink?: NullableStringFieldUpdateOperationsInput | string | null
    images?: CompanyImageUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    teamSize?: IntFieldUpdateOperationsInput | number
    estDate?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    mapLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CandidateLanguageCreateManyCandidateProfileInput = {
    languageName: string
    level?: $Enums.Level
  }

  export type CandidateEducationCreateManyCandidateProfileInput = {
    educationId: number
    major: string
    degree: string
    yearStart: number
    yearEnd: number
  }

  export type CandidateExperienceCreateManyCandidateProfileInput = {
    id?: number
    company: string
    department: string
    responsibilities: string
    startDate: Date | string
    endDate?: Date | string | null
    currentlyWorking?: boolean
  }

  export type CandidateLanguageUpdateWithoutCandidateProfileInput = {
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    language?: LanguageUpdateOneRequiredWithoutCandidateLanguagesNestedInput
  }

  export type CandidateLanguageUncheckedUpdateWithoutCandidateProfileInput = {
    languageName?: StringFieldUpdateOperationsInput | string
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
  }

  export type CandidateLanguageUncheckedUpdateManyWithoutCandidateProfileInput = {
    languageName?: StringFieldUpdateOperationsInput | string
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
  }

  export type CandidateEducationUpdateWithoutCandidateProfileInput = {
    major?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    yearStart?: IntFieldUpdateOperationsInput | number
    yearEnd?: IntFieldUpdateOperationsInput | number
    education?: EducationUpdateOneRequiredWithoutCandidateEducationsNestedInput
  }

  export type CandidateEducationUncheckedUpdateWithoutCandidateProfileInput = {
    educationId?: IntFieldUpdateOperationsInput | number
    major?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    yearStart?: IntFieldUpdateOperationsInput | number
    yearEnd?: IntFieldUpdateOperationsInput | number
  }

  export type CandidateEducationUncheckedUpdateManyWithoutCandidateProfileInput = {
    educationId?: IntFieldUpdateOperationsInput | number
    major?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    yearStart?: IntFieldUpdateOperationsInput | number
    yearEnd?: IntFieldUpdateOperationsInput | number
  }

  export type CandidateExperienceUpdateWithoutCandidateProfileInput = {
    company?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    responsibilities?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentlyWorking?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CandidateExperienceUncheckedUpdateWithoutCandidateProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    company?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    responsibilities?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentlyWorking?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CandidateExperienceUncheckedUpdateManyWithoutCandidateProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    company?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    responsibilities?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentlyWorking?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CandidateLanguageCreateManyLanguageInput = {
    candidateProfileId: number
    level?: $Enums.Level
  }

  export type CandidateLanguageUpdateWithoutLanguageInput = {
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    candidateProfile?: CandidateProfileUpdateOneRequiredWithoutCandidateLanguagesNestedInput
  }

  export type CandidateLanguageUncheckedUpdateWithoutLanguageInput = {
    candidateProfileId?: IntFieldUpdateOperationsInput | number
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
  }

  export type CandidateLanguageUncheckedUpdateManyWithoutLanguageInput = {
    candidateProfileId?: IntFieldUpdateOperationsInput | number
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
  }

  export type CandidateEducationCreateManyEducationInput = {
    candidateProfileId: number
    major: string
    degree: string
    yearStart: number
    yearEnd: number
  }

  export type CandidateEducationUpdateWithoutEducationInput = {
    major?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    yearStart?: IntFieldUpdateOperationsInput | number
    yearEnd?: IntFieldUpdateOperationsInput | number
    candidateProfile?: CandidateProfileUpdateOneRequiredWithoutCandidateEducationsNestedInput
  }

  export type CandidateEducationUncheckedUpdateWithoutEducationInput = {
    candidateProfileId?: IntFieldUpdateOperationsInput | number
    major?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    yearStart?: IntFieldUpdateOperationsInput | number
    yearEnd?: IntFieldUpdateOperationsInput | number
  }

  export type CandidateEducationUncheckedUpdateManyWithoutEducationInput = {
    candidateProfileId?: IntFieldUpdateOperationsInput | number
    major?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    yearStart?: IntFieldUpdateOperationsInput | number
    yearEnd?: IntFieldUpdateOperationsInput | number
  }

  export type CompanyImageCreateManyCompanyInput = {
    id?: number
    imageUrl: string
  }

  export type CompanyImageUpdateWithoutCompanyInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyImageUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyImageUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}