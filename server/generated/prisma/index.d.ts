
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model client
 * 
 */
export type client = $Result.DefaultSelection<Prisma.$clientPayload>
/**
 * Model disputes
 * 
 */
export type disputes = $Result.DefaultSelection<Prisma.$disputesPayload>
/**
 * Model freelancer
 * 
 */
export type freelancer = $Result.DefaultSelection<Prisma.$freelancerPayload>
/**
 * Model jobposted
 * 
 */
export type jobposted = $Result.DefaultSelection<Prisma.$jobpostedPayload>
/**
 * Model message
 * 
 */
export type message = $Result.DefaultSelection<Prisma.$messagePayload>
/**
 * Model milestones
 * 
 */
export type milestones = $Result.DefaultSelection<Prisma.$milestonesPayload>
/**
 * Model nftcredential
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type nftcredential = $Result.DefaultSelection<Prisma.$nftcredentialPayload>
/**
 * Model paymentsescrow
 * 
 */
export type paymentsescrow = $Result.DefaultSelection<Prisma.$paymentsescrowPayload>
/**
 * Model proposals
 * 
 */
export type proposals = $Result.DefaultSelection<Prisma.$proposalsPayload>
/**
 * Model smartcontract
 * 
 */
export type smartcontract = $Result.DefaultSelection<Prisma.$smartcontractPayload>
/**
 * Model staking
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type staking = $Result.DefaultSelection<Prisma.$stakingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const dispute_status: {
  open: 'open',
  under_review: 'under_review',
  resolved: 'resolved',
  rejected: 'rejected'
};

export type dispute_status = (typeof dispute_status)[keyof typeof dispute_status]


export const message_type: {
  text: 'text',
  file: 'file',
  system: 'system'
};

export type message_type = (typeof message_type)[keyof typeof message_type]


export const milestone_status: {
  pending: 'pending',
  in_progress: 'in_progress',
  completed: 'completed',
  approved: 'approved',
  disputed: 'disputed'
};

export type milestone_status = (typeof milestone_status)[keyof typeof milestone_status]


export const payment_method: {
  Crypto: 'Crypto',
  Stripe: 'Stripe',
  Wallet: 'Wallet',
  BankTransfer: 'BankTransfer'
};

export type payment_method = (typeof payment_method)[keyof typeof payment_method]


export const payment_status: {
  pending: 'pending',
  completed: 'completed',
  failed: 'failed',
  refunded: 'refunded'
};

export type payment_status = (typeof payment_status)[keyof typeof payment_status]


export const payment_type: {
  milestone: 'milestone',
  full: 'full',
  partial: 'partial',
  refund: 'refund'
};

export type payment_type = (typeof payment_type)[keyof typeof payment_type]


export const proposal_status: {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected'
};

export type proposal_status = (typeof proposal_status)[keyof typeof proposal_status]


export const stake_purpose: {
  governance: 'governance',
  moderation: 'moderation',
  reputation: 'reputation'
};

export type stake_purpose = (typeof stake_purpose)[keyof typeof stake_purpose]

}

export type dispute_status = $Enums.dispute_status

export const dispute_status: typeof $Enums.dispute_status

export type message_type = $Enums.message_type

export const message_type: typeof $Enums.message_type

export type milestone_status = $Enums.milestone_status

export const milestone_status: typeof $Enums.milestone_status

export type payment_method = $Enums.payment_method

export const payment_method: typeof $Enums.payment_method

export type payment_status = $Enums.payment_status

export const payment_status: typeof $Enums.payment_status

export type payment_type = $Enums.payment_type

export const payment_type: typeof $Enums.payment_type

export type proposal_status = $Enums.proposal_status

export const proposal_status: typeof $Enums.proposal_status

export type stake_purpose = $Enums.stake_purpose

export const stake_purpose: typeof $Enums.stake_purpose

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clients
 * const clients = await prisma.client.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Clients
   * const clients = await prisma.client.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.client`: Exposes CRUD operations for the **client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.clientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disputes`: Exposes CRUD operations for the **disputes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disputes
    * const disputes = await prisma.disputes.findMany()
    * ```
    */
  get disputes(): Prisma.disputesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.freelancer`: Exposes CRUD operations for the **freelancer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Freelancers
    * const freelancers = await prisma.freelancer.findMany()
    * ```
    */
  get freelancer(): Prisma.freelancerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobposted`: Exposes CRUD operations for the **jobposted** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobposteds
    * const jobposteds = await prisma.jobposted.findMany()
    * ```
    */
  get jobposted(): Prisma.jobpostedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.messageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.milestones`: Exposes CRUD operations for the **milestones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Milestones
    * const milestones = await prisma.milestones.findMany()
    * ```
    */
  get milestones(): Prisma.milestonesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nftcredential`: Exposes CRUD operations for the **nftcredential** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nftcredentials
    * const nftcredentials = await prisma.nftcredential.findMany()
    * ```
    */
  get nftcredential(): Prisma.nftcredentialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentsescrow`: Exposes CRUD operations for the **paymentsescrow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Paymentsescrows
    * const paymentsescrows = await prisma.paymentsescrow.findMany()
    * ```
    */
  get paymentsescrow(): Prisma.paymentsescrowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proposals`: Exposes CRUD operations for the **proposals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proposals
    * const proposals = await prisma.proposals.findMany()
    * ```
    */
  get proposals(): Prisma.proposalsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.smartcontract`: Exposes CRUD operations for the **smartcontract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Smartcontracts
    * const smartcontracts = await prisma.smartcontract.findMany()
    * ```
    */
  get smartcontract(): Prisma.smartcontractDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staking`: Exposes CRUD operations for the **staking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stakings
    * const stakings = await prisma.staking.findMany()
    * ```
    */
  get staking(): Prisma.stakingDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    client: 'client',
    disputes: 'disputes',
    freelancer: 'freelancer',
    jobposted: 'jobposted',
    message: 'message',
    milestones: 'milestones',
    nftcredential: 'nftcredential',
    paymentsescrow: 'paymentsescrow',
    proposals: 'proposals',
    smartcontract: 'smartcontract',
    staking: 'staking'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "client" | "disputes" | "freelancer" | "jobposted" | "message" | "milestones" | "nftcredential" | "paymentsescrow" | "proposals" | "smartcontract" | "staking"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      client: {
        payload: Prisma.$clientPayload<ExtArgs>
        fields: Prisma.clientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          findFirst: {
            args: Prisma.clientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          findMany: {
            args: Prisma.clientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>[]
          }
          create: {
            args: Prisma.clientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          createMany: {
            args: Prisma.clientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>[]
          }
          delete: {
            args: Prisma.clientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          update: {
            args: Prisma.clientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          deleteMany: {
            args: Prisma.clientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.clientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>[]
          }
          upsert: {
            args: Prisma.clientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.clientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.clientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      disputes: {
        payload: Prisma.$disputesPayload<ExtArgs>
        fields: Prisma.disputesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.disputesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disputesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.disputesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disputesPayload>
          }
          findFirst: {
            args: Prisma.disputesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disputesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.disputesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disputesPayload>
          }
          findMany: {
            args: Prisma.disputesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disputesPayload>[]
          }
          create: {
            args: Prisma.disputesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disputesPayload>
          }
          createMany: {
            args: Prisma.disputesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.disputesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disputesPayload>[]
          }
          delete: {
            args: Prisma.disputesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disputesPayload>
          }
          update: {
            args: Prisma.disputesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disputesPayload>
          }
          deleteMany: {
            args: Prisma.disputesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.disputesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.disputesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disputesPayload>[]
          }
          upsert: {
            args: Prisma.disputesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disputesPayload>
          }
          aggregate: {
            args: Prisma.DisputesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisputes>
          }
          groupBy: {
            args: Prisma.disputesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisputesGroupByOutputType>[]
          }
          count: {
            args: Prisma.disputesCountArgs<ExtArgs>
            result: $Utils.Optional<DisputesCountAggregateOutputType> | number
          }
        }
      }
      freelancer: {
        payload: Prisma.$freelancerPayload<ExtArgs>
        fields: Prisma.freelancerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.freelancerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.freelancerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload>
          }
          findFirst: {
            args: Prisma.freelancerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.freelancerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload>
          }
          findMany: {
            args: Prisma.freelancerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload>[]
          }
          create: {
            args: Prisma.freelancerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload>
          }
          createMany: {
            args: Prisma.freelancerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.freelancerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload>[]
          }
          delete: {
            args: Prisma.freelancerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload>
          }
          update: {
            args: Prisma.freelancerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload>
          }
          deleteMany: {
            args: Prisma.freelancerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.freelancerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.freelancerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload>[]
          }
          upsert: {
            args: Prisma.freelancerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload>
          }
          aggregate: {
            args: Prisma.FreelancerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFreelancer>
          }
          groupBy: {
            args: Prisma.freelancerGroupByArgs<ExtArgs>
            result: $Utils.Optional<FreelancerGroupByOutputType>[]
          }
          count: {
            args: Prisma.freelancerCountArgs<ExtArgs>
            result: $Utils.Optional<FreelancerCountAggregateOutputType> | number
          }
        }
      }
      jobposted: {
        payload: Prisma.$jobpostedPayload<ExtArgs>
        fields: Prisma.jobpostedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jobpostedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobpostedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jobpostedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobpostedPayload>
          }
          findFirst: {
            args: Prisma.jobpostedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobpostedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jobpostedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobpostedPayload>
          }
          findMany: {
            args: Prisma.jobpostedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobpostedPayload>[]
          }
          create: {
            args: Prisma.jobpostedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobpostedPayload>
          }
          createMany: {
            args: Prisma.jobpostedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.jobpostedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobpostedPayload>[]
          }
          delete: {
            args: Prisma.jobpostedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobpostedPayload>
          }
          update: {
            args: Prisma.jobpostedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobpostedPayload>
          }
          deleteMany: {
            args: Prisma.jobpostedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.jobpostedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.jobpostedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobpostedPayload>[]
          }
          upsert: {
            args: Prisma.jobpostedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobpostedPayload>
          }
          aggregate: {
            args: Prisma.JobpostedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobposted>
          }
          groupBy: {
            args: Prisma.jobpostedGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobpostedGroupByOutputType>[]
          }
          count: {
            args: Prisma.jobpostedCountArgs<ExtArgs>
            result: $Utils.Optional<JobpostedCountAggregateOutputType> | number
          }
        }
      }
      message: {
        payload: Prisma.$messagePayload<ExtArgs>
        fields: Prisma.messageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          findFirst: {
            args: Prisma.messageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          findMany: {
            args: Prisma.messageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>[]
          }
          create: {
            args: Prisma.messageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          createMany: {
            args: Prisma.messageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.messageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>[]
          }
          delete: {
            args: Prisma.messageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          update: {
            args: Prisma.messageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          deleteMany: {
            args: Prisma.messageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.messageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>[]
          }
          upsert: {
            args: Prisma.messageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.messageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.messageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      milestones: {
        payload: Prisma.$milestonesPayload<ExtArgs>
        fields: Prisma.milestonesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.milestonesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$milestonesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.milestonesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$milestonesPayload>
          }
          findFirst: {
            args: Prisma.milestonesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$milestonesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.milestonesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$milestonesPayload>
          }
          findMany: {
            args: Prisma.milestonesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$milestonesPayload>[]
          }
          create: {
            args: Prisma.milestonesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$milestonesPayload>
          }
          createMany: {
            args: Prisma.milestonesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.milestonesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$milestonesPayload>[]
          }
          delete: {
            args: Prisma.milestonesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$milestonesPayload>
          }
          update: {
            args: Prisma.milestonesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$milestonesPayload>
          }
          deleteMany: {
            args: Prisma.milestonesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.milestonesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.milestonesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$milestonesPayload>[]
          }
          upsert: {
            args: Prisma.milestonesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$milestonesPayload>
          }
          aggregate: {
            args: Prisma.MilestonesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMilestones>
          }
          groupBy: {
            args: Prisma.milestonesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MilestonesGroupByOutputType>[]
          }
          count: {
            args: Prisma.milestonesCountArgs<ExtArgs>
            result: $Utils.Optional<MilestonesCountAggregateOutputType> | number
          }
        }
      }
      nftcredential: {
        payload: Prisma.$nftcredentialPayload<ExtArgs>
        fields: Prisma.nftcredentialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.nftcredentialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nftcredentialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.nftcredentialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nftcredentialPayload>
          }
          findFirst: {
            args: Prisma.nftcredentialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nftcredentialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.nftcredentialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nftcredentialPayload>
          }
          findMany: {
            args: Prisma.nftcredentialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nftcredentialPayload>[]
          }
          create: {
            args: Prisma.nftcredentialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nftcredentialPayload>
          }
          createMany: {
            args: Prisma.nftcredentialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.nftcredentialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nftcredentialPayload>[]
          }
          delete: {
            args: Prisma.nftcredentialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nftcredentialPayload>
          }
          update: {
            args: Prisma.nftcredentialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nftcredentialPayload>
          }
          deleteMany: {
            args: Prisma.nftcredentialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.nftcredentialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.nftcredentialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nftcredentialPayload>[]
          }
          upsert: {
            args: Prisma.nftcredentialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nftcredentialPayload>
          }
          aggregate: {
            args: Prisma.NftcredentialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNftcredential>
          }
          groupBy: {
            args: Prisma.nftcredentialGroupByArgs<ExtArgs>
            result: $Utils.Optional<NftcredentialGroupByOutputType>[]
          }
          count: {
            args: Prisma.nftcredentialCountArgs<ExtArgs>
            result: $Utils.Optional<NftcredentialCountAggregateOutputType> | number
          }
        }
      }
      paymentsescrow: {
        payload: Prisma.$paymentsescrowPayload<ExtArgs>
        fields: Prisma.paymentsescrowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentsescrowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsescrowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentsescrowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsescrowPayload>
          }
          findFirst: {
            args: Prisma.paymentsescrowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsescrowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentsescrowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsescrowPayload>
          }
          findMany: {
            args: Prisma.paymentsescrowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsescrowPayload>[]
          }
          create: {
            args: Prisma.paymentsescrowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsescrowPayload>
          }
          createMany: {
            args: Prisma.paymentsescrowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paymentsescrowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsescrowPayload>[]
          }
          delete: {
            args: Prisma.paymentsescrowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsescrowPayload>
          }
          update: {
            args: Prisma.paymentsescrowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsescrowPayload>
          }
          deleteMany: {
            args: Prisma.paymentsescrowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentsescrowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.paymentsescrowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsescrowPayload>[]
          }
          upsert: {
            args: Prisma.paymentsescrowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsescrowPayload>
          }
          aggregate: {
            args: Prisma.PaymentsescrowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentsescrow>
          }
          groupBy: {
            args: Prisma.paymentsescrowGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsescrowGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentsescrowCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsescrowCountAggregateOutputType> | number
          }
        }
      }
      proposals: {
        payload: Prisma.$proposalsPayload<ExtArgs>
        fields: Prisma.proposalsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.proposalsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proposalsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.proposalsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proposalsPayload>
          }
          findFirst: {
            args: Prisma.proposalsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proposalsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.proposalsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proposalsPayload>
          }
          findMany: {
            args: Prisma.proposalsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proposalsPayload>[]
          }
          create: {
            args: Prisma.proposalsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proposalsPayload>
          }
          createMany: {
            args: Prisma.proposalsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.proposalsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proposalsPayload>[]
          }
          delete: {
            args: Prisma.proposalsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proposalsPayload>
          }
          update: {
            args: Prisma.proposalsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proposalsPayload>
          }
          deleteMany: {
            args: Prisma.proposalsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.proposalsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.proposalsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proposalsPayload>[]
          }
          upsert: {
            args: Prisma.proposalsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proposalsPayload>
          }
          aggregate: {
            args: Prisma.ProposalsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProposals>
          }
          groupBy: {
            args: Prisma.proposalsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProposalsGroupByOutputType>[]
          }
          count: {
            args: Prisma.proposalsCountArgs<ExtArgs>
            result: $Utils.Optional<ProposalsCountAggregateOutputType> | number
          }
        }
      }
      smartcontract: {
        payload: Prisma.$smartcontractPayload<ExtArgs>
        fields: Prisma.smartcontractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.smartcontractFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$smartcontractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.smartcontractFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$smartcontractPayload>
          }
          findFirst: {
            args: Prisma.smartcontractFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$smartcontractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.smartcontractFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$smartcontractPayload>
          }
          findMany: {
            args: Prisma.smartcontractFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$smartcontractPayload>[]
          }
          create: {
            args: Prisma.smartcontractCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$smartcontractPayload>
          }
          createMany: {
            args: Prisma.smartcontractCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.smartcontractCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$smartcontractPayload>[]
          }
          delete: {
            args: Prisma.smartcontractDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$smartcontractPayload>
          }
          update: {
            args: Prisma.smartcontractUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$smartcontractPayload>
          }
          deleteMany: {
            args: Prisma.smartcontractDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.smartcontractUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.smartcontractUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$smartcontractPayload>[]
          }
          upsert: {
            args: Prisma.smartcontractUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$smartcontractPayload>
          }
          aggregate: {
            args: Prisma.SmartcontractAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSmartcontract>
          }
          groupBy: {
            args: Prisma.smartcontractGroupByArgs<ExtArgs>
            result: $Utils.Optional<SmartcontractGroupByOutputType>[]
          }
          count: {
            args: Prisma.smartcontractCountArgs<ExtArgs>
            result: $Utils.Optional<SmartcontractCountAggregateOutputType> | number
          }
        }
      }
      staking: {
        payload: Prisma.$stakingPayload<ExtArgs>
        fields: Prisma.stakingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stakingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stakingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stakingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stakingPayload>
          }
          findFirst: {
            args: Prisma.stakingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stakingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stakingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stakingPayload>
          }
          findMany: {
            args: Prisma.stakingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stakingPayload>[]
          }
          create: {
            args: Prisma.stakingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stakingPayload>
          }
          createMany: {
            args: Prisma.stakingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stakingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stakingPayload>[]
          }
          delete: {
            args: Prisma.stakingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stakingPayload>
          }
          update: {
            args: Prisma.stakingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stakingPayload>
          }
          deleteMany: {
            args: Prisma.stakingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stakingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stakingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stakingPayload>[]
          }
          upsert: {
            args: Prisma.stakingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stakingPayload>
          }
          aggregate: {
            args: Prisma.StakingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaking>
          }
          groupBy: {
            args: Prisma.stakingGroupByArgs<ExtArgs>
            result: $Utils.Optional<StakingGroupByOutputType>[]
          }
          count: {
            args: Prisma.stakingCountArgs<ExtArgs>
            result: $Utils.Optional<StakingCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    client?: clientOmit
    disputes?: disputesOmit
    freelancer?: freelancerOmit
    jobposted?: jobpostedOmit
    message?: messageOmit
    milestones?: milestonesOmit
    nftcredential?: nftcredentialOmit
    paymentsescrow?: paymentsescrowOmit
    proposals?: proposalsOmit
    smartcontract?: smartcontractOmit
    staking?: stakingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    jobposted: number
    smartcontract: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobposted?: boolean | ClientCountOutputTypeCountJobpostedArgs
    smartcontract?: boolean | ClientCountOutputTypeCountSmartcontractArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountJobpostedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobpostedWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountSmartcontractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: smartcontractWhereInput
  }


  /**
   * Count Type FreelancerCountOutputType
   */

  export type FreelancerCountOutputType = {
    milestones: number
    nftcredential: number
    paymentsescrow: number
    proposals: number
    smartcontract: number
  }

  export type FreelancerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    milestones?: boolean | FreelancerCountOutputTypeCountMilestonesArgs
    nftcredential?: boolean | FreelancerCountOutputTypeCountNftcredentialArgs
    paymentsescrow?: boolean | FreelancerCountOutputTypeCountPaymentsescrowArgs
    proposals?: boolean | FreelancerCountOutputTypeCountProposalsArgs
    smartcontract?: boolean | FreelancerCountOutputTypeCountSmartcontractArgs
  }

  // Custom InputTypes
  /**
   * FreelancerCountOutputType without action
   */
  export type FreelancerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreelancerCountOutputType
     */
    select?: FreelancerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FreelancerCountOutputType without action
   */
  export type FreelancerCountOutputTypeCountMilestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: milestonesWhereInput
  }

  /**
   * FreelancerCountOutputType without action
   */
  export type FreelancerCountOutputTypeCountNftcredentialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nftcredentialWhereInput
  }

  /**
   * FreelancerCountOutputType without action
   */
  export type FreelancerCountOutputTypeCountPaymentsescrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsescrowWhereInput
  }

  /**
   * FreelancerCountOutputType without action
   */
  export type FreelancerCountOutputTypeCountProposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: proposalsWhereInput
  }

  /**
   * FreelancerCountOutputType without action
   */
  export type FreelancerCountOutputTypeCountSmartcontractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: smartcontractWhereInput
  }


  /**
   * Count Type JobpostedCountOutputType
   */

  export type JobpostedCountOutputType = {
    message: number
    milestones: number
    nftcredential: number
    proposals: number
    smartcontract: number
  }

  export type JobpostedCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | JobpostedCountOutputTypeCountMessageArgs
    milestones?: boolean | JobpostedCountOutputTypeCountMilestonesArgs
    nftcredential?: boolean | JobpostedCountOutputTypeCountNftcredentialArgs
    proposals?: boolean | JobpostedCountOutputTypeCountProposalsArgs
    smartcontract?: boolean | JobpostedCountOutputTypeCountSmartcontractArgs
  }

  // Custom InputTypes
  /**
   * JobpostedCountOutputType without action
   */
  export type JobpostedCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobpostedCountOutputType
     */
    select?: JobpostedCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobpostedCountOutputType without action
   */
  export type JobpostedCountOutputTypeCountMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messageWhereInput
  }

  /**
   * JobpostedCountOutputType without action
   */
  export type JobpostedCountOutputTypeCountMilestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: milestonesWhereInput
  }

  /**
   * JobpostedCountOutputType without action
   */
  export type JobpostedCountOutputTypeCountNftcredentialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nftcredentialWhereInput
  }

  /**
   * JobpostedCountOutputType without action
   */
  export type JobpostedCountOutputTypeCountProposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: proposalsWhereInput
  }

  /**
   * JobpostedCountOutputType without action
   */
  export type JobpostedCountOutputTypeCountSmartcontractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: smartcontractWhereInput
  }


  /**
   * Count Type MilestonesCountOutputType
   */

  export type MilestonesCountOutputType = {
    disputes: number
    paymentsescrow: number
  }

  export type MilestonesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disputes?: boolean | MilestonesCountOutputTypeCountDisputesArgs
    paymentsescrow?: boolean | MilestonesCountOutputTypeCountPaymentsescrowArgs
  }

  // Custom InputTypes
  /**
   * MilestonesCountOutputType without action
   */
  export type MilestonesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestonesCountOutputType
     */
    select?: MilestonesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MilestonesCountOutputType without action
   */
  export type MilestonesCountOutputTypeCountDisputesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: disputesWhereInput
  }

  /**
   * MilestonesCountOutputType without action
   */
  export type MilestonesCountOutputTypeCountPaymentsescrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsescrowWhereInput
  }


  /**
   * Count Type SmartcontractCountOutputType
   */

  export type SmartcontractCountOutputType = {
    disputes: number
    paymentsescrow: number
  }

  export type SmartcontractCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disputes?: boolean | SmartcontractCountOutputTypeCountDisputesArgs
    paymentsescrow?: boolean | SmartcontractCountOutputTypeCountPaymentsescrowArgs
  }

  // Custom InputTypes
  /**
   * SmartcontractCountOutputType without action
   */
  export type SmartcontractCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmartcontractCountOutputType
     */
    select?: SmartcontractCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SmartcontractCountOutputType without action
   */
  export type SmartcontractCountOutputTypeCountDisputesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: disputesWhereInput
  }

  /**
   * SmartcontractCountOutputType without action
   */
  export type SmartcontractCountOutputTypeCountPaymentsescrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsescrowWhereInput
  }


  /**
   * Models
   */

  /**
   * Model client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id: number | null
  }

  export type ClientSumAggregateOutputType = {
    id: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: number | null
    cognitoid: string | null
    name: string | null
    email: string | null
    password: string | null
    metamaskid: string | null
  }

  export type ClientMaxAggregateOutputType = {
    id: number | null
    cognitoid: string | null
    name: string | null
    email: string | null
    password: string | null
    metamaskid: string | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    cognitoid: number
    name: number
    email: number
    password: number
    metamaskid: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id?: true
  }

  export type ClientSumAggregateInputType = {
    id?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    cognitoid?: true
    name?: true
    email?: true
    password?: true
    metamaskid?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    cognitoid?: true
    name?: true
    email?: true
    password?: true
    metamaskid?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    cognitoid?: true
    name?: true
    email?: true
    password?: true
    metamaskid?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client to aggregate.
     */
    where?: clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type clientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientWhereInput
    orderBy?: clientOrderByWithAggregationInput | clientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: clientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: number
    cognitoid: string
    name: string
    email: string
    password: string | null
    metamaskid: string | null
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends clientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type clientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoid?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    metamaskid?: boolean
    jobposted?: boolean | client$jobpostedArgs<ExtArgs>
    smartcontract?: boolean | client$smartcontractArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type clientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoid?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    metamaskid?: boolean
  }, ExtArgs["result"]["client"]>

  export type clientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoid?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    metamaskid?: boolean
  }, ExtArgs["result"]["client"]>

  export type clientSelectScalar = {
    id?: boolean
    cognitoid?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    metamaskid?: boolean
  }

  export type clientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cognitoid" | "name" | "email" | "password" | "metamaskid", ExtArgs["result"]["client"]>
  export type clientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobposted?: boolean | client$jobpostedArgs<ExtArgs>
    smartcontract?: boolean | client$smartcontractArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type clientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type clientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $clientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "client"
    objects: {
      jobposted: Prisma.$jobpostedPayload<ExtArgs>[]
      smartcontract: Prisma.$smartcontractPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cognitoid: string
      name: string
      email: string
      password: string | null
      metamaskid: string | null
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type clientGetPayload<S extends boolean | null | undefined | clientDefaultArgs> = $Result.GetResult<Prisma.$clientPayload, S>

  type clientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface clientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['client'], meta: { name: 'client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {clientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clientFindUniqueArgs>(args: SelectSubset<T, clientFindUniqueArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clientFindUniqueOrThrowArgs>(args: SelectSubset<T, clientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clientFindFirstArgs>(args?: SelectSubset<T, clientFindFirstArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clientFindFirstOrThrowArgs>(args?: SelectSubset<T, clientFindFirstOrThrowArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends clientFindManyArgs>(args?: SelectSubset<T, clientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {clientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends clientCreateArgs>(args: SelectSubset<T, clientCreateArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {clientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clientCreateManyArgs>(args?: SelectSubset<T, clientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {clientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clientCreateManyAndReturnArgs>(args?: SelectSubset<T, clientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {clientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends clientDeleteArgs>(args: SelectSubset<T, clientDeleteArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {clientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clientUpdateArgs>(args: SelectSubset<T, clientUpdateArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {clientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clientDeleteManyArgs>(args?: SelectSubset<T, clientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clientUpdateManyArgs>(args: SelectSubset<T, clientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {clientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
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
    updateManyAndReturn<T extends clientUpdateManyAndReturnArgs>(args: SelectSubset<T, clientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {clientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends clientUpsertArgs>(args: SelectSubset<T, clientUpsertArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends clientCountArgs>(
      args?: Subset<T, clientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientGroupByArgs} args - Group by arguments.
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
      T extends clientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clientGroupByArgs['orderBy'] }
        : { orderBy?: clientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, clientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the client model
   */
  readonly fields: clientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobposted<T extends client$jobpostedArgs<ExtArgs> = {}>(args?: Subset<T, client$jobpostedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobpostedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    smartcontract<T extends client$smartcontractArgs<ExtArgs> = {}>(args?: Subset<T, client$smartcontractArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$smartcontractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the client model
   */
  interface clientFieldRefs {
    readonly id: FieldRef<"client", 'Int'>
    readonly cognitoid: FieldRef<"client", 'String'>
    readonly name: FieldRef<"client", 'String'>
    readonly email: FieldRef<"client", 'String'>
    readonly password: FieldRef<"client", 'String'>
    readonly metamaskid: FieldRef<"client", 'String'>
  }
    

  // Custom InputTypes
  /**
   * client findUnique
   */
  export type clientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter, which client to fetch.
     */
    where: clientWhereUniqueInput
  }

  /**
   * client findUniqueOrThrow
   */
  export type clientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter, which client to fetch.
     */
    where: clientWhereUniqueInput
  }

  /**
   * client findFirst
   */
  export type clientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter, which client to fetch.
     */
    where?: clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clients.
     */
    cursor?: clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * client findFirstOrThrow
   */
  export type clientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter, which client to fetch.
     */
    where?: clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clients.
     */
    cursor?: clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * client findMany
   */
  export type clientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where?: clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clients.
     */
    cursor?: clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * client create
   */
  export type clientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * The data needed to create a client.
     */
    data: XOR<clientCreateInput, clientUncheckedCreateInput>
  }

  /**
   * client createMany
   */
  export type clientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clients.
     */
    data: clientCreateManyInput | clientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * client createManyAndReturn
   */
  export type clientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * The data used to create many clients.
     */
    data: clientCreateManyInput | clientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * client update
   */
  export type clientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * The data needed to update a client.
     */
    data: XOR<clientUpdateInput, clientUncheckedUpdateInput>
    /**
     * Choose, which client to update.
     */
    where: clientWhereUniqueInput
  }

  /**
   * client updateMany
   */
  export type clientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clients.
     */
    data: XOR<clientUpdateManyMutationInput, clientUncheckedUpdateManyInput>
    /**
     * Filter which clients to update
     */
    where?: clientWhereInput
    /**
     * Limit how many clients to update.
     */
    limit?: number
  }

  /**
   * client updateManyAndReturn
   */
  export type clientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * The data used to update clients.
     */
    data: XOR<clientUpdateManyMutationInput, clientUncheckedUpdateManyInput>
    /**
     * Filter which clients to update
     */
    where?: clientWhereInput
    /**
     * Limit how many clients to update.
     */
    limit?: number
  }

  /**
   * client upsert
   */
  export type clientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * The filter to search for the client to update in case it exists.
     */
    where: clientWhereUniqueInput
    /**
     * In case the client found by the `where` argument doesn't exist, create a new client with this data.
     */
    create: XOR<clientCreateInput, clientUncheckedCreateInput>
    /**
     * In case the client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientUpdateInput, clientUncheckedUpdateInput>
  }

  /**
   * client delete
   */
  export type clientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter which client to delete.
     */
    where: clientWhereUniqueInput
  }

  /**
   * client deleteMany
   */
  export type clientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clients to delete
     */
    where?: clientWhereInput
    /**
     * Limit how many clients to delete.
     */
    limit?: number
  }

  /**
   * client.jobposted
   */
  export type client$jobpostedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobposted
     */
    select?: jobpostedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobposted
     */
    omit?: jobpostedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobpostedInclude<ExtArgs> | null
    where?: jobpostedWhereInput
    orderBy?: jobpostedOrderByWithRelationInput | jobpostedOrderByWithRelationInput[]
    cursor?: jobpostedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobpostedScalarFieldEnum | JobpostedScalarFieldEnum[]
  }

  /**
   * client.smartcontract
   */
  export type client$smartcontractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the smartcontract
     */
    select?: smartcontractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the smartcontract
     */
    omit?: smartcontractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: smartcontractInclude<ExtArgs> | null
    where?: smartcontractWhereInput
    orderBy?: smartcontractOrderByWithRelationInput | smartcontractOrderByWithRelationInput[]
    cursor?: smartcontractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SmartcontractScalarFieldEnum | SmartcontractScalarFieldEnum[]
  }

  /**
   * client without action
   */
  export type clientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
  }


  /**
   * Model disputes
   */

  export type AggregateDisputes = {
    _count: DisputesCountAggregateOutputType | null
    _avg: DisputesAvgAggregateOutputType | null
    _sum: DisputesSumAggregateOutputType | null
    _min: DisputesMinAggregateOutputType | null
    _max: DisputesMaxAggregateOutputType | null
  }

  export type DisputesAvgAggregateOutputType = {
    id: number | null
    contractid: number | null
    milestoneid: number | null
    raisedby: number | null
    againstuserid: number | null
    resolutionby: number | null
  }

  export type DisputesSumAggregateOutputType = {
    id: number | null
    contractid: number | null
    milestoneid: number | null
    raisedby: number | null
    againstuserid: number | null
    resolutionby: number | null
  }

  export type DisputesMinAggregateOutputType = {
    id: number | null
    contractid: number | null
    milestoneid: number | null
    raisedby: number | null
    againstuserid: number | null
    description: string | null
    status: $Enums.dispute_status | null
    resolution: string | null
    resolutionby: number | null
    createdat: Date | null
    resolvedat: Date | null
  }

  export type DisputesMaxAggregateOutputType = {
    id: number | null
    contractid: number | null
    milestoneid: number | null
    raisedby: number | null
    againstuserid: number | null
    description: string | null
    status: $Enums.dispute_status | null
    resolution: string | null
    resolutionby: number | null
    createdat: Date | null
    resolvedat: Date | null
  }

  export type DisputesCountAggregateOutputType = {
    id: number
    contractid: number
    milestoneid: number
    raisedby: number
    againstuserid: number
    description: number
    status: number
    resolution: number
    resolutionby: number
    evidenceurls: number
    createdat: number
    resolvedat: number
    _all: number
  }


  export type DisputesAvgAggregateInputType = {
    id?: true
    contractid?: true
    milestoneid?: true
    raisedby?: true
    againstuserid?: true
    resolutionby?: true
  }

  export type DisputesSumAggregateInputType = {
    id?: true
    contractid?: true
    milestoneid?: true
    raisedby?: true
    againstuserid?: true
    resolutionby?: true
  }

  export type DisputesMinAggregateInputType = {
    id?: true
    contractid?: true
    milestoneid?: true
    raisedby?: true
    againstuserid?: true
    description?: true
    status?: true
    resolution?: true
    resolutionby?: true
    createdat?: true
    resolvedat?: true
  }

  export type DisputesMaxAggregateInputType = {
    id?: true
    contractid?: true
    milestoneid?: true
    raisedby?: true
    againstuserid?: true
    description?: true
    status?: true
    resolution?: true
    resolutionby?: true
    createdat?: true
    resolvedat?: true
  }

  export type DisputesCountAggregateInputType = {
    id?: true
    contractid?: true
    milestoneid?: true
    raisedby?: true
    againstuserid?: true
    description?: true
    status?: true
    resolution?: true
    resolutionby?: true
    evidenceurls?: true
    createdat?: true
    resolvedat?: true
    _all?: true
  }

  export type DisputesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which disputes to aggregate.
     */
    where?: disputesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disputes to fetch.
     */
    orderBy?: disputesOrderByWithRelationInput | disputesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: disputesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disputes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disputes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned disputes
    **/
    _count?: true | DisputesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisputesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisputesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisputesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisputesMaxAggregateInputType
  }

  export type GetDisputesAggregateType<T extends DisputesAggregateArgs> = {
        [P in keyof T & keyof AggregateDisputes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisputes[P]>
      : GetScalarType<T[P], AggregateDisputes[P]>
  }




  export type disputesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: disputesWhereInput
    orderBy?: disputesOrderByWithAggregationInput | disputesOrderByWithAggregationInput[]
    by: DisputesScalarFieldEnum[] | DisputesScalarFieldEnum
    having?: disputesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisputesCountAggregateInputType | true
    _avg?: DisputesAvgAggregateInputType
    _sum?: DisputesSumAggregateInputType
    _min?: DisputesMinAggregateInputType
    _max?: DisputesMaxAggregateInputType
  }

  export type DisputesGroupByOutputType = {
    id: number
    contractid: number | null
    milestoneid: number | null
    raisedby: number
    againstuserid: number
    description: string | null
    status: $Enums.dispute_status | null
    resolution: string | null
    resolutionby: number | null
    evidenceurls: string[]
    createdat: Date | null
    resolvedat: Date | null
    _count: DisputesCountAggregateOutputType | null
    _avg: DisputesAvgAggregateOutputType | null
    _sum: DisputesSumAggregateOutputType | null
    _min: DisputesMinAggregateOutputType | null
    _max: DisputesMaxAggregateOutputType | null
  }

  type GetDisputesGroupByPayload<T extends disputesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisputesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisputesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisputesGroupByOutputType[P]>
            : GetScalarType<T[P], DisputesGroupByOutputType[P]>
        }
      >
    >


  export type disputesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractid?: boolean
    milestoneid?: boolean
    raisedby?: boolean
    againstuserid?: boolean
    description?: boolean
    status?: boolean
    resolution?: boolean
    resolutionby?: boolean
    evidenceurls?: boolean
    createdat?: boolean
    resolvedat?: boolean
    smartcontract?: boolean | disputes$smartcontractArgs<ExtArgs>
    milestones?: boolean | disputes$milestonesArgs<ExtArgs>
  }, ExtArgs["result"]["disputes"]>

  export type disputesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractid?: boolean
    milestoneid?: boolean
    raisedby?: boolean
    againstuserid?: boolean
    description?: boolean
    status?: boolean
    resolution?: boolean
    resolutionby?: boolean
    evidenceurls?: boolean
    createdat?: boolean
    resolvedat?: boolean
    smartcontract?: boolean | disputes$smartcontractArgs<ExtArgs>
    milestones?: boolean | disputes$milestonesArgs<ExtArgs>
  }, ExtArgs["result"]["disputes"]>

  export type disputesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractid?: boolean
    milestoneid?: boolean
    raisedby?: boolean
    againstuserid?: boolean
    description?: boolean
    status?: boolean
    resolution?: boolean
    resolutionby?: boolean
    evidenceurls?: boolean
    createdat?: boolean
    resolvedat?: boolean
    smartcontract?: boolean | disputes$smartcontractArgs<ExtArgs>
    milestones?: boolean | disputes$milestonesArgs<ExtArgs>
  }, ExtArgs["result"]["disputes"]>

  export type disputesSelectScalar = {
    id?: boolean
    contractid?: boolean
    milestoneid?: boolean
    raisedby?: boolean
    againstuserid?: boolean
    description?: boolean
    status?: boolean
    resolution?: boolean
    resolutionby?: boolean
    evidenceurls?: boolean
    createdat?: boolean
    resolvedat?: boolean
  }

  export type disputesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contractid" | "milestoneid" | "raisedby" | "againstuserid" | "description" | "status" | "resolution" | "resolutionby" | "evidenceurls" | "createdat" | "resolvedat", ExtArgs["result"]["disputes"]>
  export type disputesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    smartcontract?: boolean | disputes$smartcontractArgs<ExtArgs>
    milestones?: boolean | disputes$milestonesArgs<ExtArgs>
  }
  export type disputesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    smartcontract?: boolean | disputes$smartcontractArgs<ExtArgs>
    milestones?: boolean | disputes$milestonesArgs<ExtArgs>
  }
  export type disputesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    smartcontract?: boolean | disputes$smartcontractArgs<ExtArgs>
    milestones?: boolean | disputes$milestonesArgs<ExtArgs>
  }

  export type $disputesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "disputes"
    objects: {
      smartcontract: Prisma.$smartcontractPayload<ExtArgs> | null
      milestones: Prisma.$milestonesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contractid: number | null
      milestoneid: number | null
      raisedby: number
      againstuserid: number
      description: string | null
      status: $Enums.dispute_status | null
      resolution: string | null
      resolutionby: number | null
      evidenceurls: string[]
      createdat: Date | null
      resolvedat: Date | null
    }, ExtArgs["result"]["disputes"]>
    composites: {}
  }

  type disputesGetPayload<S extends boolean | null | undefined | disputesDefaultArgs> = $Result.GetResult<Prisma.$disputesPayload, S>

  type disputesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<disputesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisputesCountAggregateInputType | true
    }

  export interface disputesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['disputes'], meta: { name: 'disputes' } }
    /**
     * Find zero or one Disputes that matches the filter.
     * @param {disputesFindUniqueArgs} args - Arguments to find a Disputes
     * @example
     * // Get one Disputes
     * const disputes = await prisma.disputes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends disputesFindUniqueArgs>(args: SelectSubset<T, disputesFindUniqueArgs<ExtArgs>>): Prisma__disputesClient<$Result.GetResult<Prisma.$disputesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disputes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {disputesFindUniqueOrThrowArgs} args - Arguments to find a Disputes
     * @example
     * // Get one Disputes
     * const disputes = await prisma.disputes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends disputesFindUniqueOrThrowArgs>(args: SelectSubset<T, disputesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__disputesClient<$Result.GetResult<Prisma.$disputesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disputes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disputesFindFirstArgs} args - Arguments to find a Disputes
     * @example
     * // Get one Disputes
     * const disputes = await prisma.disputes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends disputesFindFirstArgs>(args?: SelectSubset<T, disputesFindFirstArgs<ExtArgs>>): Prisma__disputesClient<$Result.GetResult<Prisma.$disputesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disputes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disputesFindFirstOrThrowArgs} args - Arguments to find a Disputes
     * @example
     * // Get one Disputes
     * const disputes = await prisma.disputes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends disputesFindFirstOrThrowArgs>(args?: SelectSubset<T, disputesFindFirstOrThrowArgs<ExtArgs>>): Prisma__disputesClient<$Result.GetResult<Prisma.$disputesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disputes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disputesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disputes
     * const disputes = await prisma.disputes.findMany()
     * 
     * // Get first 10 Disputes
     * const disputes = await prisma.disputes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disputesWithIdOnly = await prisma.disputes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends disputesFindManyArgs>(args?: SelectSubset<T, disputesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$disputesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disputes.
     * @param {disputesCreateArgs} args - Arguments to create a Disputes.
     * @example
     * // Create one Disputes
     * const Disputes = await prisma.disputes.create({
     *   data: {
     *     // ... data to create a Disputes
     *   }
     * })
     * 
     */
    create<T extends disputesCreateArgs>(args: SelectSubset<T, disputesCreateArgs<ExtArgs>>): Prisma__disputesClient<$Result.GetResult<Prisma.$disputesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disputes.
     * @param {disputesCreateManyArgs} args - Arguments to create many Disputes.
     * @example
     * // Create many Disputes
     * const disputes = await prisma.disputes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends disputesCreateManyArgs>(args?: SelectSubset<T, disputesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Disputes and returns the data saved in the database.
     * @param {disputesCreateManyAndReturnArgs} args - Arguments to create many Disputes.
     * @example
     * // Create many Disputes
     * const disputes = await prisma.disputes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Disputes and only return the `id`
     * const disputesWithIdOnly = await prisma.disputes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends disputesCreateManyAndReturnArgs>(args?: SelectSubset<T, disputesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$disputesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Disputes.
     * @param {disputesDeleteArgs} args - Arguments to delete one Disputes.
     * @example
     * // Delete one Disputes
     * const Disputes = await prisma.disputes.delete({
     *   where: {
     *     // ... filter to delete one Disputes
     *   }
     * })
     * 
     */
    delete<T extends disputesDeleteArgs>(args: SelectSubset<T, disputesDeleteArgs<ExtArgs>>): Prisma__disputesClient<$Result.GetResult<Prisma.$disputesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disputes.
     * @param {disputesUpdateArgs} args - Arguments to update one Disputes.
     * @example
     * // Update one Disputes
     * const disputes = await prisma.disputes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends disputesUpdateArgs>(args: SelectSubset<T, disputesUpdateArgs<ExtArgs>>): Prisma__disputesClient<$Result.GetResult<Prisma.$disputesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disputes.
     * @param {disputesDeleteManyArgs} args - Arguments to filter Disputes to delete.
     * @example
     * // Delete a few Disputes
     * const { count } = await prisma.disputes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends disputesDeleteManyArgs>(args?: SelectSubset<T, disputesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disputes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disputesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disputes
     * const disputes = await prisma.disputes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends disputesUpdateManyArgs>(args: SelectSubset<T, disputesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disputes and returns the data updated in the database.
     * @param {disputesUpdateManyAndReturnArgs} args - Arguments to update many Disputes.
     * @example
     * // Update many Disputes
     * const disputes = await prisma.disputes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Disputes and only return the `id`
     * const disputesWithIdOnly = await prisma.disputes.updateManyAndReturn({
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
    updateManyAndReturn<T extends disputesUpdateManyAndReturnArgs>(args: SelectSubset<T, disputesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$disputesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Disputes.
     * @param {disputesUpsertArgs} args - Arguments to update or create a Disputes.
     * @example
     * // Update or create a Disputes
     * const disputes = await prisma.disputes.upsert({
     *   create: {
     *     // ... data to create a Disputes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disputes we want to update
     *   }
     * })
     */
    upsert<T extends disputesUpsertArgs>(args: SelectSubset<T, disputesUpsertArgs<ExtArgs>>): Prisma__disputesClient<$Result.GetResult<Prisma.$disputesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disputes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disputesCountArgs} args - Arguments to filter Disputes to count.
     * @example
     * // Count the number of Disputes
     * const count = await prisma.disputes.count({
     *   where: {
     *     // ... the filter for the Disputes we want to count
     *   }
     * })
    **/
    count<T extends disputesCountArgs>(
      args?: Subset<T, disputesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisputesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disputes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DisputesAggregateArgs>(args: Subset<T, DisputesAggregateArgs>): Prisma.PrismaPromise<GetDisputesAggregateType<T>>

    /**
     * Group by Disputes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disputesGroupByArgs} args - Group by arguments.
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
      T extends disputesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: disputesGroupByArgs['orderBy'] }
        : { orderBy?: disputesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, disputesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisputesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the disputes model
   */
  readonly fields: disputesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for disputes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__disputesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    smartcontract<T extends disputes$smartcontractArgs<ExtArgs> = {}>(args?: Subset<T, disputes$smartcontractArgs<ExtArgs>>): Prisma__smartcontractClient<$Result.GetResult<Prisma.$smartcontractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    milestones<T extends disputes$milestonesArgs<ExtArgs> = {}>(args?: Subset<T, disputes$milestonesArgs<ExtArgs>>): Prisma__milestonesClient<$Result.GetResult<Prisma.$milestonesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the disputes model
   */
  interface disputesFieldRefs {
    readonly id: FieldRef<"disputes", 'Int'>
    readonly contractid: FieldRef<"disputes", 'Int'>
    readonly milestoneid: FieldRef<"disputes", 'Int'>
    readonly raisedby: FieldRef<"disputes", 'Int'>
    readonly againstuserid: FieldRef<"disputes", 'Int'>
    readonly description: FieldRef<"disputes", 'String'>
    readonly status: FieldRef<"disputes", 'dispute_status'>
    readonly resolution: FieldRef<"disputes", 'String'>
    readonly resolutionby: FieldRef<"disputes", 'Int'>
    readonly evidenceurls: FieldRef<"disputes", 'String[]'>
    readonly createdat: FieldRef<"disputes", 'DateTime'>
    readonly resolvedat: FieldRef<"disputes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * disputes findUnique
   */
  export type disputesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disputes
     */
    select?: disputesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disputes
     */
    omit?: disputesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disputesInclude<ExtArgs> | null
    /**
     * Filter, which disputes to fetch.
     */
    where: disputesWhereUniqueInput
  }

  /**
   * disputes findUniqueOrThrow
   */
  export type disputesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disputes
     */
    select?: disputesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disputes
     */
    omit?: disputesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disputesInclude<ExtArgs> | null
    /**
     * Filter, which disputes to fetch.
     */
    where: disputesWhereUniqueInput
  }

  /**
   * disputes findFirst
   */
  export type disputesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disputes
     */
    select?: disputesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disputes
     */
    omit?: disputesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disputesInclude<ExtArgs> | null
    /**
     * Filter, which disputes to fetch.
     */
    where?: disputesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disputes to fetch.
     */
    orderBy?: disputesOrderByWithRelationInput | disputesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for disputes.
     */
    cursor?: disputesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disputes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disputes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of disputes.
     */
    distinct?: DisputesScalarFieldEnum | DisputesScalarFieldEnum[]
  }

  /**
   * disputes findFirstOrThrow
   */
  export type disputesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disputes
     */
    select?: disputesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disputes
     */
    omit?: disputesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disputesInclude<ExtArgs> | null
    /**
     * Filter, which disputes to fetch.
     */
    where?: disputesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disputes to fetch.
     */
    orderBy?: disputesOrderByWithRelationInput | disputesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for disputes.
     */
    cursor?: disputesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disputes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disputes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of disputes.
     */
    distinct?: DisputesScalarFieldEnum | DisputesScalarFieldEnum[]
  }

  /**
   * disputes findMany
   */
  export type disputesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disputes
     */
    select?: disputesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disputes
     */
    omit?: disputesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disputesInclude<ExtArgs> | null
    /**
     * Filter, which disputes to fetch.
     */
    where?: disputesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disputes to fetch.
     */
    orderBy?: disputesOrderByWithRelationInput | disputesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing disputes.
     */
    cursor?: disputesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disputes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disputes.
     */
    skip?: number
    distinct?: DisputesScalarFieldEnum | DisputesScalarFieldEnum[]
  }

  /**
   * disputes create
   */
  export type disputesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disputes
     */
    select?: disputesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disputes
     */
    omit?: disputesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disputesInclude<ExtArgs> | null
    /**
     * The data needed to create a disputes.
     */
    data: XOR<disputesCreateInput, disputesUncheckedCreateInput>
  }

  /**
   * disputes createMany
   */
  export type disputesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many disputes.
     */
    data: disputesCreateManyInput | disputesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * disputes createManyAndReturn
   */
  export type disputesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disputes
     */
    select?: disputesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the disputes
     */
    omit?: disputesOmit<ExtArgs> | null
    /**
     * The data used to create many disputes.
     */
    data: disputesCreateManyInput | disputesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disputesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * disputes update
   */
  export type disputesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disputes
     */
    select?: disputesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disputes
     */
    omit?: disputesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disputesInclude<ExtArgs> | null
    /**
     * The data needed to update a disputes.
     */
    data: XOR<disputesUpdateInput, disputesUncheckedUpdateInput>
    /**
     * Choose, which disputes to update.
     */
    where: disputesWhereUniqueInput
  }

  /**
   * disputes updateMany
   */
  export type disputesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update disputes.
     */
    data: XOR<disputesUpdateManyMutationInput, disputesUncheckedUpdateManyInput>
    /**
     * Filter which disputes to update
     */
    where?: disputesWhereInput
    /**
     * Limit how many disputes to update.
     */
    limit?: number
  }

  /**
   * disputes updateManyAndReturn
   */
  export type disputesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disputes
     */
    select?: disputesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the disputes
     */
    omit?: disputesOmit<ExtArgs> | null
    /**
     * The data used to update disputes.
     */
    data: XOR<disputesUpdateManyMutationInput, disputesUncheckedUpdateManyInput>
    /**
     * Filter which disputes to update
     */
    where?: disputesWhereInput
    /**
     * Limit how many disputes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disputesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * disputes upsert
   */
  export type disputesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disputes
     */
    select?: disputesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disputes
     */
    omit?: disputesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disputesInclude<ExtArgs> | null
    /**
     * The filter to search for the disputes to update in case it exists.
     */
    where: disputesWhereUniqueInput
    /**
     * In case the disputes found by the `where` argument doesn't exist, create a new disputes with this data.
     */
    create: XOR<disputesCreateInput, disputesUncheckedCreateInput>
    /**
     * In case the disputes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<disputesUpdateInput, disputesUncheckedUpdateInput>
  }

  /**
   * disputes delete
   */
  export type disputesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disputes
     */
    select?: disputesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disputes
     */
    omit?: disputesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disputesInclude<ExtArgs> | null
    /**
     * Filter which disputes to delete.
     */
    where: disputesWhereUniqueInput
  }

  /**
   * disputes deleteMany
   */
  export type disputesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which disputes to delete
     */
    where?: disputesWhereInput
    /**
     * Limit how many disputes to delete.
     */
    limit?: number
  }

  /**
   * disputes.smartcontract
   */
  export type disputes$smartcontractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the smartcontract
     */
    select?: smartcontractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the smartcontract
     */
    omit?: smartcontractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: smartcontractInclude<ExtArgs> | null
    where?: smartcontractWhereInput
  }

  /**
   * disputes.milestones
   */
  export type disputes$milestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestones
     */
    select?: milestonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the milestones
     */
    omit?: milestonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: milestonesInclude<ExtArgs> | null
    where?: milestonesWhereInput
  }

  /**
   * disputes without action
   */
  export type disputesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disputes
     */
    select?: disputesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disputes
     */
    omit?: disputesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disputesInclude<ExtArgs> | null
  }


  /**
   * Model freelancer
   */

  export type AggregateFreelancer = {
    _count: FreelancerCountAggregateOutputType | null
    _avg: FreelancerAvgAggregateOutputType | null
    _sum: FreelancerSumAggregateOutputType | null
    _min: FreelancerMinAggregateOutputType | null
    _max: FreelancerMaxAggregateOutputType | null
  }

  export type FreelancerAvgAggregateOutputType = {
    id: number | null
  }

  export type FreelancerSumAggregateOutputType = {
    id: number | null
  }

  export type FreelancerMinAggregateOutputType = {
    id: number | null
    cognitoid: string | null
    name: string | null
    email: string | null
    password: string | null
    metamaskid: string | null
  }

  export type FreelancerMaxAggregateOutputType = {
    id: number | null
    cognitoid: string | null
    name: string | null
    email: string | null
    password: string | null
    metamaskid: string | null
  }

  export type FreelancerCountAggregateOutputType = {
    id: number
    cognitoid: number
    name: number
    email: number
    password: number
    metamaskid: number
    _all: number
  }


  export type FreelancerAvgAggregateInputType = {
    id?: true
  }

  export type FreelancerSumAggregateInputType = {
    id?: true
  }

  export type FreelancerMinAggregateInputType = {
    id?: true
    cognitoid?: true
    name?: true
    email?: true
    password?: true
    metamaskid?: true
  }

  export type FreelancerMaxAggregateInputType = {
    id?: true
    cognitoid?: true
    name?: true
    email?: true
    password?: true
    metamaskid?: true
  }

  export type FreelancerCountAggregateInputType = {
    id?: true
    cognitoid?: true
    name?: true
    email?: true
    password?: true
    metamaskid?: true
    _all?: true
  }

  export type FreelancerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which freelancer to aggregate.
     */
    where?: freelancerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of freelancers to fetch.
     */
    orderBy?: freelancerOrderByWithRelationInput | freelancerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: freelancerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` freelancers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` freelancers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned freelancers
    **/
    _count?: true | FreelancerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FreelancerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FreelancerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FreelancerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FreelancerMaxAggregateInputType
  }

  export type GetFreelancerAggregateType<T extends FreelancerAggregateArgs> = {
        [P in keyof T & keyof AggregateFreelancer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFreelancer[P]>
      : GetScalarType<T[P], AggregateFreelancer[P]>
  }




  export type freelancerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: freelancerWhereInput
    orderBy?: freelancerOrderByWithAggregationInput | freelancerOrderByWithAggregationInput[]
    by: FreelancerScalarFieldEnum[] | FreelancerScalarFieldEnum
    having?: freelancerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FreelancerCountAggregateInputType | true
    _avg?: FreelancerAvgAggregateInputType
    _sum?: FreelancerSumAggregateInputType
    _min?: FreelancerMinAggregateInputType
    _max?: FreelancerMaxAggregateInputType
  }

  export type FreelancerGroupByOutputType = {
    id: number
    cognitoid: string
    name: string
    email: string
    password: string
    metamaskid: string | null
    _count: FreelancerCountAggregateOutputType | null
    _avg: FreelancerAvgAggregateOutputType | null
    _sum: FreelancerSumAggregateOutputType | null
    _min: FreelancerMinAggregateOutputType | null
    _max: FreelancerMaxAggregateOutputType | null
  }

  type GetFreelancerGroupByPayload<T extends freelancerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FreelancerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FreelancerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FreelancerGroupByOutputType[P]>
            : GetScalarType<T[P], FreelancerGroupByOutputType[P]>
        }
      >
    >


  export type freelancerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoid?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    metamaskid?: boolean
    milestones?: boolean | freelancer$milestonesArgs<ExtArgs>
    nftcredential?: boolean | freelancer$nftcredentialArgs<ExtArgs>
    paymentsescrow?: boolean | freelancer$paymentsescrowArgs<ExtArgs>
    proposals?: boolean | freelancer$proposalsArgs<ExtArgs>
    smartcontract?: boolean | freelancer$smartcontractArgs<ExtArgs>
    _count?: boolean | FreelancerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["freelancer"]>

  export type freelancerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoid?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    metamaskid?: boolean
  }, ExtArgs["result"]["freelancer"]>

  export type freelancerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoid?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    metamaskid?: boolean
  }, ExtArgs["result"]["freelancer"]>

  export type freelancerSelectScalar = {
    id?: boolean
    cognitoid?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    metamaskid?: boolean
  }

  export type freelancerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cognitoid" | "name" | "email" | "password" | "metamaskid", ExtArgs["result"]["freelancer"]>
  export type freelancerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    milestones?: boolean | freelancer$milestonesArgs<ExtArgs>
    nftcredential?: boolean | freelancer$nftcredentialArgs<ExtArgs>
    paymentsescrow?: boolean | freelancer$paymentsescrowArgs<ExtArgs>
    proposals?: boolean | freelancer$proposalsArgs<ExtArgs>
    smartcontract?: boolean | freelancer$smartcontractArgs<ExtArgs>
    _count?: boolean | FreelancerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type freelancerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type freelancerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $freelancerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "freelancer"
    objects: {
      milestones: Prisma.$milestonesPayload<ExtArgs>[]
      nftcredential: Prisma.$nftcredentialPayload<ExtArgs>[]
      paymentsescrow: Prisma.$paymentsescrowPayload<ExtArgs>[]
      proposals: Prisma.$proposalsPayload<ExtArgs>[]
      smartcontract: Prisma.$smartcontractPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cognitoid: string
      name: string
      email: string
      password: string
      metamaskid: string | null
    }, ExtArgs["result"]["freelancer"]>
    composites: {}
  }

  type freelancerGetPayload<S extends boolean | null | undefined | freelancerDefaultArgs> = $Result.GetResult<Prisma.$freelancerPayload, S>

  type freelancerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<freelancerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FreelancerCountAggregateInputType | true
    }

  export interface freelancerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['freelancer'], meta: { name: 'freelancer' } }
    /**
     * Find zero or one Freelancer that matches the filter.
     * @param {freelancerFindUniqueArgs} args - Arguments to find a Freelancer
     * @example
     * // Get one Freelancer
     * const freelancer = await prisma.freelancer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends freelancerFindUniqueArgs>(args: SelectSubset<T, freelancerFindUniqueArgs<ExtArgs>>): Prisma__freelancerClient<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Freelancer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {freelancerFindUniqueOrThrowArgs} args - Arguments to find a Freelancer
     * @example
     * // Get one Freelancer
     * const freelancer = await prisma.freelancer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends freelancerFindUniqueOrThrowArgs>(args: SelectSubset<T, freelancerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__freelancerClient<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Freelancer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelancerFindFirstArgs} args - Arguments to find a Freelancer
     * @example
     * // Get one Freelancer
     * const freelancer = await prisma.freelancer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends freelancerFindFirstArgs>(args?: SelectSubset<T, freelancerFindFirstArgs<ExtArgs>>): Prisma__freelancerClient<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Freelancer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelancerFindFirstOrThrowArgs} args - Arguments to find a Freelancer
     * @example
     * // Get one Freelancer
     * const freelancer = await prisma.freelancer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends freelancerFindFirstOrThrowArgs>(args?: SelectSubset<T, freelancerFindFirstOrThrowArgs<ExtArgs>>): Prisma__freelancerClient<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Freelancers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelancerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Freelancers
     * const freelancers = await prisma.freelancer.findMany()
     * 
     * // Get first 10 Freelancers
     * const freelancers = await prisma.freelancer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const freelancerWithIdOnly = await prisma.freelancer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends freelancerFindManyArgs>(args?: SelectSubset<T, freelancerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Freelancer.
     * @param {freelancerCreateArgs} args - Arguments to create a Freelancer.
     * @example
     * // Create one Freelancer
     * const Freelancer = await prisma.freelancer.create({
     *   data: {
     *     // ... data to create a Freelancer
     *   }
     * })
     * 
     */
    create<T extends freelancerCreateArgs>(args: SelectSubset<T, freelancerCreateArgs<ExtArgs>>): Prisma__freelancerClient<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Freelancers.
     * @param {freelancerCreateManyArgs} args - Arguments to create many Freelancers.
     * @example
     * // Create many Freelancers
     * const freelancer = await prisma.freelancer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends freelancerCreateManyArgs>(args?: SelectSubset<T, freelancerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Freelancers and returns the data saved in the database.
     * @param {freelancerCreateManyAndReturnArgs} args - Arguments to create many Freelancers.
     * @example
     * // Create many Freelancers
     * const freelancer = await prisma.freelancer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Freelancers and only return the `id`
     * const freelancerWithIdOnly = await prisma.freelancer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends freelancerCreateManyAndReturnArgs>(args?: SelectSubset<T, freelancerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Freelancer.
     * @param {freelancerDeleteArgs} args - Arguments to delete one Freelancer.
     * @example
     * // Delete one Freelancer
     * const Freelancer = await prisma.freelancer.delete({
     *   where: {
     *     // ... filter to delete one Freelancer
     *   }
     * })
     * 
     */
    delete<T extends freelancerDeleteArgs>(args: SelectSubset<T, freelancerDeleteArgs<ExtArgs>>): Prisma__freelancerClient<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Freelancer.
     * @param {freelancerUpdateArgs} args - Arguments to update one Freelancer.
     * @example
     * // Update one Freelancer
     * const freelancer = await prisma.freelancer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends freelancerUpdateArgs>(args: SelectSubset<T, freelancerUpdateArgs<ExtArgs>>): Prisma__freelancerClient<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Freelancers.
     * @param {freelancerDeleteManyArgs} args - Arguments to filter Freelancers to delete.
     * @example
     * // Delete a few Freelancers
     * const { count } = await prisma.freelancer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends freelancerDeleteManyArgs>(args?: SelectSubset<T, freelancerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Freelancers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelancerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Freelancers
     * const freelancer = await prisma.freelancer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends freelancerUpdateManyArgs>(args: SelectSubset<T, freelancerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Freelancers and returns the data updated in the database.
     * @param {freelancerUpdateManyAndReturnArgs} args - Arguments to update many Freelancers.
     * @example
     * // Update many Freelancers
     * const freelancer = await prisma.freelancer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Freelancers and only return the `id`
     * const freelancerWithIdOnly = await prisma.freelancer.updateManyAndReturn({
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
    updateManyAndReturn<T extends freelancerUpdateManyAndReturnArgs>(args: SelectSubset<T, freelancerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Freelancer.
     * @param {freelancerUpsertArgs} args - Arguments to update or create a Freelancer.
     * @example
     * // Update or create a Freelancer
     * const freelancer = await prisma.freelancer.upsert({
     *   create: {
     *     // ... data to create a Freelancer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Freelancer we want to update
     *   }
     * })
     */
    upsert<T extends freelancerUpsertArgs>(args: SelectSubset<T, freelancerUpsertArgs<ExtArgs>>): Prisma__freelancerClient<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Freelancers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelancerCountArgs} args - Arguments to filter Freelancers to count.
     * @example
     * // Count the number of Freelancers
     * const count = await prisma.freelancer.count({
     *   where: {
     *     // ... the filter for the Freelancers we want to count
     *   }
     * })
    **/
    count<T extends freelancerCountArgs>(
      args?: Subset<T, freelancerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FreelancerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Freelancer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreelancerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FreelancerAggregateArgs>(args: Subset<T, FreelancerAggregateArgs>): Prisma.PrismaPromise<GetFreelancerAggregateType<T>>

    /**
     * Group by Freelancer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelancerGroupByArgs} args - Group by arguments.
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
      T extends freelancerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: freelancerGroupByArgs['orderBy'] }
        : { orderBy?: freelancerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, freelancerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFreelancerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the freelancer model
   */
  readonly fields: freelancerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for freelancer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__freelancerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    milestones<T extends freelancer$milestonesArgs<ExtArgs> = {}>(args?: Subset<T, freelancer$milestonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$milestonesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    nftcredential<T extends freelancer$nftcredentialArgs<ExtArgs> = {}>(args?: Subset<T, freelancer$nftcredentialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nftcredentialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paymentsescrow<T extends freelancer$paymentsescrowArgs<ExtArgs> = {}>(args?: Subset<T, freelancer$paymentsescrowArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsescrowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    proposals<T extends freelancer$proposalsArgs<ExtArgs> = {}>(args?: Subset<T, freelancer$proposalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proposalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    smartcontract<T extends freelancer$smartcontractArgs<ExtArgs> = {}>(args?: Subset<T, freelancer$smartcontractArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$smartcontractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the freelancer model
   */
  interface freelancerFieldRefs {
    readonly id: FieldRef<"freelancer", 'Int'>
    readonly cognitoid: FieldRef<"freelancer", 'String'>
    readonly name: FieldRef<"freelancer", 'String'>
    readonly email: FieldRef<"freelancer", 'String'>
    readonly password: FieldRef<"freelancer", 'String'>
    readonly metamaskid: FieldRef<"freelancer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * freelancer findUnique
   */
  export type freelancerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freelancer
     */
    omit?: freelancerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelancerInclude<ExtArgs> | null
    /**
     * Filter, which freelancer to fetch.
     */
    where: freelancerWhereUniqueInput
  }

  /**
   * freelancer findUniqueOrThrow
   */
  export type freelancerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freelancer
     */
    omit?: freelancerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelancerInclude<ExtArgs> | null
    /**
     * Filter, which freelancer to fetch.
     */
    where: freelancerWhereUniqueInput
  }

  /**
   * freelancer findFirst
   */
  export type freelancerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freelancer
     */
    omit?: freelancerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelancerInclude<ExtArgs> | null
    /**
     * Filter, which freelancer to fetch.
     */
    where?: freelancerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of freelancers to fetch.
     */
    orderBy?: freelancerOrderByWithRelationInput | freelancerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for freelancers.
     */
    cursor?: freelancerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` freelancers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` freelancers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of freelancers.
     */
    distinct?: FreelancerScalarFieldEnum | FreelancerScalarFieldEnum[]
  }

  /**
   * freelancer findFirstOrThrow
   */
  export type freelancerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freelancer
     */
    omit?: freelancerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelancerInclude<ExtArgs> | null
    /**
     * Filter, which freelancer to fetch.
     */
    where?: freelancerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of freelancers to fetch.
     */
    orderBy?: freelancerOrderByWithRelationInput | freelancerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for freelancers.
     */
    cursor?: freelancerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` freelancers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` freelancers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of freelancers.
     */
    distinct?: FreelancerScalarFieldEnum | FreelancerScalarFieldEnum[]
  }

  /**
   * freelancer findMany
   */
  export type freelancerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freelancer
     */
    omit?: freelancerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelancerInclude<ExtArgs> | null
    /**
     * Filter, which freelancers to fetch.
     */
    where?: freelancerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of freelancers to fetch.
     */
    orderBy?: freelancerOrderByWithRelationInput | freelancerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing freelancers.
     */
    cursor?: freelancerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` freelancers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` freelancers.
     */
    skip?: number
    distinct?: FreelancerScalarFieldEnum | FreelancerScalarFieldEnum[]
  }

  /**
   * freelancer create
   */
  export type freelancerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freelancer
     */
    omit?: freelancerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelancerInclude<ExtArgs> | null
    /**
     * The data needed to create a freelancer.
     */
    data: XOR<freelancerCreateInput, freelancerUncheckedCreateInput>
  }

  /**
   * freelancer createMany
   */
  export type freelancerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many freelancers.
     */
    data: freelancerCreateManyInput | freelancerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * freelancer createManyAndReturn
   */
  export type freelancerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the freelancer
     */
    omit?: freelancerOmit<ExtArgs> | null
    /**
     * The data used to create many freelancers.
     */
    data: freelancerCreateManyInput | freelancerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * freelancer update
   */
  export type freelancerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freelancer
     */
    omit?: freelancerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelancerInclude<ExtArgs> | null
    /**
     * The data needed to update a freelancer.
     */
    data: XOR<freelancerUpdateInput, freelancerUncheckedUpdateInput>
    /**
     * Choose, which freelancer to update.
     */
    where: freelancerWhereUniqueInput
  }

  /**
   * freelancer updateMany
   */
  export type freelancerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update freelancers.
     */
    data: XOR<freelancerUpdateManyMutationInput, freelancerUncheckedUpdateManyInput>
    /**
     * Filter which freelancers to update
     */
    where?: freelancerWhereInput
    /**
     * Limit how many freelancers to update.
     */
    limit?: number
  }

  /**
   * freelancer updateManyAndReturn
   */
  export type freelancerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the freelancer
     */
    omit?: freelancerOmit<ExtArgs> | null
    /**
     * The data used to update freelancers.
     */
    data: XOR<freelancerUpdateManyMutationInput, freelancerUncheckedUpdateManyInput>
    /**
     * Filter which freelancers to update
     */
    where?: freelancerWhereInput
    /**
     * Limit how many freelancers to update.
     */
    limit?: number
  }

  /**
   * freelancer upsert
   */
  export type freelancerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freelancer
     */
    omit?: freelancerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelancerInclude<ExtArgs> | null
    /**
     * The filter to search for the freelancer to update in case it exists.
     */
    where: freelancerWhereUniqueInput
    /**
     * In case the freelancer found by the `where` argument doesn't exist, create a new freelancer with this data.
     */
    create: XOR<freelancerCreateInput, freelancerUncheckedCreateInput>
    /**
     * In case the freelancer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<freelancerUpdateInput, freelancerUncheckedUpdateInput>
  }

  /**
   * freelancer delete
   */
  export type freelancerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freelancer
     */
    omit?: freelancerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelancerInclude<ExtArgs> | null
    /**
     * Filter which freelancer to delete.
     */
    where: freelancerWhereUniqueInput
  }

  /**
   * freelancer deleteMany
   */
  export type freelancerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which freelancers to delete
     */
    where?: freelancerWhereInput
    /**
     * Limit how many freelancers to delete.
     */
    limit?: number
  }

  /**
   * freelancer.milestones
   */
  export type freelancer$milestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestones
     */
    select?: milestonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the milestones
     */
    omit?: milestonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: milestonesInclude<ExtArgs> | null
    where?: milestonesWhereInput
    orderBy?: milestonesOrderByWithRelationInput | milestonesOrderByWithRelationInput[]
    cursor?: milestonesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MilestonesScalarFieldEnum | MilestonesScalarFieldEnum[]
  }

  /**
   * freelancer.nftcredential
   */
  export type freelancer$nftcredentialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nftcredential
     */
    select?: nftcredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nftcredential
     */
    omit?: nftcredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nftcredentialInclude<ExtArgs> | null
    where?: nftcredentialWhereInput
    orderBy?: nftcredentialOrderByWithRelationInput | nftcredentialOrderByWithRelationInput[]
    cursor?: nftcredentialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NftcredentialScalarFieldEnum | NftcredentialScalarFieldEnum[]
  }

  /**
   * freelancer.paymentsescrow
   */
  export type freelancer$paymentsescrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentsescrow
     */
    select?: paymentsescrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paymentsescrow
     */
    omit?: paymentsescrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsescrowInclude<ExtArgs> | null
    where?: paymentsescrowWhereInput
    orderBy?: paymentsescrowOrderByWithRelationInput | paymentsescrowOrderByWithRelationInput[]
    cursor?: paymentsescrowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsescrowScalarFieldEnum | PaymentsescrowScalarFieldEnum[]
  }

  /**
   * freelancer.proposals
   */
  export type freelancer$proposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposals
     */
    select?: proposalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proposals
     */
    omit?: proposalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proposalsInclude<ExtArgs> | null
    where?: proposalsWhereInput
    orderBy?: proposalsOrderByWithRelationInput | proposalsOrderByWithRelationInput[]
    cursor?: proposalsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProposalsScalarFieldEnum | ProposalsScalarFieldEnum[]
  }

  /**
   * freelancer.smartcontract
   */
  export type freelancer$smartcontractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the smartcontract
     */
    select?: smartcontractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the smartcontract
     */
    omit?: smartcontractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: smartcontractInclude<ExtArgs> | null
    where?: smartcontractWhereInput
    orderBy?: smartcontractOrderByWithRelationInput | smartcontractOrderByWithRelationInput[]
    cursor?: smartcontractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SmartcontractScalarFieldEnum | SmartcontractScalarFieldEnum[]
  }

  /**
   * freelancer without action
   */
  export type freelancerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freelancer
     */
    omit?: freelancerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelancerInclude<ExtArgs> | null
  }


  /**
   * Model jobposted
   */

  export type AggregateJobposted = {
    _count: JobpostedCountAggregateOutputType | null
    _avg: JobpostedAvgAggregateOutputType | null
    _sum: JobpostedSumAggregateOutputType | null
    _min: JobpostedMinAggregateOutputType | null
    _max: JobpostedMaxAggregateOutputType | null
  }

  export type JobpostedAvgAggregateOutputType = {
    id: number | null
    clientid: number | null
    budget: number | null
  }

  export type JobpostedSumAggregateOutputType = {
    id: number | null
    clientid: number | null
    budget: number | null
  }

  export type JobpostedMinAggregateOutputType = {
    id: number | null
    clientid: number | null
    name: string | null
    description: string | null
    location: string | null
    joblevel: string | null
    budget: number | null
    contracttohire: boolean | null
    qualificationspreferred: string | null
    postingtime: Date | null
    postingdate: Date | null
    validtill: Date | null
    companyname: string | null
    customizable: boolean | null
  }

  export type JobpostedMaxAggregateOutputType = {
    id: number | null
    clientid: number | null
    name: string | null
    description: string | null
    location: string | null
    joblevel: string | null
    budget: number | null
    contracttohire: boolean | null
    qualificationspreferred: string | null
    postingtime: Date | null
    postingdate: Date | null
    validtill: Date | null
    companyname: string | null
    customizable: boolean | null
  }

  export type JobpostedCountAggregateOutputType = {
    id: number
    clientid: number
    name: number
    description: number
    tags: number
    location: number
    joblevel: number
    budget: number
    contracttohire: number
    qualificationspreferred: number
    postingtime: number
    postingdate: number
    validtill: number
    companyname: number
    customizable: number
    photourls: number
    _all: number
  }


  export type JobpostedAvgAggregateInputType = {
    id?: true
    clientid?: true
    budget?: true
  }

  export type JobpostedSumAggregateInputType = {
    id?: true
    clientid?: true
    budget?: true
  }

  export type JobpostedMinAggregateInputType = {
    id?: true
    clientid?: true
    name?: true
    description?: true
    location?: true
    joblevel?: true
    budget?: true
    contracttohire?: true
    qualificationspreferred?: true
    postingtime?: true
    postingdate?: true
    validtill?: true
    companyname?: true
    customizable?: true
  }

  export type JobpostedMaxAggregateInputType = {
    id?: true
    clientid?: true
    name?: true
    description?: true
    location?: true
    joblevel?: true
    budget?: true
    contracttohire?: true
    qualificationspreferred?: true
    postingtime?: true
    postingdate?: true
    validtill?: true
    companyname?: true
    customizable?: true
  }

  export type JobpostedCountAggregateInputType = {
    id?: true
    clientid?: true
    name?: true
    description?: true
    tags?: true
    location?: true
    joblevel?: true
    budget?: true
    contracttohire?: true
    qualificationspreferred?: true
    postingtime?: true
    postingdate?: true
    validtill?: true
    companyname?: true
    customizable?: true
    photourls?: true
    _all?: true
  }

  export type JobpostedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobposted to aggregate.
     */
    where?: jobpostedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobposteds to fetch.
     */
    orderBy?: jobpostedOrderByWithRelationInput | jobpostedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jobpostedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobposteds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobposteds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jobposteds
    **/
    _count?: true | JobpostedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobpostedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobpostedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobpostedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobpostedMaxAggregateInputType
  }

  export type GetJobpostedAggregateType<T extends JobpostedAggregateArgs> = {
        [P in keyof T & keyof AggregateJobposted]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobposted[P]>
      : GetScalarType<T[P], AggregateJobposted[P]>
  }




  export type jobpostedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobpostedWhereInput
    orderBy?: jobpostedOrderByWithAggregationInput | jobpostedOrderByWithAggregationInput[]
    by: JobpostedScalarFieldEnum[] | JobpostedScalarFieldEnum
    having?: jobpostedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobpostedCountAggregateInputType | true
    _avg?: JobpostedAvgAggregateInputType
    _sum?: JobpostedSumAggregateInputType
    _min?: JobpostedMinAggregateInputType
    _max?: JobpostedMaxAggregateInputType
  }

  export type JobpostedGroupByOutputType = {
    id: number
    clientid: number | null
    name: string
    description: string
    tags: string[]
    location: string | null
    joblevel: string | null
    budget: number | null
    contracttohire: boolean | null
    qualificationspreferred: string | null
    postingtime: Date | null
    postingdate: Date | null
    validtill: Date | null
    companyname: string | null
    customizable: boolean | null
    photourls: string[]
    _count: JobpostedCountAggregateOutputType | null
    _avg: JobpostedAvgAggregateOutputType | null
    _sum: JobpostedSumAggregateOutputType | null
    _min: JobpostedMinAggregateOutputType | null
    _max: JobpostedMaxAggregateOutputType | null
  }

  type GetJobpostedGroupByPayload<T extends jobpostedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobpostedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobpostedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobpostedGroupByOutputType[P]>
            : GetScalarType<T[P], JobpostedGroupByOutputType[P]>
        }
      >
    >


  export type jobpostedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientid?: boolean
    name?: boolean
    description?: boolean
    tags?: boolean
    location?: boolean
    joblevel?: boolean
    budget?: boolean
    contracttohire?: boolean
    qualificationspreferred?: boolean
    postingtime?: boolean
    postingdate?: boolean
    validtill?: boolean
    companyname?: boolean
    customizable?: boolean
    photourls?: boolean
    client?: boolean | jobposted$clientArgs<ExtArgs>
    message?: boolean | jobposted$messageArgs<ExtArgs>
    milestones?: boolean | jobposted$milestonesArgs<ExtArgs>
    nftcredential?: boolean | jobposted$nftcredentialArgs<ExtArgs>
    proposals?: boolean | jobposted$proposalsArgs<ExtArgs>
    smartcontract?: boolean | jobposted$smartcontractArgs<ExtArgs>
    _count?: boolean | JobpostedCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobposted"]>

  export type jobpostedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientid?: boolean
    name?: boolean
    description?: boolean
    tags?: boolean
    location?: boolean
    joblevel?: boolean
    budget?: boolean
    contracttohire?: boolean
    qualificationspreferred?: boolean
    postingtime?: boolean
    postingdate?: boolean
    validtill?: boolean
    companyname?: boolean
    customizable?: boolean
    photourls?: boolean
    client?: boolean | jobposted$clientArgs<ExtArgs>
  }, ExtArgs["result"]["jobposted"]>

  export type jobpostedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientid?: boolean
    name?: boolean
    description?: boolean
    tags?: boolean
    location?: boolean
    joblevel?: boolean
    budget?: boolean
    contracttohire?: boolean
    qualificationspreferred?: boolean
    postingtime?: boolean
    postingdate?: boolean
    validtill?: boolean
    companyname?: boolean
    customizable?: boolean
    photourls?: boolean
    client?: boolean | jobposted$clientArgs<ExtArgs>
  }, ExtArgs["result"]["jobposted"]>

  export type jobpostedSelectScalar = {
    id?: boolean
    clientid?: boolean
    name?: boolean
    description?: boolean
    tags?: boolean
    location?: boolean
    joblevel?: boolean
    budget?: boolean
    contracttohire?: boolean
    qualificationspreferred?: boolean
    postingtime?: boolean
    postingdate?: boolean
    validtill?: boolean
    companyname?: boolean
    customizable?: boolean
    photourls?: boolean
  }

  export type jobpostedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientid" | "name" | "description" | "tags" | "location" | "joblevel" | "budget" | "contracttohire" | "qualificationspreferred" | "postingtime" | "postingdate" | "validtill" | "companyname" | "customizable" | "photourls", ExtArgs["result"]["jobposted"]>
  export type jobpostedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | jobposted$clientArgs<ExtArgs>
    message?: boolean | jobposted$messageArgs<ExtArgs>
    milestones?: boolean | jobposted$milestonesArgs<ExtArgs>
    nftcredential?: boolean | jobposted$nftcredentialArgs<ExtArgs>
    proposals?: boolean | jobposted$proposalsArgs<ExtArgs>
    smartcontract?: boolean | jobposted$smartcontractArgs<ExtArgs>
    _count?: boolean | JobpostedCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type jobpostedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | jobposted$clientArgs<ExtArgs>
  }
  export type jobpostedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | jobposted$clientArgs<ExtArgs>
  }

  export type $jobpostedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "jobposted"
    objects: {
      client: Prisma.$clientPayload<ExtArgs> | null
      message: Prisma.$messagePayload<ExtArgs>[]
      milestones: Prisma.$milestonesPayload<ExtArgs>[]
      nftcredential: Prisma.$nftcredentialPayload<ExtArgs>[]
      proposals: Prisma.$proposalsPayload<ExtArgs>[]
      smartcontract: Prisma.$smartcontractPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientid: number | null
      name: string
      description: string
      tags: string[]
      location: string | null
      joblevel: string | null
      budget: number | null
      contracttohire: boolean | null
      qualificationspreferred: string | null
      postingtime: Date | null
      postingdate: Date | null
      validtill: Date | null
      companyname: string | null
      customizable: boolean | null
      photourls: string[]
    }, ExtArgs["result"]["jobposted"]>
    composites: {}
  }

  type jobpostedGetPayload<S extends boolean | null | undefined | jobpostedDefaultArgs> = $Result.GetResult<Prisma.$jobpostedPayload, S>

  type jobpostedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<jobpostedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobpostedCountAggregateInputType | true
    }

  export interface jobpostedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['jobposted'], meta: { name: 'jobposted' } }
    /**
     * Find zero or one Jobposted that matches the filter.
     * @param {jobpostedFindUniqueArgs} args - Arguments to find a Jobposted
     * @example
     * // Get one Jobposted
     * const jobposted = await prisma.jobposted.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends jobpostedFindUniqueArgs>(args: SelectSubset<T, jobpostedFindUniqueArgs<ExtArgs>>): Prisma__jobpostedClient<$Result.GetResult<Prisma.$jobpostedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jobposted that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {jobpostedFindUniqueOrThrowArgs} args - Arguments to find a Jobposted
     * @example
     * // Get one Jobposted
     * const jobposted = await prisma.jobposted.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends jobpostedFindUniqueOrThrowArgs>(args: SelectSubset<T, jobpostedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__jobpostedClient<$Result.GetResult<Prisma.$jobpostedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobposted that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobpostedFindFirstArgs} args - Arguments to find a Jobposted
     * @example
     * // Get one Jobposted
     * const jobposted = await prisma.jobposted.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends jobpostedFindFirstArgs>(args?: SelectSubset<T, jobpostedFindFirstArgs<ExtArgs>>): Prisma__jobpostedClient<$Result.GetResult<Prisma.$jobpostedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobposted that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobpostedFindFirstOrThrowArgs} args - Arguments to find a Jobposted
     * @example
     * // Get one Jobposted
     * const jobposted = await prisma.jobposted.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends jobpostedFindFirstOrThrowArgs>(args?: SelectSubset<T, jobpostedFindFirstOrThrowArgs<ExtArgs>>): Prisma__jobpostedClient<$Result.GetResult<Prisma.$jobpostedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobposteds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobpostedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobposteds
     * const jobposteds = await prisma.jobposted.findMany()
     * 
     * // Get first 10 Jobposteds
     * const jobposteds = await prisma.jobposted.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobpostedWithIdOnly = await prisma.jobposted.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends jobpostedFindManyArgs>(args?: SelectSubset<T, jobpostedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobpostedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jobposted.
     * @param {jobpostedCreateArgs} args - Arguments to create a Jobposted.
     * @example
     * // Create one Jobposted
     * const Jobposted = await prisma.jobposted.create({
     *   data: {
     *     // ... data to create a Jobposted
     *   }
     * })
     * 
     */
    create<T extends jobpostedCreateArgs>(args: SelectSubset<T, jobpostedCreateArgs<ExtArgs>>): Prisma__jobpostedClient<$Result.GetResult<Prisma.$jobpostedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobposteds.
     * @param {jobpostedCreateManyArgs} args - Arguments to create many Jobposteds.
     * @example
     * // Create many Jobposteds
     * const jobposted = await prisma.jobposted.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends jobpostedCreateManyArgs>(args?: SelectSubset<T, jobpostedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobposteds and returns the data saved in the database.
     * @param {jobpostedCreateManyAndReturnArgs} args - Arguments to create many Jobposteds.
     * @example
     * // Create many Jobposteds
     * const jobposted = await prisma.jobposted.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobposteds and only return the `id`
     * const jobpostedWithIdOnly = await prisma.jobposted.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends jobpostedCreateManyAndReturnArgs>(args?: SelectSubset<T, jobpostedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobpostedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Jobposted.
     * @param {jobpostedDeleteArgs} args - Arguments to delete one Jobposted.
     * @example
     * // Delete one Jobposted
     * const Jobposted = await prisma.jobposted.delete({
     *   where: {
     *     // ... filter to delete one Jobposted
     *   }
     * })
     * 
     */
    delete<T extends jobpostedDeleteArgs>(args: SelectSubset<T, jobpostedDeleteArgs<ExtArgs>>): Prisma__jobpostedClient<$Result.GetResult<Prisma.$jobpostedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jobposted.
     * @param {jobpostedUpdateArgs} args - Arguments to update one Jobposted.
     * @example
     * // Update one Jobposted
     * const jobposted = await prisma.jobposted.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends jobpostedUpdateArgs>(args: SelectSubset<T, jobpostedUpdateArgs<ExtArgs>>): Prisma__jobpostedClient<$Result.GetResult<Prisma.$jobpostedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobposteds.
     * @param {jobpostedDeleteManyArgs} args - Arguments to filter Jobposteds to delete.
     * @example
     * // Delete a few Jobposteds
     * const { count } = await prisma.jobposted.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends jobpostedDeleteManyArgs>(args?: SelectSubset<T, jobpostedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobposteds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobpostedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobposteds
     * const jobposted = await prisma.jobposted.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends jobpostedUpdateManyArgs>(args: SelectSubset<T, jobpostedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobposteds and returns the data updated in the database.
     * @param {jobpostedUpdateManyAndReturnArgs} args - Arguments to update many Jobposteds.
     * @example
     * // Update many Jobposteds
     * const jobposted = await prisma.jobposted.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jobposteds and only return the `id`
     * const jobpostedWithIdOnly = await prisma.jobposted.updateManyAndReturn({
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
    updateManyAndReturn<T extends jobpostedUpdateManyAndReturnArgs>(args: SelectSubset<T, jobpostedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobpostedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Jobposted.
     * @param {jobpostedUpsertArgs} args - Arguments to update or create a Jobposted.
     * @example
     * // Update or create a Jobposted
     * const jobposted = await prisma.jobposted.upsert({
     *   create: {
     *     // ... data to create a Jobposted
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jobposted we want to update
     *   }
     * })
     */
    upsert<T extends jobpostedUpsertArgs>(args: SelectSubset<T, jobpostedUpsertArgs<ExtArgs>>): Prisma__jobpostedClient<$Result.GetResult<Prisma.$jobpostedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobposteds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobpostedCountArgs} args - Arguments to filter Jobposteds to count.
     * @example
     * // Count the number of Jobposteds
     * const count = await prisma.jobposted.count({
     *   where: {
     *     // ... the filter for the Jobposteds we want to count
     *   }
     * })
    **/
    count<T extends jobpostedCountArgs>(
      args?: Subset<T, jobpostedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobpostedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jobposted.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobpostedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobpostedAggregateArgs>(args: Subset<T, JobpostedAggregateArgs>): Prisma.PrismaPromise<GetJobpostedAggregateType<T>>

    /**
     * Group by Jobposted.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobpostedGroupByArgs} args - Group by arguments.
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
      T extends jobpostedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jobpostedGroupByArgs['orderBy'] }
        : { orderBy?: jobpostedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, jobpostedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobpostedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the jobposted model
   */
  readonly fields: jobpostedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for jobposted.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jobpostedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends jobposted$clientArgs<ExtArgs> = {}>(args?: Subset<T, jobposted$clientArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    message<T extends jobposted$messageArgs<ExtArgs> = {}>(args?: Subset<T, jobposted$messageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    milestones<T extends jobposted$milestonesArgs<ExtArgs> = {}>(args?: Subset<T, jobposted$milestonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$milestonesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    nftcredential<T extends jobposted$nftcredentialArgs<ExtArgs> = {}>(args?: Subset<T, jobposted$nftcredentialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nftcredentialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    proposals<T extends jobposted$proposalsArgs<ExtArgs> = {}>(args?: Subset<T, jobposted$proposalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proposalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    smartcontract<T extends jobposted$smartcontractArgs<ExtArgs> = {}>(args?: Subset<T, jobposted$smartcontractArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$smartcontractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the jobposted model
   */
  interface jobpostedFieldRefs {
    readonly id: FieldRef<"jobposted", 'Int'>
    readonly clientid: FieldRef<"jobposted", 'Int'>
    readonly name: FieldRef<"jobposted", 'String'>
    readonly description: FieldRef<"jobposted", 'String'>
    readonly tags: FieldRef<"jobposted", 'String[]'>
    readonly location: FieldRef<"jobposted", 'String'>
    readonly joblevel: FieldRef<"jobposted", 'String'>
    readonly budget: FieldRef<"jobposted", 'Int'>
    readonly contracttohire: FieldRef<"jobposted", 'Boolean'>
    readonly qualificationspreferred: FieldRef<"jobposted", 'String'>
    readonly postingtime: FieldRef<"jobposted", 'DateTime'>
    readonly postingdate: FieldRef<"jobposted", 'DateTime'>
    readonly validtill: FieldRef<"jobposted", 'DateTime'>
    readonly companyname: FieldRef<"jobposted", 'String'>
    readonly customizable: FieldRef<"jobposted", 'Boolean'>
    readonly photourls: FieldRef<"jobposted", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * jobposted findUnique
   */
  export type jobpostedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobposted
     */
    select?: jobpostedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobposted
     */
    omit?: jobpostedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobpostedInclude<ExtArgs> | null
    /**
     * Filter, which jobposted to fetch.
     */
    where: jobpostedWhereUniqueInput
  }

  /**
   * jobposted findUniqueOrThrow
   */
  export type jobpostedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobposted
     */
    select?: jobpostedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobposted
     */
    omit?: jobpostedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobpostedInclude<ExtArgs> | null
    /**
     * Filter, which jobposted to fetch.
     */
    where: jobpostedWhereUniqueInput
  }

  /**
   * jobposted findFirst
   */
  export type jobpostedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobposted
     */
    select?: jobpostedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobposted
     */
    omit?: jobpostedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobpostedInclude<ExtArgs> | null
    /**
     * Filter, which jobposted to fetch.
     */
    where?: jobpostedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobposteds to fetch.
     */
    orderBy?: jobpostedOrderByWithRelationInput | jobpostedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobposteds.
     */
    cursor?: jobpostedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobposteds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobposteds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobposteds.
     */
    distinct?: JobpostedScalarFieldEnum | JobpostedScalarFieldEnum[]
  }

  /**
   * jobposted findFirstOrThrow
   */
  export type jobpostedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobposted
     */
    select?: jobpostedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobposted
     */
    omit?: jobpostedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobpostedInclude<ExtArgs> | null
    /**
     * Filter, which jobposted to fetch.
     */
    where?: jobpostedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobposteds to fetch.
     */
    orderBy?: jobpostedOrderByWithRelationInput | jobpostedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobposteds.
     */
    cursor?: jobpostedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobposteds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobposteds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobposteds.
     */
    distinct?: JobpostedScalarFieldEnum | JobpostedScalarFieldEnum[]
  }

  /**
   * jobposted findMany
   */
  export type jobpostedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobposted
     */
    select?: jobpostedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobposted
     */
    omit?: jobpostedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobpostedInclude<ExtArgs> | null
    /**
     * Filter, which jobposteds to fetch.
     */
    where?: jobpostedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobposteds to fetch.
     */
    orderBy?: jobpostedOrderByWithRelationInput | jobpostedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jobposteds.
     */
    cursor?: jobpostedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobposteds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobposteds.
     */
    skip?: number
    distinct?: JobpostedScalarFieldEnum | JobpostedScalarFieldEnum[]
  }

  /**
   * jobposted create
   */
  export type jobpostedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobposted
     */
    select?: jobpostedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobposted
     */
    omit?: jobpostedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobpostedInclude<ExtArgs> | null
    /**
     * The data needed to create a jobposted.
     */
    data: XOR<jobpostedCreateInput, jobpostedUncheckedCreateInput>
  }

  /**
   * jobposted createMany
   */
  export type jobpostedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jobposteds.
     */
    data: jobpostedCreateManyInput | jobpostedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * jobposted createManyAndReturn
   */
  export type jobpostedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobposted
     */
    select?: jobpostedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the jobposted
     */
    omit?: jobpostedOmit<ExtArgs> | null
    /**
     * The data used to create many jobposteds.
     */
    data: jobpostedCreateManyInput | jobpostedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobpostedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * jobposted update
   */
  export type jobpostedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobposted
     */
    select?: jobpostedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobposted
     */
    omit?: jobpostedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobpostedInclude<ExtArgs> | null
    /**
     * The data needed to update a jobposted.
     */
    data: XOR<jobpostedUpdateInput, jobpostedUncheckedUpdateInput>
    /**
     * Choose, which jobposted to update.
     */
    where: jobpostedWhereUniqueInput
  }

  /**
   * jobposted updateMany
   */
  export type jobpostedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jobposteds.
     */
    data: XOR<jobpostedUpdateManyMutationInput, jobpostedUncheckedUpdateManyInput>
    /**
     * Filter which jobposteds to update
     */
    where?: jobpostedWhereInput
    /**
     * Limit how many jobposteds to update.
     */
    limit?: number
  }

  /**
   * jobposted updateManyAndReturn
   */
  export type jobpostedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobposted
     */
    select?: jobpostedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the jobposted
     */
    omit?: jobpostedOmit<ExtArgs> | null
    /**
     * The data used to update jobposteds.
     */
    data: XOR<jobpostedUpdateManyMutationInput, jobpostedUncheckedUpdateManyInput>
    /**
     * Filter which jobposteds to update
     */
    where?: jobpostedWhereInput
    /**
     * Limit how many jobposteds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobpostedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * jobposted upsert
   */
  export type jobpostedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobposted
     */
    select?: jobpostedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobposted
     */
    omit?: jobpostedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobpostedInclude<ExtArgs> | null
    /**
     * The filter to search for the jobposted to update in case it exists.
     */
    where: jobpostedWhereUniqueInput
    /**
     * In case the jobposted found by the `where` argument doesn't exist, create a new jobposted with this data.
     */
    create: XOR<jobpostedCreateInput, jobpostedUncheckedCreateInput>
    /**
     * In case the jobposted was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jobpostedUpdateInput, jobpostedUncheckedUpdateInput>
  }

  /**
   * jobposted delete
   */
  export type jobpostedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobposted
     */
    select?: jobpostedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobposted
     */
    omit?: jobpostedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobpostedInclude<ExtArgs> | null
    /**
     * Filter which jobposted to delete.
     */
    where: jobpostedWhereUniqueInput
  }

  /**
   * jobposted deleteMany
   */
  export type jobpostedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobposteds to delete
     */
    where?: jobpostedWhereInput
    /**
     * Limit how many jobposteds to delete.
     */
    limit?: number
  }

  /**
   * jobposted.client
   */
  export type jobposted$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    where?: clientWhereInput
  }

  /**
   * jobposted.message
   */
  export type jobposted$messageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    where?: messageWhereInput
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    cursor?: messageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * jobposted.milestones
   */
  export type jobposted$milestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestones
     */
    select?: milestonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the milestones
     */
    omit?: milestonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: milestonesInclude<ExtArgs> | null
    where?: milestonesWhereInput
    orderBy?: milestonesOrderByWithRelationInput | milestonesOrderByWithRelationInput[]
    cursor?: milestonesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MilestonesScalarFieldEnum | MilestonesScalarFieldEnum[]
  }

  /**
   * jobposted.nftcredential
   */
  export type jobposted$nftcredentialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nftcredential
     */
    select?: nftcredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nftcredential
     */
    omit?: nftcredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nftcredentialInclude<ExtArgs> | null
    where?: nftcredentialWhereInput
    orderBy?: nftcredentialOrderByWithRelationInput | nftcredentialOrderByWithRelationInput[]
    cursor?: nftcredentialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NftcredentialScalarFieldEnum | NftcredentialScalarFieldEnum[]
  }

  /**
   * jobposted.proposals
   */
  export type jobposted$proposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposals
     */
    select?: proposalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proposals
     */
    omit?: proposalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proposalsInclude<ExtArgs> | null
    where?: proposalsWhereInput
    orderBy?: proposalsOrderByWithRelationInput | proposalsOrderByWithRelationInput[]
    cursor?: proposalsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProposalsScalarFieldEnum | ProposalsScalarFieldEnum[]
  }

  /**
   * jobposted.smartcontract
   */
  export type jobposted$smartcontractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the smartcontract
     */
    select?: smartcontractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the smartcontract
     */
    omit?: smartcontractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: smartcontractInclude<ExtArgs> | null
    where?: smartcontractWhereInput
    orderBy?: smartcontractOrderByWithRelationInput | smartcontractOrderByWithRelationInput[]
    cursor?: smartcontractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SmartcontractScalarFieldEnum | SmartcontractScalarFieldEnum[]
  }

  /**
   * jobposted without action
   */
  export type jobpostedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobposted
     */
    select?: jobpostedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobposted
     */
    omit?: jobpostedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobpostedInclude<ExtArgs> | null
  }


  /**
   * Model message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    senderid: number | null
    receiverid: number | null
    jobid: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    senderid: number | null
    receiverid: number | null
    jobid: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    senderid: number | null
    receiverid: number | null
    jobid: number | null
    messagetext: string | null
    messagetype: $Enums.message_type | null
    attachmenturl: string | null
    timestamp: Date | null
    isread: boolean | null
    issystem: boolean | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    senderid: number | null
    receiverid: number | null
    jobid: number | null
    messagetext: string | null
    messagetype: $Enums.message_type | null
    attachmenturl: string | null
    timestamp: Date | null
    isread: boolean | null
    issystem: boolean | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    senderid: number
    receiverid: number
    jobid: number
    messagetext: number
    messagetype: number
    attachmenturl: number
    timestamp: number
    isread: number
    issystem: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    senderid?: true
    receiverid?: true
    jobid?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    senderid?: true
    receiverid?: true
    jobid?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    senderid?: true
    receiverid?: true
    jobid?: true
    messagetext?: true
    messagetype?: true
    attachmenturl?: true
    timestamp?: true
    isread?: true
    issystem?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    senderid?: true
    receiverid?: true
    jobid?: true
    messagetext?: true
    messagetype?: true
    attachmenturl?: true
    timestamp?: true
    isread?: true
    issystem?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    senderid?: true
    receiverid?: true
    jobid?: true
    messagetext?: true
    messagetype?: true
    attachmenturl?: true
    timestamp?: true
    isread?: true
    issystem?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which message to aggregate.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type messageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messageWhereInput
    orderBy?: messageOrderByWithAggregationInput | messageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: messageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    senderid: number
    receiverid: number
    jobid: number | null
    messagetext: string | null
    messagetype: $Enums.message_type | null
    attachmenturl: string | null
    timestamp: Date | null
    isread: boolean | null
    issystem: boolean | null
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends messageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type messageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderid?: boolean
    receiverid?: boolean
    jobid?: boolean
    messagetext?: boolean
    messagetype?: boolean
    attachmenturl?: boolean
    timestamp?: boolean
    isread?: boolean
    issystem?: boolean
    jobposted?: boolean | message$jobpostedArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type messageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderid?: boolean
    receiverid?: boolean
    jobid?: boolean
    messagetext?: boolean
    messagetype?: boolean
    attachmenturl?: boolean
    timestamp?: boolean
    isread?: boolean
    issystem?: boolean
    jobposted?: boolean | message$jobpostedArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type messageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderid?: boolean
    receiverid?: boolean
    jobid?: boolean
    messagetext?: boolean
    messagetype?: boolean
    attachmenturl?: boolean
    timestamp?: boolean
    isread?: boolean
    issystem?: boolean
    jobposted?: boolean | message$jobpostedArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type messageSelectScalar = {
    id?: boolean
    senderid?: boolean
    receiverid?: boolean
    jobid?: boolean
    messagetext?: boolean
    messagetype?: boolean
    attachmenturl?: boolean
    timestamp?: boolean
    isread?: boolean
    issystem?: boolean
  }

  export type messageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderid" | "receiverid" | "jobid" | "messagetext" | "messagetype" | "attachmenturl" | "timestamp" | "isread" | "issystem", ExtArgs["result"]["message"]>
  export type messageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobposted?: boolean | message$jobpostedArgs<ExtArgs>
  }
  export type messageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobposted?: boolean | message$jobpostedArgs<ExtArgs>
  }
  export type messageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobposted?: boolean | message$jobpostedArgs<ExtArgs>
  }

  export type $messagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "message"
    objects: {
      jobposted: Prisma.$jobpostedPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      senderid: number
      receiverid: number
      jobid: number | null
      messagetext: string | null
      messagetype: $Enums.message_type | null
      attachmenturl: string | null
      timestamp: Date | null
      isread: boolean | null
      issystem: boolean | null
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type messageGetPayload<S extends boolean | null | undefined | messageDefaultArgs> = $Result.GetResult<Prisma.$messagePayload, S>

  type messageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface messageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['message'], meta: { name: 'message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {messageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messageFindUniqueArgs>(args: SelectSubset<T, messageFindUniqueArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messageFindUniqueOrThrowArgs>(args: SelectSubset<T, messageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messageFindFirstArgs>(args?: SelectSubset<T, messageFindFirstArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messageFindFirstOrThrowArgs>(args?: SelectSubset<T, messageFindFirstOrThrowArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends messageFindManyArgs>(args?: SelectSubset<T, messageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {messageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends messageCreateArgs>(args: SelectSubset<T, messageCreateArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {messageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messageCreateManyArgs>(args?: SelectSubset<T, messageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {messageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends messageCreateManyAndReturnArgs>(args?: SelectSubset<T, messageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {messageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends messageDeleteArgs>(args: SelectSubset<T, messageDeleteArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {messageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messageUpdateArgs>(args: SelectSubset<T, messageUpdateArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {messageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messageDeleteManyArgs>(args?: SelectSubset<T, messageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messageUpdateManyArgs>(args: SelectSubset<T, messageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {messageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends messageUpdateManyAndReturnArgs>(args: SelectSubset<T, messageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {messageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends messageUpsertArgs>(args: SelectSubset<T, messageUpsertArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends messageCountArgs>(
      args?: Subset<T, messageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageGroupByArgs} args - Group by arguments.
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
      T extends messageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messageGroupByArgs['orderBy'] }
        : { orderBy?: messageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, messageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the message model
   */
  readonly fields: messageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobposted<T extends message$jobpostedArgs<ExtArgs> = {}>(args?: Subset<T, message$jobpostedArgs<ExtArgs>>): Prisma__jobpostedClient<$Result.GetResult<Prisma.$jobpostedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the message model
   */
  interface messageFieldRefs {
    readonly id: FieldRef<"message", 'Int'>
    readonly senderid: FieldRef<"message", 'Int'>
    readonly receiverid: FieldRef<"message", 'Int'>
    readonly jobid: FieldRef<"message", 'Int'>
    readonly messagetext: FieldRef<"message", 'String'>
    readonly messagetype: FieldRef<"message", 'message_type'>
    readonly attachmenturl: FieldRef<"message", 'String'>
    readonly timestamp: FieldRef<"message", 'DateTime'>
    readonly isread: FieldRef<"message", 'Boolean'>
    readonly issystem: FieldRef<"message", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * message findUnique
   */
  export type messageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message findUniqueOrThrow
   */
  export type messageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message findFirst
   */
  export type messageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * message findFirstOrThrow
   */
  export type messageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * message findMany
   */
  export type messageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messages.
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * message create
   */
  export type messageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * The data needed to create a message.
     */
    data: XOR<messageCreateInput, messageUncheckedCreateInput>
  }

  /**
   * message createMany
   */
  export type messageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: messageCreateManyInput | messageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * message createManyAndReturn
   */
  export type messageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * The data used to create many messages.
     */
    data: messageCreateManyInput | messageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * message update
   */
  export type messageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * The data needed to update a message.
     */
    data: XOR<messageUpdateInput, messageUncheckedUpdateInput>
    /**
     * Choose, which message to update.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message updateMany
   */
  export type messageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messageUpdateManyMutationInput, messageUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messageWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * message updateManyAndReturn
   */
  export type messageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * The data used to update messages.
     */
    data: XOR<messageUpdateManyMutationInput, messageUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messageWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * message upsert
   */
  export type messageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * The filter to search for the message to update in case it exists.
     */
    where: messageWhereUniqueInput
    /**
     * In case the message found by the `where` argument doesn't exist, create a new message with this data.
     */
    create: XOR<messageCreateInput, messageUncheckedCreateInput>
    /**
     * In case the message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messageUpdateInput, messageUncheckedUpdateInput>
  }

  /**
   * message delete
   */
  export type messageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter which message to delete.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message deleteMany
   */
  export type messageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messageWhereInput
    /**
     * Limit how many messages to delete.
     */
    limit?: number
  }

  /**
   * message.jobposted
   */
  export type message$jobpostedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobposted
     */
    select?: jobpostedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobposted
     */
    omit?: jobpostedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobpostedInclude<ExtArgs> | null
    where?: jobpostedWhereInput
  }

  /**
   * message without action
   */
  export type messageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
  }


  /**
   * Model milestones
   */

  export type AggregateMilestones = {
    _count: MilestonesCountAggregateOutputType | null
    _avg: MilestonesAvgAggregateOutputType | null
    _sum: MilestonesSumAggregateOutputType | null
    _min: MilestonesMinAggregateOutputType | null
    _max: MilestonesMaxAggregateOutputType | null
  }

  export type MilestonesAvgAggregateOutputType = {
    id: number | null
    jobid: number | null
    freelancerid: number | null
    amount: number | null
  }

  export type MilestonesSumAggregateOutputType = {
    id: number | null
    jobid: number | null
    freelancerid: number | null
    amount: number | null
  }

  export type MilestonesMinAggregateOutputType = {
    id: number | null
    jobid: number | null
    freelancerid: number | null
    title: string | null
    description: string | null
    duedate: Date | null
    amount: number | null
    status: $Enums.milestone_status | null
  }

  export type MilestonesMaxAggregateOutputType = {
    id: number | null
    jobid: number | null
    freelancerid: number | null
    title: string | null
    description: string | null
    duedate: Date | null
    amount: number | null
    status: $Enums.milestone_status | null
  }

  export type MilestonesCountAggregateOutputType = {
    id: number
    jobid: number
    freelancerid: number
    title: number
    description: number
    duedate: number
    amount: number
    status: number
    _all: number
  }


  export type MilestonesAvgAggregateInputType = {
    id?: true
    jobid?: true
    freelancerid?: true
    amount?: true
  }

  export type MilestonesSumAggregateInputType = {
    id?: true
    jobid?: true
    freelancerid?: true
    amount?: true
  }

  export type MilestonesMinAggregateInputType = {
    id?: true
    jobid?: true
    freelancerid?: true
    title?: true
    description?: true
    duedate?: true
    amount?: true
    status?: true
  }

  export type MilestonesMaxAggregateInputType = {
    id?: true
    jobid?: true
    freelancerid?: true
    title?: true
    description?: true
    duedate?: true
    amount?: true
    status?: true
  }

  export type MilestonesCountAggregateInputType = {
    id?: true
    jobid?: true
    freelancerid?: true
    title?: true
    description?: true
    duedate?: true
    amount?: true
    status?: true
    _all?: true
  }

  export type MilestonesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which milestones to aggregate.
     */
    where?: milestonesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of milestones to fetch.
     */
    orderBy?: milestonesOrderByWithRelationInput | milestonesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: milestonesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned milestones
    **/
    _count?: true | MilestonesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MilestonesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MilestonesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MilestonesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MilestonesMaxAggregateInputType
  }

  export type GetMilestonesAggregateType<T extends MilestonesAggregateArgs> = {
        [P in keyof T & keyof AggregateMilestones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMilestones[P]>
      : GetScalarType<T[P], AggregateMilestones[P]>
  }




  export type milestonesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: milestonesWhereInput
    orderBy?: milestonesOrderByWithAggregationInput | milestonesOrderByWithAggregationInput[]
    by: MilestonesScalarFieldEnum[] | MilestonesScalarFieldEnum
    having?: milestonesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MilestonesCountAggregateInputType | true
    _avg?: MilestonesAvgAggregateInputType
    _sum?: MilestonesSumAggregateInputType
    _min?: MilestonesMinAggregateInputType
    _max?: MilestonesMaxAggregateInputType
  }

  export type MilestonesGroupByOutputType = {
    id: number
    jobid: number | null
    freelancerid: number | null
    title: string
    description: string | null
    duedate: Date | null
    amount: number
    status: $Enums.milestone_status | null
    _count: MilestonesCountAggregateOutputType | null
    _avg: MilestonesAvgAggregateOutputType | null
    _sum: MilestonesSumAggregateOutputType | null
    _min: MilestonesMinAggregateOutputType | null
    _max: MilestonesMaxAggregateOutputType | null
  }

  type GetMilestonesGroupByPayload<T extends milestonesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MilestonesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MilestonesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MilestonesGroupByOutputType[P]>
            : GetScalarType<T[P], MilestonesGroupByOutputType[P]>
        }
      >
    >


  export type milestonesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobid?: boolean
    freelancerid?: boolean
    title?: boolean
    description?: boolean
    duedate?: boolean
    amount?: boolean
    status?: boolean
    disputes?: boolean | milestones$disputesArgs<ExtArgs>
    freelancer?: boolean | milestones$freelancerArgs<ExtArgs>
    jobposted?: boolean | milestones$jobpostedArgs<ExtArgs>
    paymentsescrow?: boolean | milestones$paymentsescrowArgs<ExtArgs>
    _count?: boolean | MilestonesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestones"]>

  export type milestonesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobid?: boolean
    freelancerid?: boolean
    title?: boolean
    description?: boolean
    duedate?: boolean
    amount?: boolean
    status?: boolean
    freelancer?: boolean | milestones$freelancerArgs<ExtArgs>
    jobposted?: boolean | milestones$jobpostedArgs<ExtArgs>
  }, ExtArgs["result"]["milestones"]>

  export type milestonesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobid?: boolean
    freelancerid?: boolean
    title?: boolean
    description?: boolean
    duedate?: boolean
    amount?: boolean
    status?: boolean
    freelancer?: boolean | milestones$freelancerArgs<ExtArgs>
    jobposted?: boolean | milestones$jobpostedArgs<ExtArgs>
  }, ExtArgs["result"]["milestones"]>

  export type milestonesSelectScalar = {
    id?: boolean
    jobid?: boolean
    freelancerid?: boolean
    title?: boolean
    description?: boolean
    duedate?: boolean
    amount?: boolean
    status?: boolean
  }

  export type milestonesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobid" | "freelancerid" | "title" | "description" | "duedate" | "amount" | "status", ExtArgs["result"]["milestones"]>
  export type milestonesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disputes?: boolean | milestones$disputesArgs<ExtArgs>
    freelancer?: boolean | milestones$freelancerArgs<ExtArgs>
    jobposted?: boolean | milestones$jobpostedArgs<ExtArgs>
    paymentsescrow?: boolean | milestones$paymentsescrowArgs<ExtArgs>
    _count?: boolean | MilestonesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type milestonesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    freelancer?: boolean | milestones$freelancerArgs<ExtArgs>
    jobposted?: boolean | milestones$jobpostedArgs<ExtArgs>
  }
  export type milestonesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    freelancer?: boolean | milestones$freelancerArgs<ExtArgs>
    jobposted?: boolean | milestones$jobpostedArgs<ExtArgs>
  }

  export type $milestonesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "milestones"
    objects: {
      disputes: Prisma.$disputesPayload<ExtArgs>[]
      freelancer: Prisma.$freelancerPayload<ExtArgs> | null
      jobposted: Prisma.$jobpostedPayload<ExtArgs> | null
      paymentsescrow: Prisma.$paymentsescrowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jobid: number | null
      freelancerid: number | null
      title: string
      description: string | null
      duedate: Date | null
      amount: number
      status: $Enums.milestone_status | null
    }, ExtArgs["result"]["milestones"]>
    composites: {}
  }

  type milestonesGetPayload<S extends boolean | null | undefined | milestonesDefaultArgs> = $Result.GetResult<Prisma.$milestonesPayload, S>

  type milestonesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<milestonesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MilestonesCountAggregateInputType | true
    }

  export interface milestonesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['milestones'], meta: { name: 'milestones' } }
    /**
     * Find zero or one Milestones that matches the filter.
     * @param {milestonesFindUniqueArgs} args - Arguments to find a Milestones
     * @example
     * // Get one Milestones
     * const milestones = await prisma.milestones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends milestonesFindUniqueArgs>(args: SelectSubset<T, milestonesFindUniqueArgs<ExtArgs>>): Prisma__milestonesClient<$Result.GetResult<Prisma.$milestonesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Milestones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {milestonesFindUniqueOrThrowArgs} args - Arguments to find a Milestones
     * @example
     * // Get one Milestones
     * const milestones = await prisma.milestones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends milestonesFindUniqueOrThrowArgs>(args: SelectSubset<T, milestonesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__milestonesClient<$Result.GetResult<Prisma.$milestonesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Milestones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {milestonesFindFirstArgs} args - Arguments to find a Milestones
     * @example
     * // Get one Milestones
     * const milestones = await prisma.milestones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends milestonesFindFirstArgs>(args?: SelectSubset<T, milestonesFindFirstArgs<ExtArgs>>): Prisma__milestonesClient<$Result.GetResult<Prisma.$milestonesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Milestones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {milestonesFindFirstOrThrowArgs} args - Arguments to find a Milestones
     * @example
     * // Get one Milestones
     * const milestones = await prisma.milestones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends milestonesFindFirstOrThrowArgs>(args?: SelectSubset<T, milestonesFindFirstOrThrowArgs<ExtArgs>>): Prisma__milestonesClient<$Result.GetResult<Prisma.$milestonesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Milestones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {milestonesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Milestones
     * const milestones = await prisma.milestones.findMany()
     * 
     * // Get first 10 Milestones
     * const milestones = await prisma.milestones.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const milestonesWithIdOnly = await prisma.milestones.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends milestonesFindManyArgs>(args?: SelectSubset<T, milestonesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$milestonesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Milestones.
     * @param {milestonesCreateArgs} args - Arguments to create a Milestones.
     * @example
     * // Create one Milestones
     * const Milestones = await prisma.milestones.create({
     *   data: {
     *     // ... data to create a Milestones
     *   }
     * })
     * 
     */
    create<T extends milestonesCreateArgs>(args: SelectSubset<T, milestonesCreateArgs<ExtArgs>>): Prisma__milestonesClient<$Result.GetResult<Prisma.$milestonesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Milestones.
     * @param {milestonesCreateManyArgs} args - Arguments to create many Milestones.
     * @example
     * // Create many Milestones
     * const milestones = await prisma.milestones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends milestonesCreateManyArgs>(args?: SelectSubset<T, milestonesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Milestones and returns the data saved in the database.
     * @param {milestonesCreateManyAndReturnArgs} args - Arguments to create many Milestones.
     * @example
     * // Create many Milestones
     * const milestones = await prisma.milestones.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Milestones and only return the `id`
     * const milestonesWithIdOnly = await prisma.milestones.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends milestonesCreateManyAndReturnArgs>(args?: SelectSubset<T, milestonesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$milestonesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Milestones.
     * @param {milestonesDeleteArgs} args - Arguments to delete one Milestones.
     * @example
     * // Delete one Milestones
     * const Milestones = await prisma.milestones.delete({
     *   where: {
     *     // ... filter to delete one Milestones
     *   }
     * })
     * 
     */
    delete<T extends milestonesDeleteArgs>(args: SelectSubset<T, milestonesDeleteArgs<ExtArgs>>): Prisma__milestonesClient<$Result.GetResult<Prisma.$milestonesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Milestones.
     * @param {milestonesUpdateArgs} args - Arguments to update one Milestones.
     * @example
     * // Update one Milestones
     * const milestones = await prisma.milestones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends milestonesUpdateArgs>(args: SelectSubset<T, milestonesUpdateArgs<ExtArgs>>): Prisma__milestonesClient<$Result.GetResult<Prisma.$milestonesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Milestones.
     * @param {milestonesDeleteManyArgs} args - Arguments to filter Milestones to delete.
     * @example
     * // Delete a few Milestones
     * const { count } = await prisma.milestones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends milestonesDeleteManyArgs>(args?: SelectSubset<T, milestonesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {milestonesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Milestones
     * const milestones = await prisma.milestones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends milestonesUpdateManyArgs>(args: SelectSubset<T, milestonesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Milestones and returns the data updated in the database.
     * @param {milestonesUpdateManyAndReturnArgs} args - Arguments to update many Milestones.
     * @example
     * // Update many Milestones
     * const milestones = await prisma.milestones.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Milestones and only return the `id`
     * const milestonesWithIdOnly = await prisma.milestones.updateManyAndReturn({
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
    updateManyAndReturn<T extends milestonesUpdateManyAndReturnArgs>(args: SelectSubset<T, milestonesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$milestonesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Milestones.
     * @param {milestonesUpsertArgs} args - Arguments to update or create a Milestones.
     * @example
     * // Update or create a Milestones
     * const milestones = await prisma.milestones.upsert({
     *   create: {
     *     // ... data to create a Milestones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Milestones we want to update
     *   }
     * })
     */
    upsert<T extends milestonesUpsertArgs>(args: SelectSubset<T, milestonesUpsertArgs<ExtArgs>>): Prisma__milestonesClient<$Result.GetResult<Prisma.$milestonesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {milestonesCountArgs} args - Arguments to filter Milestones to count.
     * @example
     * // Count the number of Milestones
     * const count = await prisma.milestones.count({
     *   where: {
     *     // ... the filter for the Milestones we want to count
     *   }
     * })
    **/
    count<T extends milestonesCountArgs>(
      args?: Subset<T, milestonesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MilestonesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestonesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MilestonesAggregateArgs>(args: Subset<T, MilestonesAggregateArgs>): Prisma.PrismaPromise<GetMilestonesAggregateType<T>>

    /**
     * Group by Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {milestonesGroupByArgs} args - Group by arguments.
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
      T extends milestonesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: milestonesGroupByArgs['orderBy'] }
        : { orderBy?: milestonesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, milestonesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMilestonesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the milestones model
   */
  readonly fields: milestonesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for milestones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__milestonesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    disputes<T extends milestones$disputesArgs<ExtArgs> = {}>(args?: Subset<T, milestones$disputesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$disputesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    freelancer<T extends milestones$freelancerArgs<ExtArgs> = {}>(args?: Subset<T, milestones$freelancerArgs<ExtArgs>>): Prisma__freelancerClient<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    jobposted<T extends milestones$jobpostedArgs<ExtArgs> = {}>(args?: Subset<T, milestones$jobpostedArgs<ExtArgs>>): Prisma__jobpostedClient<$Result.GetResult<Prisma.$jobpostedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    paymentsescrow<T extends milestones$paymentsescrowArgs<ExtArgs> = {}>(args?: Subset<T, milestones$paymentsescrowArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsescrowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the milestones model
   */
  interface milestonesFieldRefs {
    readonly id: FieldRef<"milestones", 'Int'>
    readonly jobid: FieldRef<"milestones", 'Int'>
    readonly freelancerid: FieldRef<"milestones", 'Int'>
    readonly title: FieldRef<"milestones", 'String'>
    readonly description: FieldRef<"milestones", 'String'>
    readonly duedate: FieldRef<"milestones", 'DateTime'>
    readonly amount: FieldRef<"milestones", 'Int'>
    readonly status: FieldRef<"milestones", 'milestone_status'>
  }
    

  // Custom InputTypes
  /**
   * milestones findUnique
   */
  export type milestonesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestones
     */
    select?: milestonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the milestones
     */
    omit?: milestonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: milestonesInclude<ExtArgs> | null
    /**
     * Filter, which milestones to fetch.
     */
    where: milestonesWhereUniqueInput
  }

  /**
   * milestones findUniqueOrThrow
   */
  export type milestonesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestones
     */
    select?: milestonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the milestones
     */
    omit?: milestonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: milestonesInclude<ExtArgs> | null
    /**
     * Filter, which milestones to fetch.
     */
    where: milestonesWhereUniqueInput
  }

  /**
   * milestones findFirst
   */
  export type milestonesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestones
     */
    select?: milestonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the milestones
     */
    omit?: milestonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: milestonesInclude<ExtArgs> | null
    /**
     * Filter, which milestones to fetch.
     */
    where?: milestonesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of milestones to fetch.
     */
    orderBy?: milestonesOrderByWithRelationInput | milestonesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for milestones.
     */
    cursor?: milestonesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of milestones.
     */
    distinct?: MilestonesScalarFieldEnum | MilestonesScalarFieldEnum[]
  }

  /**
   * milestones findFirstOrThrow
   */
  export type milestonesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestones
     */
    select?: milestonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the milestones
     */
    omit?: milestonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: milestonesInclude<ExtArgs> | null
    /**
     * Filter, which milestones to fetch.
     */
    where?: milestonesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of milestones to fetch.
     */
    orderBy?: milestonesOrderByWithRelationInput | milestonesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for milestones.
     */
    cursor?: milestonesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of milestones.
     */
    distinct?: MilestonesScalarFieldEnum | MilestonesScalarFieldEnum[]
  }

  /**
   * milestones findMany
   */
  export type milestonesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestones
     */
    select?: milestonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the milestones
     */
    omit?: milestonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: milestonesInclude<ExtArgs> | null
    /**
     * Filter, which milestones to fetch.
     */
    where?: milestonesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of milestones to fetch.
     */
    orderBy?: milestonesOrderByWithRelationInput | milestonesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing milestones.
     */
    cursor?: milestonesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` milestones.
     */
    skip?: number
    distinct?: MilestonesScalarFieldEnum | MilestonesScalarFieldEnum[]
  }

  /**
   * milestones create
   */
  export type milestonesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestones
     */
    select?: milestonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the milestones
     */
    omit?: milestonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: milestonesInclude<ExtArgs> | null
    /**
     * The data needed to create a milestones.
     */
    data: XOR<milestonesCreateInput, milestonesUncheckedCreateInput>
  }

  /**
   * milestones createMany
   */
  export type milestonesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many milestones.
     */
    data: milestonesCreateManyInput | milestonesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * milestones createManyAndReturn
   */
  export type milestonesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestones
     */
    select?: milestonesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the milestones
     */
    omit?: milestonesOmit<ExtArgs> | null
    /**
     * The data used to create many milestones.
     */
    data: milestonesCreateManyInput | milestonesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: milestonesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * milestones update
   */
  export type milestonesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestones
     */
    select?: milestonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the milestones
     */
    omit?: milestonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: milestonesInclude<ExtArgs> | null
    /**
     * The data needed to update a milestones.
     */
    data: XOR<milestonesUpdateInput, milestonesUncheckedUpdateInput>
    /**
     * Choose, which milestones to update.
     */
    where: milestonesWhereUniqueInput
  }

  /**
   * milestones updateMany
   */
  export type milestonesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update milestones.
     */
    data: XOR<milestonesUpdateManyMutationInput, milestonesUncheckedUpdateManyInput>
    /**
     * Filter which milestones to update
     */
    where?: milestonesWhereInput
    /**
     * Limit how many milestones to update.
     */
    limit?: number
  }

  /**
   * milestones updateManyAndReturn
   */
  export type milestonesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestones
     */
    select?: milestonesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the milestones
     */
    omit?: milestonesOmit<ExtArgs> | null
    /**
     * The data used to update milestones.
     */
    data: XOR<milestonesUpdateManyMutationInput, milestonesUncheckedUpdateManyInput>
    /**
     * Filter which milestones to update
     */
    where?: milestonesWhereInput
    /**
     * Limit how many milestones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: milestonesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * milestones upsert
   */
  export type milestonesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestones
     */
    select?: milestonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the milestones
     */
    omit?: milestonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: milestonesInclude<ExtArgs> | null
    /**
     * The filter to search for the milestones to update in case it exists.
     */
    where: milestonesWhereUniqueInput
    /**
     * In case the milestones found by the `where` argument doesn't exist, create a new milestones with this data.
     */
    create: XOR<milestonesCreateInput, milestonesUncheckedCreateInput>
    /**
     * In case the milestones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<milestonesUpdateInput, milestonesUncheckedUpdateInput>
  }

  /**
   * milestones delete
   */
  export type milestonesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestones
     */
    select?: milestonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the milestones
     */
    omit?: milestonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: milestonesInclude<ExtArgs> | null
    /**
     * Filter which milestones to delete.
     */
    where: milestonesWhereUniqueInput
  }

  /**
   * milestones deleteMany
   */
  export type milestonesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which milestones to delete
     */
    where?: milestonesWhereInput
    /**
     * Limit how many milestones to delete.
     */
    limit?: number
  }

  /**
   * milestones.disputes
   */
  export type milestones$disputesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disputes
     */
    select?: disputesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disputes
     */
    omit?: disputesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disputesInclude<ExtArgs> | null
    where?: disputesWhereInput
    orderBy?: disputesOrderByWithRelationInput | disputesOrderByWithRelationInput[]
    cursor?: disputesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisputesScalarFieldEnum | DisputesScalarFieldEnum[]
  }

  /**
   * milestones.freelancer
   */
  export type milestones$freelancerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freelancer
     */
    omit?: freelancerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelancerInclude<ExtArgs> | null
    where?: freelancerWhereInput
  }

  /**
   * milestones.jobposted
   */
  export type milestones$jobpostedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobposted
     */
    select?: jobpostedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobposted
     */
    omit?: jobpostedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobpostedInclude<ExtArgs> | null
    where?: jobpostedWhereInput
  }

  /**
   * milestones.paymentsescrow
   */
  export type milestones$paymentsescrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentsescrow
     */
    select?: paymentsescrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paymentsescrow
     */
    omit?: paymentsescrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsescrowInclude<ExtArgs> | null
    where?: paymentsescrowWhereInput
    orderBy?: paymentsescrowOrderByWithRelationInput | paymentsescrowOrderByWithRelationInput[]
    cursor?: paymentsescrowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsescrowScalarFieldEnum | PaymentsescrowScalarFieldEnum[]
  }

  /**
   * milestones without action
   */
  export type milestonesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestones
     */
    select?: milestonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the milestones
     */
    omit?: milestonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: milestonesInclude<ExtArgs> | null
  }


  /**
   * Model nftcredential
   */

  export type AggregateNftcredential = {
    _count: NftcredentialCountAggregateOutputType | null
    _avg: NftcredentialAvgAggregateOutputType | null
    _sum: NftcredentialSumAggregateOutputType | null
    _min: NftcredentialMinAggregateOutputType | null
    _max: NftcredentialMaxAggregateOutputType | null
  }

  export type NftcredentialAvgAggregateOutputType = {
    id: number | null
    freelancerid: number | null
    jobid: number | null
    tokenid: number | null
    rating: number | null
  }

  export type NftcredentialSumAggregateOutputType = {
    id: number | null
    freelancerid: number | null
    jobid: number | null
    tokenid: number | null
    rating: number | null
  }

  export type NftcredentialMinAggregateOutputType = {
    id: number | null
    freelancerid: number | null
    jobid: number | null
    tokenid: number | null
    rating: number | null
    testimonial: string | null
    isminted: boolean | null
    txhash: string | null
    createdat: Date | null
  }

  export type NftcredentialMaxAggregateOutputType = {
    id: number | null
    freelancerid: number | null
    jobid: number | null
    tokenid: number | null
    rating: number | null
    testimonial: string | null
    isminted: boolean | null
    txhash: string | null
    createdat: Date | null
  }

  export type NftcredentialCountAggregateOutputType = {
    id: number
    freelancerid: number
    jobid: number
    tokenid: number
    rating: number
    testimonial: number
    isminted: number
    txhash: number
    createdat: number
    _all: number
  }


  export type NftcredentialAvgAggregateInputType = {
    id?: true
    freelancerid?: true
    jobid?: true
    tokenid?: true
    rating?: true
  }

  export type NftcredentialSumAggregateInputType = {
    id?: true
    freelancerid?: true
    jobid?: true
    tokenid?: true
    rating?: true
  }

  export type NftcredentialMinAggregateInputType = {
    id?: true
    freelancerid?: true
    jobid?: true
    tokenid?: true
    rating?: true
    testimonial?: true
    isminted?: true
    txhash?: true
    createdat?: true
  }

  export type NftcredentialMaxAggregateInputType = {
    id?: true
    freelancerid?: true
    jobid?: true
    tokenid?: true
    rating?: true
    testimonial?: true
    isminted?: true
    txhash?: true
    createdat?: true
  }

  export type NftcredentialCountAggregateInputType = {
    id?: true
    freelancerid?: true
    jobid?: true
    tokenid?: true
    rating?: true
    testimonial?: true
    isminted?: true
    txhash?: true
    createdat?: true
    _all?: true
  }

  export type NftcredentialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nftcredential to aggregate.
     */
    where?: nftcredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nftcredentials to fetch.
     */
    orderBy?: nftcredentialOrderByWithRelationInput | nftcredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: nftcredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nftcredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nftcredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned nftcredentials
    **/
    _count?: true | NftcredentialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NftcredentialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NftcredentialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NftcredentialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NftcredentialMaxAggregateInputType
  }

  export type GetNftcredentialAggregateType<T extends NftcredentialAggregateArgs> = {
        [P in keyof T & keyof AggregateNftcredential]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNftcredential[P]>
      : GetScalarType<T[P], AggregateNftcredential[P]>
  }




  export type nftcredentialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nftcredentialWhereInput
    orderBy?: nftcredentialOrderByWithAggregationInput | nftcredentialOrderByWithAggregationInput[]
    by: NftcredentialScalarFieldEnum[] | NftcredentialScalarFieldEnum
    having?: nftcredentialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NftcredentialCountAggregateInputType | true
    _avg?: NftcredentialAvgAggregateInputType
    _sum?: NftcredentialSumAggregateInputType
    _min?: NftcredentialMinAggregateInputType
    _max?: NftcredentialMaxAggregateInputType
  }

  export type NftcredentialGroupByOutputType = {
    id: number
    freelancerid: number | null
    jobid: number | null
    tokenid: number | null
    rating: number | null
    testimonial: string | null
    isminted: boolean | null
    txhash: string | null
    createdat: Date | null
    _count: NftcredentialCountAggregateOutputType | null
    _avg: NftcredentialAvgAggregateOutputType | null
    _sum: NftcredentialSumAggregateOutputType | null
    _min: NftcredentialMinAggregateOutputType | null
    _max: NftcredentialMaxAggregateOutputType | null
  }

  type GetNftcredentialGroupByPayload<T extends nftcredentialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NftcredentialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NftcredentialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NftcredentialGroupByOutputType[P]>
            : GetScalarType<T[P], NftcredentialGroupByOutputType[P]>
        }
      >
    >


  export type nftcredentialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    freelancerid?: boolean
    jobid?: boolean
    tokenid?: boolean
    rating?: boolean
    testimonial?: boolean
    isminted?: boolean
    txhash?: boolean
    createdat?: boolean
    freelancer?: boolean | nftcredential$freelancerArgs<ExtArgs>
    jobposted?: boolean | nftcredential$jobpostedArgs<ExtArgs>
  }, ExtArgs["result"]["nftcredential"]>

  export type nftcredentialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    freelancerid?: boolean
    jobid?: boolean
    tokenid?: boolean
    rating?: boolean
    testimonial?: boolean
    isminted?: boolean
    txhash?: boolean
    createdat?: boolean
    freelancer?: boolean | nftcredential$freelancerArgs<ExtArgs>
    jobposted?: boolean | nftcredential$jobpostedArgs<ExtArgs>
  }, ExtArgs["result"]["nftcredential"]>

  export type nftcredentialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    freelancerid?: boolean
    jobid?: boolean
    tokenid?: boolean
    rating?: boolean
    testimonial?: boolean
    isminted?: boolean
    txhash?: boolean
    createdat?: boolean
    freelancer?: boolean | nftcredential$freelancerArgs<ExtArgs>
    jobposted?: boolean | nftcredential$jobpostedArgs<ExtArgs>
  }, ExtArgs["result"]["nftcredential"]>

  export type nftcredentialSelectScalar = {
    id?: boolean
    freelancerid?: boolean
    jobid?: boolean
    tokenid?: boolean
    rating?: boolean
    testimonial?: boolean
    isminted?: boolean
    txhash?: boolean
    createdat?: boolean
  }

  export type nftcredentialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "freelancerid" | "jobid" | "tokenid" | "rating" | "testimonial" | "isminted" | "txhash" | "createdat", ExtArgs["result"]["nftcredential"]>
  export type nftcredentialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    freelancer?: boolean | nftcredential$freelancerArgs<ExtArgs>
    jobposted?: boolean | nftcredential$jobpostedArgs<ExtArgs>
  }
  export type nftcredentialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    freelancer?: boolean | nftcredential$freelancerArgs<ExtArgs>
    jobposted?: boolean | nftcredential$jobpostedArgs<ExtArgs>
  }
  export type nftcredentialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    freelancer?: boolean | nftcredential$freelancerArgs<ExtArgs>
    jobposted?: boolean | nftcredential$jobpostedArgs<ExtArgs>
  }

  export type $nftcredentialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "nftcredential"
    objects: {
      freelancer: Prisma.$freelancerPayload<ExtArgs> | null
      jobposted: Prisma.$jobpostedPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      freelancerid: number | null
      jobid: number | null
      tokenid: number | null
      rating: number | null
      testimonial: string | null
      isminted: boolean | null
      txhash: string | null
      createdat: Date | null
    }, ExtArgs["result"]["nftcredential"]>
    composites: {}
  }

  type nftcredentialGetPayload<S extends boolean | null | undefined | nftcredentialDefaultArgs> = $Result.GetResult<Prisma.$nftcredentialPayload, S>

  type nftcredentialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<nftcredentialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NftcredentialCountAggregateInputType | true
    }

  export interface nftcredentialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['nftcredential'], meta: { name: 'nftcredential' } }
    /**
     * Find zero or one Nftcredential that matches the filter.
     * @param {nftcredentialFindUniqueArgs} args - Arguments to find a Nftcredential
     * @example
     * // Get one Nftcredential
     * const nftcredential = await prisma.nftcredential.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends nftcredentialFindUniqueArgs>(args: SelectSubset<T, nftcredentialFindUniqueArgs<ExtArgs>>): Prisma__nftcredentialClient<$Result.GetResult<Prisma.$nftcredentialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nftcredential that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {nftcredentialFindUniqueOrThrowArgs} args - Arguments to find a Nftcredential
     * @example
     * // Get one Nftcredential
     * const nftcredential = await prisma.nftcredential.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends nftcredentialFindUniqueOrThrowArgs>(args: SelectSubset<T, nftcredentialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__nftcredentialClient<$Result.GetResult<Prisma.$nftcredentialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nftcredential that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nftcredentialFindFirstArgs} args - Arguments to find a Nftcredential
     * @example
     * // Get one Nftcredential
     * const nftcredential = await prisma.nftcredential.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends nftcredentialFindFirstArgs>(args?: SelectSubset<T, nftcredentialFindFirstArgs<ExtArgs>>): Prisma__nftcredentialClient<$Result.GetResult<Prisma.$nftcredentialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nftcredential that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nftcredentialFindFirstOrThrowArgs} args - Arguments to find a Nftcredential
     * @example
     * // Get one Nftcredential
     * const nftcredential = await prisma.nftcredential.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends nftcredentialFindFirstOrThrowArgs>(args?: SelectSubset<T, nftcredentialFindFirstOrThrowArgs<ExtArgs>>): Prisma__nftcredentialClient<$Result.GetResult<Prisma.$nftcredentialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nftcredentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nftcredentialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nftcredentials
     * const nftcredentials = await prisma.nftcredential.findMany()
     * 
     * // Get first 10 Nftcredentials
     * const nftcredentials = await prisma.nftcredential.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nftcredentialWithIdOnly = await prisma.nftcredential.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends nftcredentialFindManyArgs>(args?: SelectSubset<T, nftcredentialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nftcredentialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nftcredential.
     * @param {nftcredentialCreateArgs} args - Arguments to create a Nftcredential.
     * @example
     * // Create one Nftcredential
     * const Nftcredential = await prisma.nftcredential.create({
     *   data: {
     *     // ... data to create a Nftcredential
     *   }
     * })
     * 
     */
    create<T extends nftcredentialCreateArgs>(args: SelectSubset<T, nftcredentialCreateArgs<ExtArgs>>): Prisma__nftcredentialClient<$Result.GetResult<Prisma.$nftcredentialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nftcredentials.
     * @param {nftcredentialCreateManyArgs} args - Arguments to create many Nftcredentials.
     * @example
     * // Create many Nftcredentials
     * const nftcredential = await prisma.nftcredential.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends nftcredentialCreateManyArgs>(args?: SelectSubset<T, nftcredentialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nftcredentials and returns the data saved in the database.
     * @param {nftcredentialCreateManyAndReturnArgs} args - Arguments to create many Nftcredentials.
     * @example
     * // Create many Nftcredentials
     * const nftcredential = await prisma.nftcredential.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nftcredentials and only return the `id`
     * const nftcredentialWithIdOnly = await prisma.nftcredential.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends nftcredentialCreateManyAndReturnArgs>(args?: SelectSubset<T, nftcredentialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nftcredentialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Nftcredential.
     * @param {nftcredentialDeleteArgs} args - Arguments to delete one Nftcredential.
     * @example
     * // Delete one Nftcredential
     * const Nftcredential = await prisma.nftcredential.delete({
     *   where: {
     *     // ... filter to delete one Nftcredential
     *   }
     * })
     * 
     */
    delete<T extends nftcredentialDeleteArgs>(args: SelectSubset<T, nftcredentialDeleteArgs<ExtArgs>>): Prisma__nftcredentialClient<$Result.GetResult<Prisma.$nftcredentialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nftcredential.
     * @param {nftcredentialUpdateArgs} args - Arguments to update one Nftcredential.
     * @example
     * // Update one Nftcredential
     * const nftcredential = await prisma.nftcredential.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends nftcredentialUpdateArgs>(args: SelectSubset<T, nftcredentialUpdateArgs<ExtArgs>>): Prisma__nftcredentialClient<$Result.GetResult<Prisma.$nftcredentialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nftcredentials.
     * @param {nftcredentialDeleteManyArgs} args - Arguments to filter Nftcredentials to delete.
     * @example
     * // Delete a few Nftcredentials
     * const { count } = await prisma.nftcredential.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends nftcredentialDeleteManyArgs>(args?: SelectSubset<T, nftcredentialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nftcredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nftcredentialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nftcredentials
     * const nftcredential = await prisma.nftcredential.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends nftcredentialUpdateManyArgs>(args: SelectSubset<T, nftcredentialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nftcredentials and returns the data updated in the database.
     * @param {nftcredentialUpdateManyAndReturnArgs} args - Arguments to update many Nftcredentials.
     * @example
     * // Update many Nftcredentials
     * const nftcredential = await prisma.nftcredential.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nftcredentials and only return the `id`
     * const nftcredentialWithIdOnly = await prisma.nftcredential.updateManyAndReturn({
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
    updateManyAndReturn<T extends nftcredentialUpdateManyAndReturnArgs>(args: SelectSubset<T, nftcredentialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nftcredentialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Nftcredential.
     * @param {nftcredentialUpsertArgs} args - Arguments to update or create a Nftcredential.
     * @example
     * // Update or create a Nftcredential
     * const nftcredential = await prisma.nftcredential.upsert({
     *   create: {
     *     // ... data to create a Nftcredential
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nftcredential we want to update
     *   }
     * })
     */
    upsert<T extends nftcredentialUpsertArgs>(args: SelectSubset<T, nftcredentialUpsertArgs<ExtArgs>>): Prisma__nftcredentialClient<$Result.GetResult<Prisma.$nftcredentialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nftcredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nftcredentialCountArgs} args - Arguments to filter Nftcredentials to count.
     * @example
     * // Count the number of Nftcredentials
     * const count = await prisma.nftcredential.count({
     *   where: {
     *     // ... the filter for the Nftcredentials we want to count
     *   }
     * })
    **/
    count<T extends nftcredentialCountArgs>(
      args?: Subset<T, nftcredentialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NftcredentialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nftcredential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NftcredentialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NftcredentialAggregateArgs>(args: Subset<T, NftcredentialAggregateArgs>): Prisma.PrismaPromise<GetNftcredentialAggregateType<T>>

    /**
     * Group by Nftcredential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nftcredentialGroupByArgs} args - Group by arguments.
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
      T extends nftcredentialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: nftcredentialGroupByArgs['orderBy'] }
        : { orderBy?: nftcredentialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, nftcredentialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNftcredentialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the nftcredential model
   */
  readonly fields: nftcredentialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for nftcredential.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__nftcredentialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    freelancer<T extends nftcredential$freelancerArgs<ExtArgs> = {}>(args?: Subset<T, nftcredential$freelancerArgs<ExtArgs>>): Prisma__freelancerClient<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    jobposted<T extends nftcredential$jobpostedArgs<ExtArgs> = {}>(args?: Subset<T, nftcredential$jobpostedArgs<ExtArgs>>): Prisma__jobpostedClient<$Result.GetResult<Prisma.$jobpostedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the nftcredential model
   */
  interface nftcredentialFieldRefs {
    readonly id: FieldRef<"nftcredential", 'Int'>
    readonly freelancerid: FieldRef<"nftcredential", 'Int'>
    readonly jobid: FieldRef<"nftcredential", 'Int'>
    readonly tokenid: FieldRef<"nftcredential", 'Int'>
    readonly rating: FieldRef<"nftcredential", 'Int'>
    readonly testimonial: FieldRef<"nftcredential", 'String'>
    readonly isminted: FieldRef<"nftcredential", 'Boolean'>
    readonly txhash: FieldRef<"nftcredential", 'String'>
    readonly createdat: FieldRef<"nftcredential", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * nftcredential findUnique
   */
  export type nftcredentialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nftcredential
     */
    select?: nftcredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nftcredential
     */
    omit?: nftcredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nftcredentialInclude<ExtArgs> | null
    /**
     * Filter, which nftcredential to fetch.
     */
    where: nftcredentialWhereUniqueInput
  }

  /**
   * nftcredential findUniqueOrThrow
   */
  export type nftcredentialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nftcredential
     */
    select?: nftcredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nftcredential
     */
    omit?: nftcredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nftcredentialInclude<ExtArgs> | null
    /**
     * Filter, which nftcredential to fetch.
     */
    where: nftcredentialWhereUniqueInput
  }

  /**
   * nftcredential findFirst
   */
  export type nftcredentialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nftcredential
     */
    select?: nftcredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nftcredential
     */
    omit?: nftcredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nftcredentialInclude<ExtArgs> | null
    /**
     * Filter, which nftcredential to fetch.
     */
    where?: nftcredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nftcredentials to fetch.
     */
    orderBy?: nftcredentialOrderByWithRelationInput | nftcredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nftcredentials.
     */
    cursor?: nftcredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nftcredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nftcredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nftcredentials.
     */
    distinct?: NftcredentialScalarFieldEnum | NftcredentialScalarFieldEnum[]
  }

  /**
   * nftcredential findFirstOrThrow
   */
  export type nftcredentialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nftcredential
     */
    select?: nftcredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nftcredential
     */
    omit?: nftcredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nftcredentialInclude<ExtArgs> | null
    /**
     * Filter, which nftcredential to fetch.
     */
    where?: nftcredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nftcredentials to fetch.
     */
    orderBy?: nftcredentialOrderByWithRelationInput | nftcredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nftcredentials.
     */
    cursor?: nftcredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nftcredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nftcredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nftcredentials.
     */
    distinct?: NftcredentialScalarFieldEnum | NftcredentialScalarFieldEnum[]
  }

  /**
   * nftcredential findMany
   */
  export type nftcredentialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nftcredential
     */
    select?: nftcredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nftcredential
     */
    omit?: nftcredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nftcredentialInclude<ExtArgs> | null
    /**
     * Filter, which nftcredentials to fetch.
     */
    where?: nftcredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nftcredentials to fetch.
     */
    orderBy?: nftcredentialOrderByWithRelationInput | nftcredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing nftcredentials.
     */
    cursor?: nftcredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nftcredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nftcredentials.
     */
    skip?: number
    distinct?: NftcredentialScalarFieldEnum | NftcredentialScalarFieldEnum[]
  }

  /**
   * nftcredential create
   */
  export type nftcredentialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nftcredential
     */
    select?: nftcredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nftcredential
     */
    omit?: nftcredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nftcredentialInclude<ExtArgs> | null
    /**
     * The data needed to create a nftcredential.
     */
    data?: XOR<nftcredentialCreateInput, nftcredentialUncheckedCreateInput>
  }

  /**
   * nftcredential createMany
   */
  export type nftcredentialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many nftcredentials.
     */
    data: nftcredentialCreateManyInput | nftcredentialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * nftcredential createManyAndReturn
   */
  export type nftcredentialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nftcredential
     */
    select?: nftcredentialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the nftcredential
     */
    omit?: nftcredentialOmit<ExtArgs> | null
    /**
     * The data used to create many nftcredentials.
     */
    data: nftcredentialCreateManyInput | nftcredentialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nftcredentialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * nftcredential update
   */
  export type nftcredentialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nftcredential
     */
    select?: nftcredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nftcredential
     */
    omit?: nftcredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nftcredentialInclude<ExtArgs> | null
    /**
     * The data needed to update a nftcredential.
     */
    data: XOR<nftcredentialUpdateInput, nftcredentialUncheckedUpdateInput>
    /**
     * Choose, which nftcredential to update.
     */
    where: nftcredentialWhereUniqueInput
  }

  /**
   * nftcredential updateMany
   */
  export type nftcredentialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update nftcredentials.
     */
    data: XOR<nftcredentialUpdateManyMutationInput, nftcredentialUncheckedUpdateManyInput>
    /**
     * Filter which nftcredentials to update
     */
    where?: nftcredentialWhereInput
    /**
     * Limit how many nftcredentials to update.
     */
    limit?: number
  }

  /**
   * nftcredential updateManyAndReturn
   */
  export type nftcredentialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nftcredential
     */
    select?: nftcredentialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the nftcredential
     */
    omit?: nftcredentialOmit<ExtArgs> | null
    /**
     * The data used to update nftcredentials.
     */
    data: XOR<nftcredentialUpdateManyMutationInput, nftcredentialUncheckedUpdateManyInput>
    /**
     * Filter which nftcredentials to update
     */
    where?: nftcredentialWhereInput
    /**
     * Limit how many nftcredentials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nftcredentialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * nftcredential upsert
   */
  export type nftcredentialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nftcredential
     */
    select?: nftcredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nftcredential
     */
    omit?: nftcredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nftcredentialInclude<ExtArgs> | null
    /**
     * The filter to search for the nftcredential to update in case it exists.
     */
    where: nftcredentialWhereUniqueInput
    /**
     * In case the nftcredential found by the `where` argument doesn't exist, create a new nftcredential with this data.
     */
    create: XOR<nftcredentialCreateInput, nftcredentialUncheckedCreateInput>
    /**
     * In case the nftcredential was found with the provided `where` argument, update it with this data.
     */
    update: XOR<nftcredentialUpdateInput, nftcredentialUncheckedUpdateInput>
  }

  /**
   * nftcredential delete
   */
  export type nftcredentialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nftcredential
     */
    select?: nftcredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nftcredential
     */
    omit?: nftcredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nftcredentialInclude<ExtArgs> | null
    /**
     * Filter which nftcredential to delete.
     */
    where: nftcredentialWhereUniqueInput
  }

  /**
   * nftcredential deleteMany
   */
  export type nftcredentialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nftcredentials to delete
     */
    where?: nftcredentialWhereInput
    /**
     * Limit how many nftcredentials to delete.
     */
    limit?: number
  }

  /**
   * nftcredential.freelancer
   */
  export type nftcredential$freelancerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freelancer
     */
    omit?: freelancerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelancerInclude<ExtArgs> | null
    where?: freelancerWhereInput
  }

  /**
   * nftcredential.jobposted
   */
  export type nftcredential$jobpostedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobposted
     */
    select?: jobpostedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobposted
     */
    omit?: jobpostedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobpostedInclude<ExtArgs> | null
    where?: jobpostedWhereInput
  }

  /**
   * nftcredential without action
   */
  export type nftcredentialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nftcredential
     */
    select?: nftcredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nftcredential
     */
    omit?: nftcredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nftcredentialInclude<ExtArgs> | null
  }


  /**
   * Model paymentsescrow
   */

  export type AggregatePaymentsescrow = {
    _count: PaymentsescrowCountAggregateOutputType | null
    _avg: PaymentsescrowAvgAggregateOutputType | null
    _sum: PaymentsescrowSumAggregateOutputType | null
    _min: PaymentsescrowMinAggregateOutputType | null
    _max: PaymentsescrowMaxAggregateOutputType | null
  }

  export type PaymentsescrowAvgAggregateOutputType = {
    id: number | null
    contractid: number | null
    milestoneid: number | null
    amount: number | null
    initiatedby: number | null
    receiverid: number | null
  }

  export type PaymentsescrowSumAggregateOutputType = {
    id: number | null
    contractid: number | null
    milestoneid: number | null
    amount: number | null
    initiatedby: number | null
    receiverid: number | null
  }

  export type PaymentsescrowMinAggregateOutputType = {
    id: number | null
    contractid: number | null
    milestoneid: number | null
    type: $Enums.payment_type | null
    status: $Enums.payment_status | null
    paymentmethod: $Enums.payment_method | null
    txhash: string | null
    amount: number | null
    initiatedby: number | null
    receiverid: number | null
    notes: string | null
    timestamp: Date | null
    confirmedat: Date | null
  }

  export type PaymentsescrowMaxAggregateOutputType = {
    id: number | null
    contractid: number | null
    milestoneid: number | null
    type: $Enums.payment_type | null
    status: $Enums.payment_status | null
    paymentmethod: $Enums.payment_method | null
    txhash: string | null
    amount: number | null
    initiatedby: number | null
    receiverid: number | null
    notes: string | null
    timestamp: Date | null
    confirmedat: Date | null
  }

  export type PaymentsescrowCountAggregateOutputType = {
    id: number
    contractid: number
    milestoneid: number
    type: number
    status: number
    paymentmethod: number
    txhash: number
    amount: number
    initiatedby: number
    receiverid: number
    notes: number
    timestamp: number
    confirmedat: number
    _all: number
  }


  export type PaymentsescrowAvgAggregateInputType = {
    id?: true
    contractid?: true
    milestoneid?: true
    amount?: true
    initiatedby?: true
    receiverid?: true
  }

  export type PaymentsescrowSumAggregateInputType = {
    id?: true
    contractid?: true
    milestoneid?: true
    amount?: true
    initiatedby?: true
    receiverid?: true
  }

  export type PaymentsescrowMinAggregateInputType = {
    id?: true
    contractid?: true
    milestoneid?: true
    type?: true
    status?: true
    paymentmethod?: true
    txhash?: true
    amount?: true
    initiatedby?: true
    receiverid?: true
    notes?: true
    timestamp?: true
    confirmedat?: true
  }

  export type PaymentsescrowMaxAggregateInputType = {
    id?: true
    contractid?: true
    milestoneid?: true
    type?: true
    status?: true
    paymentmethod?: true
    txhash?: true
    amount?: true
    initiatedby?: true
    receiverid?: true
    notes?: true
    timestamp?: true
    confirmedat?: true
  }

  export type PaymentsescrowCountAggregateInputType = {
    id?: true
    contractid?: true
    milestoneid?: true
    type?: true
    status?: true
    paymentmethod?: true
    txhash?: true
    amount?: true
    initiatedby?: true
    receiverid?: true
    notes?: true
    timestamp?: true
    confirmedat?: true
    _all?: true
  }

  export type PaymentsescrowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which paymentsescrow to aggregate.
     */
    where?: paymentsescrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paymentsescrows to fetch.
     */
    orderBy?: paymentsescrowOrderByWithRelationInput | paymentsescrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentsescrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paymentsescrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paymentsescrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned paymentsescrows
    **/
    _count?: true | PaymentsescrowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsescrowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsescrowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsescrowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsescrowMaxAggregateInputType
  }

  export type GetPaymentsescrowAggregateType<T extends PaymentsescrowAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentsescrow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentsescrow[P]>
      : GetScalarType<T[P], AggregatePaymentsescrow[P]>
  }




  export type paymentsescrowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsescrowWhereInput
    orderBy?: paymentsescrowOrderByWithAggregationInput | paymentsescrowOrderByWithAggregationInput[]
    by: PaymentsescrowScalarFieldEnum[] | PaymentsescrowScalarFieldEnum
    having?: paymentsescrowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsescrowCountAggregateInputType | true
    _avg?: PaymentsescrowAvgAggregateInputType
    _sum?: PaymentsescrowSumAggregateInputType
    _min?: PaymentsescrowMinAggregateInputType
    _max?: PaymentsescrowMaxAggregateInputType
  }

  export type PaymentsescrowGroupByOutputType = {
    id: number
    contractid: number | null
    milestoneid: number | null
    type: $Enums.payment_type
    status: $Enums.payment_status | null
    paymentmethod: $Enums.payment_method | null
    txhash: string | null
    amount: number
    initiatedby: number | null
    receiverid: number | null
    notes: string | null
    timestamp: Date | null
    confirmedat: Date | null
    _count: PaymentsescrowCountAggregateOutputType | null
    _avg: PaymentsescrowAvgAggregateOutputType | null
    _sum: PaymentsescrowSumAggregateOutputType | null
    _min: PaymentsescrowMinAggregateOutputType | null
    _max: PaymentsescrowMaxAggregateOutputType | null
  }

  type GetPaymentsescrowGroupByPayload<T extends paymentsescrowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsescrowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsescrowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsescrowGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsescrowGroupByOutputType[P]>
        }
      >
    >


  export type paymentsescrowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractid?: boolean
    milestoneid?: boolean
    type?: boolean
    status?: boolean
    paymentmethod?: boolean
    txhash?: boolean
    amount?: boolean
    initiatedby?: boolean
    receiverid?: boolean
    notes?: boolean
    timestamp?: boolean
    confirmedat?: boolean
    smartcontract?: boolean | paymentsescrow$smartcontractArgs<ExtArgs>
    milestones?: boolean | paymentsescrow$milestonesArgs<ExtArgs>
    freelancer?: boolean | paymentsescrow$freelancerArgs<ExtArgs>
  }, ExtArgs["result"]["paymentsescrow"]>

  export type paymentsescrowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractid?: boolean
    milestoneid?: boolean
    type?: boolean
    status?: boolean
    paymentmethod?: boolean
    txhash?: boolean
    amount?: boolean
    initiatedby?: boolean
    receiverid?: boolean
    notes?: boolean
    timestamp?: boolean
    confirmedat?: boolean
    smartcontract?: boolean | paymentsescrow$smartcontractArgs<ExtArgs>
    milestones?: boolean | paymentsescrow$milestonesArgs<ExtArgs>
    freelancer?: boolean | paymentsescrow$freelancerArgs<ExtArgs>
  }, ExtArgs["result"]["paymentsescrow"]>

  export type paymentsescrowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractid?: boolean
    milestoneid?: boolean
    type?: boolean
    status?: boolean
    paymentmethod?: boolean
    txhash?: boolean
    amount?: boolean
    initiatedby?: boolean
    receiverid?: boolean
    notes?: boolean
    timestamp?: boolean
    confirmedat?: boolean
    smartcontract?: boolean | paymentsescrow$smartcontractArgs<ExtArgs>
    milestones?: boolean | paymentsescrow$milestonesArgs<ExtArgs>
    freelancer?: boolean | paymentsescrow$freelancerArgs<ExtArgs>
  }, ExtArgs["result"]["paymentsescrow"]>

  export type paymentsescrowSelectScalar = {
    id?: boolean
    contractid?: boolean
    milestoneid?: boolean
    type?: boolean
    status?: boolean
    paymentmethod?: boolean
    txhash?: boolean
    amount?: boolean
    initiatedby?: boolean
    receiverid?: boolean
    notes?: boolean
    timestamp?: boolean
    confirmedat?: boolean
  }

  export type paymentsescrowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contractid" | "milestoneid" | "type" | "status" | "paymentmethod" | "txhash" | "amount" | "initiatedby" | "receiverid" | "notes" | "timestamp" | "confirmedat", ExtArgs["result"]["paymentsescrow"]>
  export type paymentsescrowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    smartcontract?: boolean | paymentsescrow$smartcontractArgs<ExtArgs>
    milestones?: boolean | paymentsescrow$milestonesArgs<ExtArgs>
    freelancer?: boolean | paymentsescrow$freelancerArgs<ExtArgs>
  }
  export type paymentsescrowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    smartcontract?: boolean | paymentsescrow$smartcontractArgs<ExtArgs>
    milestones?: boolean | paymentsescrow$milestonesArgs<ExtArgs>
    freelancer?: boolean | paymentsescrow$freelancerArgs<ExtArgs>
  }
  export type paymentsescrowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    smartcontract?: boolean | paymentsescrow$smartcontractArgs<ExtArgs>
    milestones?: boolean | paymentsescrow$milestonesArgs<ExtArgs>
    freelancer?: boolean | paymentsescrow$freelancerArgs<ExtArgs>
  }

  export type $paymentsescrowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "paymentsescrow"
    objects: {
      smartcontract: Prisma.$smartcontractPayload<ExtArgs> | null
      milestones: Prisma.$milestonesPayload<ExtArgs> | null
      freelancer: Prisma.$freelancerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contractid: number | null
      milestoneid: number | null
      type: $Enums.payment_type
      status: $Enums.payment_status | null
      paymentmethod: $Enums.payment_method | null
      txhash: string | null
      amount: number
      initiatedby: number | null
      receiverid: number | null
      notes: string | null
      timestamp: Date | null
      confirmedat: Date | null
    }, ExtArgs["result"]["paymentsescrow"]>
    composites: {}
  }

  type paymentsescrowGetPayload<S extends boolean | null | undefined | paymentsescrowDefaultArgs> = $Result.GetResult<Prisma.$paymentsescrowPayload, S>

  type paymentsescrowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentsescrowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsescrowCountAggregateInputType | true
    }

  export interface paymentsescrowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['paymentsescrow'], meta: { name: 'paymentsescrow' } }
    /**
     * Find zero or one Paymentsescrow that matches the filter.
     * @param {paymentsescrowFindUniqueArgs} args - Arguments to find a Paymentsescrow
     * @example
     * // Get one Paymentsescrow
     * const paymentsescrow = await prisma.paymentsescrow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentsescrowFindUniqueArgs>(args: SelectSubset<T, paymentsescrowFindUniqueArgs<ExtArgs>>): Prisma__paymentsescrowClient<$Result.GetResult<Prisma.$paymentsescrowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paymentsescrow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentsescrowFindUniqueOrThrowArgs} args - Arguments to find a Paymentsescrow
     * @example
     * // Get one Paymentsescrow
     * const paymentsescrow = await prisma.paymentsescrow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentsescrowFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentsescrowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentsescrowClient<$Result.GetResult<Prisma.$paymentsescrowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paymentsescrow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsescrowFindFirstArgs} args - Arguments to find a Paymentsescrow
     * @example
     * // Get one Paymentsescrow
     * const paymentsescrow = await prisma.paymentsescrow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentsescrowFindFirstArgs>(args?: SelectSubset<T, paymentsescrowFindFirstArgs<ExtArgs>>): Prisma__paymentsescrowClient<$Result.GetResult<Prisma.$paymentsescrowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paymentsescrow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsescrowFindFirstOrThrowArgs} args - Arguments to find a Paymentsescrow
     * @example
     * // Get one Paymentsescrow
     * const paymentsescrow = await prisma.paymentsescrow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentsescrowFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentsescrowFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentsescrowClient<$Result.GetResult<Prisma.$paymentsescrowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Paymentsescrows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsescrowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Paymentsescrows
     * const paymentsescrows = await prisma.paymentsescrow.findMany()
     * 
     * // Get first 10 Paymentsescrows
     * const paymentsescrows = await prisma.paymentsescrow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsescrowWithIdOnly = await prisma.paymentsescrow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paymentsescrowFindManyArgs>(args?: SelectSubset<T, paymentsescrowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsescrowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paymentsescrow.
     * @param {paymentsescrowCreateArgs} args - Arguments to create a Paymentsescrow.
     * @example
     * // Create one Paymentsescrow
     * const Paymentsescrow = await prisma.paymentsescrow.create({
     *   data: {
     *     // ... data to create a Paymentsescrow
     *   }
     * })
     * 
     */
    create<T extends paymentsescrowCreateArgs>(args: SelectSubset<T, paymentsescrowCreateArgs<ExtArgs>>): Prisma__paymentsescrowClient<$Result.GetResult<Prisma.$paymentsescrowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Paymentsescrows.
     * @param {paymentsescrowCreateManyArgs} args - Arguments to create many Paymentsescrows.
     * @example
     * // Create many Paymentsescrows
     * const paymentsescrow = await prisma.paymentsescrow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentsescrowCreateManyArgs>(args?: SelectSubset<T, paymentsescrowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Paymentsescrows and returns the data saved in the database.
     * @param {paymentsescrowCreateManyAndReturnArgs} args - Arguments to create many Paymentsescrows.
     * @example
     * // Create many Paymentsescrows
     * const paymentsescrow = await prisma.paymentsescrow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Paymentsescrows and only return the `id`
     * const paymentsescrowWithIdOnly = await prisma.paymentsescrow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends paymentsescrowCreateManyAndReturnArgs>(args?: SelectSubset<T, paymentsescrowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsescrowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Paymentsescrow.
     * @param {paymentsescrowDeleteArgs} args - Arguments to delete one Paymentsescrow.
     * @example
     * // Delete one Paymentsescrow
     * const Paymentsescrow = await prisma.paymentsescrow.delete({
     *   where: {
     *     // ... filter to delete one Paymentsescrow
     *   }
     * })
     * 
     */
    delete<T extends paymentsescrowDeleteArgs>(args: SelectSubset<T, paymentsescrowDeleteArgs<ExtArgs>>): Prisma__paymentsescrowClient<$Result.GetResult<Prisma.$paymentsescrowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paymentsescrow.
     * @param {paymentsescrowUpdateArgs} args - Arguments to update one Paymentsescrow.
     * @example
     * // Update one Paymentsescrow
     * const paymentsescrow = await prisma.paymentsescrow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentsescrowUpdateArgs>(args: SelectSubset<T, paymentsescrowUpdateArgs<ExtArgs>>): Prisma__paymentsescrowClient<$Result.GetResult<Prisma.$paymentsescrowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Paymentsescrows.
     * @param {paymentsescrowDeleteManyArgs} args - Arguments to filter Paymentsescrows to delete.
     * @example
     * // Delete a few Paymentsescrows
     * const { count } = await prisma.paymentsescrow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentsescrowDeleteManyArgs>(args?: SelectSubset<T, paymentsescrowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paymentsescrows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsescrowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Paymentsescrows
     * const paymentsescrow = await prisma.paymentsescrow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentsescrowUpdateManyArgs>(args: SelectSubset<T, paymentsescrowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paymentsescrows and returns the data updated in the database.
     * @param {paymentsescrowUpdateManyAndReturnArgs} args - Arguments to update many Paymentsescrows.
     * @example
     * // Update many Paymentsescrows
     * const paymentsescrow = await prisma.paymentsescrow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Paymentsescrows and only return the `id`
     * const paymentsescrowWithIdOnly = await prisma.paymentsescrow.updateManyAndReturn({
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
    updateManyAndReturn<T extends paymentsescrowUpdateManyAndReturnArgs>(args: SelectSubset<T, paymentsescrowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsescrowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Paymentsescrow.
     * @param {paymentsescrowUpsertArgs} args - Arguments to update or create a Paymentsescrow.
     * @example
     * // Update or create a Paymentsescrow
     * const paymentsescrow = await prisma.paymentsescrow.upsert({
     *   create: {
     *     // ... data to create a Paymentsescrow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paymentsescrow we want to update
     *   }
     * })
     */
    upsert<T extends paymentsescrowUpsertArgs>(args: SelectSubset<T, paymentsescrowUpsertArgs<ExtArgs>>): Prisma__paymentsescrowClient<$Result.GetResult<Prisma.$paymentsescrowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Paymentsescrows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsescrowCountArgs} args - Arguments to filter Paymentsescrows to count.
     * @example
     * // Count the number of Paymentsescrows
     * const count = await prisma.paymentsescrow.count({
     *   where: {
     *     // ... the filter for the Paymentsescrows we want to count
     *   }
     * })
    **/
    count<T extends paymentsescrowCountArgs>(
      args?: Subset<T, paymentsescrowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsescrowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paymentsescrow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsescrowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentsescrowAggregateArgs>(args: Subset<T, PaymentsescrowAggregateArgs>): Prisma.PrismaPromise<GetPaymentsescrowAggregateType<T>>

    /**
     * Group by Paymentsescrow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsescrowGroupByArgs} args - Group by arguments.
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
      T extends paymentsescrowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentsescrowGroupByArgs['orderBy'] }
        : { orderBy?: paymentsescrowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, paymentsescrowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsescrowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the paymentsescrow model
   */
  readonly fields: paymentsescrowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for paymentsescrow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentsescrowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    smartcontract<T extends paymentsescrow$smartcontractArgs<ExtArgs> = {}>(args?: Subset<T, paymentsescrow$smartcontractArgs<ExtArgs>>): Prisma__smartcontractClient<$Result.GetResult<Prisma.$smartcontractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    milestones<T extends paymentsescrow$milestonesArgs<ExtArgs> = {}>(args?: Subset<T, paymentsescrow$milestonesArgs<ExtArgs>>): Prisma__milestonesClient<$Result.GetResult<Prisma.$milestonesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    freelancer<T extends paymentsescrow$freelancerArgs<ExtArgs> = {}>(args?: Subset<T, paymentsescrow$freelancerArgs<ExtArgs>>): Prisma__freelancerClient<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the paymentsescrow model
   */
  interface paymentsescrowFieldRefs {
    readonly id: FieldRef<"paymentsescrow", 'Int'>
    readonly contractid: FieldRef<"paymentsescrow", 'Int'>
    readonly milestoneid: FieldRef<"paymentsescrow", 'Int'>
    readonly type: FieldRef<"paymentsescrow", 'payment_type'>
    readonly status: FieldRef<"paymentsescrow", 'payment_status'>
    readonly paymentmethod: FieldRef<"paymentsescrow", 'payment_method'>
    readonly txhash: FieldRef<"paymentsescrow", 'String'>
    readonly amount: FieldRef<"paymentsescrow", 'Int'>
    readonly initiatedby: FieldRef<"paymentsescrow", 'Int'>
    readonly receiverid: FieldRef<"paymentsescrow", 'Int'>
    readonly notes: FieldRef<"paymentsescrow", 'String'>
    readonly timestamp: FieldRef<"paymentsescrow", 'DateTime'>
    readonly confirmedat: FieldRef<"paymentsescrow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * paymentsescrow findUnique
   */
  export type paymentsescrowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentsescrow
     */
    select?: paymentsescrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paymentsescrow
     */
    omit?: paymentsescrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsescrowInclude<ExtArgs> | null
    /**
     * Filter, which paymentsescrow to fetch.
     */
    where: paymentsescrowWhereUniqueInput
  }

  /**
   * paymentsescrow findUniqueOrThrow
   */
  export type paymentsescrowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentsescrow
     */
    select?: paymentsescrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paymentsescrow
     */
    omit?: paymentsescrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsescrowInclude<ExtArgs> | null
    /**
     * Filter, which paymentsescrow to fetch.
     */
    where: paymentsescrowWhereUniqueInput
  }

  /**
   * paymentsescrow findFirst
   */
  export type paymentsescrowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentsescrow
     */
    select?: paymentsescrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paymentsescrow
     */
    omit?: paymentsescrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsescrowInclude<ExtArgs> | null
    /**
     * Filter, which paymentsescrow to fetch.
     */
    where?: paymentsescrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paymentsescrows to fetch.
     */
    orderBy?: paymentsescrowOrderByWithRelationInput | paymentsescrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for paymentsescrows.
     */
    cursor?: paymentsescrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paymentsescrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paymentsescrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of paymentsescrows.
     */
    distinct?: PaymentsescrowScalarFieldEnum | PaymentsescrowScalarFieldEnum[]
  }

  /**
   * paymentsescrow findFirstOrThrow
   */
  export type paymentsescrowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentsescrow
     */
    select?: paymentsescrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paymentsescrow
     */
    omit?: paymentsescrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsescrowInclude<ExtArgs> | null
    /**
     * Filter, which paymentsescrow to fetch.
     */
    where?: paymentsescrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paymentsescrows to fetch.
     */
    orderBy?: paymentsescrowOrderByWithRelationInput | paymentsescrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for paymentsescrows.
     */
    cursor?: paymentsescrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paymentsescrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paymentsescrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of paymentsescrows.
     */
    distinct?: PaymentsescrowScalarFieldEnum | PaymentsescrowScalarFieldEnum[]
  }

  /**
   * paymentsescrow findMany
   */
  export type paymentsescrowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentsescrow
     */
    select?: paymentsescrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paymentsescrow
     */
    omit?: paymentsescrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsescrowInclude<ExtArgs> | null
    /**
     * Filter, which paymentsescrows to fetch.
     */
    where?: paymentsescrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paymentsescrows to fetch.
     */
    orderBy?: paymentsescrowOrderByWithRelationInput | paymentsescrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing paymentsescrows.
     */
    cursor?: paymentsescrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paymentsescrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paymentsescrows.
     */
    skip?: number
    distinct?: PaymentsescrowScalarFieldEnum | PaymentsescrowScalarFieldEnum[]
  }

  /**
   * paymentsescrow create
   */
  export type paymentsescrowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentsescrow
     */
    select?: paymentsescrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paymentsescrow
     */
    omit?: paymentsescrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsescrowInclude<ExtArgs> | null
    /**
     * The data needed to create a paymentsescrow.
     */
    data: XOR<paymentsescrowCreateInput, paymentsescrowUncheckedCreateInput>
  }

  /**
   * paymentsescrow createMany
   */
  export type paymentsescrowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many paymentsescrows.
     */
    data: paymentsescrowCreateManyInput | paymentsescrowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * paymentsescrow createManyAndReturn
   */
  export type paymentsescrowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentsescrow
     */
    select?: paymentsescrowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the paymentsescrow
     */
    omit?: paymentsescrowOmit<ExtArgs> | null
    /**
     * The data used to create many paymentsescrows.
     */
    data: paymentsescrowCreateManyInput | paymentsescrowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsescrowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * paymentsescrow update
   */
  export type paymentsescrowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentsescrow
     */
    select?: paymentsescrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paymentsescrow
     */
    omit?: paymentsescrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsescrowInclude<ExtArgs> | null
    /**
     * The data needed to update a paymentsescrow.
     */
    data: XOR<paymentsescrowUpdateInput, paymentsescrowUncheckedUpdateInput>
    /**
     * Choose, which paymentsescrow to update.
     */
    where: paymentsescrowWhereUniqueInput
  }

  /**
   * paymentsescrow updateMany
   */
  export type paymentsescrowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update paymentsescrows.
     */
    data: XOR<paymentsescrowUpdateManyMutationInput, paymentsescrowUncheckedUpdateManyInput>
    /**
     * Filter which paymentsescrows to update
     */
    where?: paymentsescrowWhereInput
    /**
     * Limit how many paymentsescrows to update.
     */
    limit?: number
  }

  /**
   * paymentsescrow updateManyAndReturn
   */
  export type paymentsescrowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentsescrow
     */
    select?: paymentsescrowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the paymentsescrow
     */
    omit?: paymentsescrowOmit<ExtArgs> | null
    /**
     * The data used to update paymentsescrows.
     */
    data: XOR<paymentsescrowUpdateManyMutationInput, paymentsescrowUncheckedUpdateManyInput>
    /**
     * Filter which paymentsescrows to update
     */
    where?: paymentsescrowWhereInput
    /**
     * Limit how many paymentsescrows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsescrowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * paymentsescrow upsert
   */
  export type paymentsescrowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentsescrow
     */
    select?: paymentsescrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paymentsescrow
     */
    omit?: paymentsescrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsescrowInclude<ExtArgs> | null
    /**
     * The filter to search for the paymentsescrow to update in case it exists.
     */
    where: paymentsescrowWhereUniqueInput
    /**
     * In case the paymentsescrow found by the `where` argument doesn't exist, create a new paymentsescrow with this data.
     */
    create: XOR<paymentsescrowCreateInput, paymentsescrowUncheckedCreateInput>
    /**
     * In case the paymentsescrow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentsescrowUpdateInput, paymentsescrowUncheckedUpdateInput>
  }

  /**
   * paymentsescrow delete
   */
  export type paymentsescrowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentsescrow
     */
    select?: paymentsescrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paymentsescrow
     */
    omit?: paymentsescrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsescrowInclude<ExtArgs> | null
    /**
     * Filter which paymentsescrow to delete.
     */
    where: paymentsescrowWhereUniqueInput
  }

  /**
   * paymentsescrow deleteMany
   */
  export type paymentsescrowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which paymentsescrows to delete
     */
    where?: paymentsescrowWhereInput
    /**
     * Limit how many paymentsescrows to delete.
     */
    limit?: number
  }

  /**
   * paymentsescrow.smartcontract
   */
  export type paymentsescrow$smartcontractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the smartcontract
     */
    select?: smartcontractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the smartcontract
     */
    omit?: smartcontractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: smartcontractInclude<ExtArgs> | null
    where?: smartcontractWhereInput
  }

  /**
   * paymentsescrow.milestones
   */
  export type paymentsescrow$milestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestones
     */
    select?: milestonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the milestones
     */
    omit?: milestonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: milestonesInclude<ExtArgs> | null
    where?: milestonesWhereInput
  }

  /**
   * paymentsescrow.freelancer
   */
  export type paymentsescrow$freelancerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freelancer
     */
    omit?: freelancerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelancerInclude<ExtArgs> | null
    where?: freelancerWhereInput
  }

  /**
   * paymentsescrow without action
   */
  export type paymentsescrowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentsescrow
     */
    select?: paymentsescrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paymentsescrow
     */
    omit?: paymentsescrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsescrowInclude<ExtArgs> | null
  }


  /**
   * Model proposals
   */

  export type AggregateProposals = {
    _count: ProposalsCountAggregateOutputType | null
    _avg: ProposalsAvgAggregateOutputType | null
    _sum: ProposalsSumAggregateOutputType | null
    _min: ProposalsMinAggregateOutputType | null
    _max: ProposalsMaxAggregateOutputType | null
  }

  export type ProposalsAvgAggregateOutputType = {
    id: number | null
    jobid: number | null
    freelancerid: number | null
    budgetquoted: number | null
  }

  export type ProposalsSumAggregateOutputType = {
    id: number | null
    jobid: number | null
    freelancerid: number | null
    budgetquoted: number | null
  }

  export type ProposalsMinAggregateOutputType = {
    id: number | null
    jobid: number | null
    freelancerid: number | null
    coverletter: string | null
    budgetquoted: number | null
    proposedtimeline: string | null
    status: $Enums.proposal_status | null
    submittedat: Date | null
  }

  export type ProposalsMaxAggregateOutputType = {
    id: number | null
    jobid: number | null
    freelancerid: number | null
    coverletter: string | null
    budgetquoted: number | null
    proposedtimeline: string | null
    status: $Enums.proposal_status | null
    submittedat: Date | null
  }

  export type ProposalsCountAggregateOutputType = {
    id: number
    jobid: number
    freelancerid: number
    coverletter: number
    budgetquoted: number
    proposedtimeline: number
    status: number
    submittedat: number
    _all: number
  }


  export type ProposalsAvgAggregateInputType = {
    id?: true
    jobid?: true
    freelancerid?: true
    budgetquoted?: true
  }

  export type ProposalsSumAggregateInputType = {
    id?: true
    jobid?: true
    freelancerid?: true
    budgetquoted?: true
  }

  export type ProposalsMinAggregateInputType = {
    id?: true
    jobid?: true
    freelancerid?: true
    coverletter?: true
    budgetquoted?: true
    proposedtimeline?: true
    status?: true
    submittedat?: true
  }

  export type ProposalsMaxAggregateInputType = {
    id?: true
    jobid?: true
    freelancerid?: true
    coverletter?: true
    budgetquoted?: true
    proposedtimeline?: true
    status?: true
    submittedat?: true
  }

  export type ProposalsCountAggregateInputType = {
    id?: true
    jobid?: true
    freelancerid?: true
    coverletter?: true
    budgetquoted?: true
    proposedtimeline?: true
    status?: true
    submittedat?: true
    _all?: true
  }

  export type ProposalsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which proposals to aggregate.
     */
    where?: proposalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proposals to fetch.
     */
    orderBy?: proposalsOrderByWithRelationInput | proposalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: proposalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned proposals
    **/
    _count?: true | ProposalsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProposalsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProposalsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProposalsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProposalsMaxAggregateInputType
  }

  export type GetProposalsAggregateType<T extends ProposalsAggregateArgs> = {
        [P in keyof T & keyof AggregateProposals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProposals[P]>
      : GetScalarType<T[P], AggregateProposals[P]>
  }




  export type proposalsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: proposalsWhereInput
    orderBy?: proposalsOrderByWithAggregationInput | proposalsOrderByWithAggregationInput[]
    by: ProposalsScalarFieldEnum[] | ProposalsScalarFieldEnum
    having?: proposalsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProposalsCountAggregateInputType | true
    _avg?: ProposalsAvgAggregateInputType
    _sum?: ProposalsSumAggregateInputType
    _min?: ProposalsMinAggregateInputType
    _max?: ProposalsMaxAggregateInputType
  }

  export type ProposalsGroupByOutputType = {
    id: number
    jobid: number | null
    freelancerid: number | null
    coverletter: string | null
    budgetquoted: number | null
    proposedtimeline: string | null
    status: $Enums.proposal_status | null
    submittedat: Date | null
    _count: ProposalsCountAggregateOutputType | null
    _avg: ProposalsAvgAggregateOutputType | null
    _sum: ProposalsSumAggregateOutputType | null
    _min: ProposalsMinAggregateOutputType | null
    _max: ProposalsMaxAggregateOutputType | null
  }

  type GetProposalsGroupByPayload<T extends proposalsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProposalsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProposalsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProposalsGroupByOutputType[P]>
            : GetScalarType<T[P], ProposalsGroupByOutputType[P]>
        }
      >
    >


  export type proposalsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobid?: boolean
    freelancerid?: boolean
    coverletter?: boolean
    budgetquoted?: boolean
    proposedtimeline?: boolean
    status?: boolean
    submittedat?: boolean
    freelancer?: boolean | proposals$freelancerArgs<ExtArgs>
    jobposted?: boolean | proposals$jobpostedArgs<ExtArgs>
  }, ExtArgs["result"]["proposals"]>

  export type proposalsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobid?: boolean
    freelancerid?: boolean
    coverletter?: boolean
    budgetquoted?: boolean
    proposedtimeline?: boolean
    status?: boolean
    submittedat?: boolean
    freelancer?: boolean | proposals$freelancerArgs<ExtArgs>
    jobposted?: boolean | proposals$jobpostedArgs<ExtArgs>
  }, ExtArgs["result"]["proposals"]>

  export type proposalsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobid?: boolean
    freelancerid?: boolean
    coverletter?: boolean
    budgetquoted?: boolean
    proposedtimeline?: boolean
    status?: boolean
    submittedat?: boolean
    freelancer?: boolean | proposals$freelancerArgs<ExtArgs>
    jobposted?: boolean | proposals$jobpostedArgs<ExtArgs>
  }, ExtArgs["result"]["proposals"]>

  export type proposalsSelectScalar = {
    id?: boolean
    jobid?: boolean
    freelancerid?: boolean
    coverletter?: boolean
    budgetquoted?: boolean
    proposedtimeline?: boolean
    status?: boolean
    submittedat?: boolean
  }

  export type proposalsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobid" | "freelancerid" | "coverletter" | "budgetquoted" | "proposedtimeline" | "status" | "submittedat", ExtArgs["result"]["proposals"]>
  export type proposalsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    freelancer?: boolean | proposals$freelancerArgs<ExtArgs>
    jobposted?: boolean | proposals$jobpostedArgs<ExtArgs>
  }
  export type proposalsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    freelancer?: boolean | proposals$freelancerArgs<ExtArgs>
    jobposted?: boolean | proposals$jobpostedArgs<ExtArgs>
  }
  export type proposalsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    freelancer?: boolean | proposals$freelancerArgs<ExtArgs>
    jobposted?: boolean | proposals$jobpostedArgs<ExtArgs>
  }

  export type $proposalsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "proposals"
    objects: {
      freelancer: Prisma.$freelancerPayload<ExtArgs> | null
      jobposted: Prisma.$jobpostedPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jobid: number | null
      freelancerid: number | null
      coverletter: string | null
      budgetquoted: number | null
      proposedtimeline: string | null
      status: $Enums.proposal_status | null
      submittedat: Date | null
    }, ExtArgs["result"]["proposals"]>
    composites: {}
  }

  type proposalsGetPayload<S extends boolean | null | undefined | proposalsDefaultArgs> = $Result.GetResult<Prisma.$proposalsPayload, S>

  type proposalsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<proposalsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProposalsCountAggregateInputType | true
    }

  export interface proposalsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['proposals'], meta: { name: 'proposals' } }
    /**
     * Find zero or one Proposals that matches the filter.
     * @param {proposalsFindUniqueArgs} args - Arguments to find a Proposals
     * @example
     * // Get one Proposals
     * const proposals = await prisma.proposals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends proposalsFindUniqueArgs>(args: SelectSubset<T, proposalsFindUniqueArgs<ExtArgs>>): Prisma__proposalsClient<$Result.GetResult<Prisma.$proposalsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proposals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {proposalsFindUniqueOrThrowArgs} args - Arguments to find a Proposals
     * @example
     * // Get one Proposals
     * const proposals = await prisma.proposals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends proposalsFindUniqueOrThrowArgs>(args: SelectSubset<T, proposalsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__proposalsClient<$Result.GetResult<Prisma.$proposalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalsFindFirstArgs} args - Arguments to find a Proposals
     * @example
     * // Get one Proposals
     * const proposals = await prisma.proposals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends proposalsFindFirstArgs>(args?: SelectSubset<T, proposalsFindFirstArgs<ExtArgs>>): Prisma__proposalsClient<$Result.GetResult<Prisma.$proposalsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalsFindFirstOrThrowArgs} args - Arguments to find a Proposals
     * @example
     * // Get one Proposals
     * const proposals = await prisma.proposals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends proposalsFindFirstOrThrowArgs>(args?: SelectSubset<T, proposalsFindFirstOrThrowArgs<ExtArgs>>): Prisma__proposalsClient<$Result.GetResult<Prisma.$proposalsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proposals
     * const proposals = await prisma.proposals.findMany()
     * 
     * // Get first 10 Proposals
     * const proposals = await prisma.proposals.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proposalsWithIdOnly = await prisma.proposals.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends proposalsFindManyArgs>(args?: SelectSubset<T, proposalsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proposalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proposals.
     * @param {proposalsCreateArgs} args - Arguments to create a Proposals.
     * @example
     * // Create one Proposals
     * const Proposals = await prisma.proposals.create({
     *   data: {
     *     // ... data to create a Proposals
     *   }
     * })
     * 
     */
    create<T extends proposalsCreateArgs>(args: SelectSubset<T, proposalsCreateArgs<ExtArgs>>): Prisma__proposalsClient<$Result.GetResult<Prisma.$proposalsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proposals.
     * @param {proposalsCreateManyArgs} args - Arguments to create many Proposals.
     * @example
     * // Create many Proposals
     * const proposals = await prisma.proposals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends proposalsCreateManyArgs>(args?: SelectSubset<T, proposalsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proposals and returns the data saved in the database.
     * @param {proposalsCreateManyAndReturnArgs} args - Arguments to create many Proposals.
     * @example
     * // Create many Proposals
     * const proposals = await prisma.proposals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proposals and only return the `id`
     * const proposalsWithIdOnly = await prisma.proposals.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends proposalsCreateManyAndReturnArgs>(args?: SelectSubset<T, proposalsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proposalsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proposals.
     * @param {proposalsDeleteArgs} args - Arguments to delete one Proposals.
     * @example
     * // Delete one Proposals
     * const Proposals = await prisma.proposals.delete({
     *   where: {
     *     // ... filter to delete one Proposals
     *   }
     * })
     * 
     */
    delete<T extends proposalsDeleteArgs>(args: SelectSubset<T, proposalsDeleteArgs<ExtArgs>>): Prisma__proposalsClient<$Result.GetResult<Prisma.$proposalsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proposals.
     * @param {proposalsUpdateArgs} args - Arguments to update one Proposals.
     * @example
     * // Update one Proposals
     * const proposals = await prisma.proposals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends proposalsUpdateArgs>(args: SelectSubset<T, proposalsUpdateArgs<ExtArgs>>): Prisma__proposalsClient<$Result.GetResult<Prisma.$proposalsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proposals.
     * @param {proposalsDeleteManyArgs} args - Arguments to filter Proposals to delete.
     * @example
     * // Delete a few Proposals
     * const { count } = await prisma.proposals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends proposalsDeleteManyArgs>(args?: SelectSubset<T, proposalsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proposals
     * const proposals = await prisma.proposals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends proposalsUpdateManyArgs>(args: SelectSubset<T, proposalsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proposals and returns the data updated in the database.
     * @param {proposalsUpdateManyAndReturnArgs} args - Arguments to update many Proposals.
     * @example
     * // Update many Proposals
     * const proposals = await prisma.proposals.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Proposals and only return the `id`
     * const proposalsWithIdOnly = await prisma.proposals.updateManyAndReturn({
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
    updateManyAndReturn<T extends proposalsUpdateManyAndReturnArgs>(args: SelectSubset<T, proposalsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proposalsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proposals.
     * @param {proposalsUpsertArgs} args - Arguments to update or create a Proposals.
     * @example
     * // Update or create a Proposals
     * const proposals = await prisma.proposals.upsert({
     *   create: {
     *     // ... data to create a Proposals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proposals we want to update
     *   }
     * })
     */
    upsert<T extends proposalsUpsertArgs>(args: SelectSubset<T, proposalsUpsertArgs<ExtArgs>>): Prisma__proposalsClient<$Result.GetResult<Prisma.$proposalsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalsCountArgs} args - Arguments to filter Proposals to count.
     * @example
     * // Count the number of Proposals
     * const count = await prisma.proposals.count({
     *   where: {
     *     // ... the filter for the Proposals we want to count
     *   }
     * })
    **/
    count<T extends proposalsCountArgs>(
      args?: Subset<T, proposalsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProposalsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProposalsAggregateArgs>(args: Subset<T, ProposalsAggregateArgs>): Prisma.PrismaPromise<GetProposalsAggregateType<T>>

    /**
     * Group by Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalsGroupByArgs} args - Group by arguments.
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
      T extends proposalsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: proposalsGroupByArgs['orderBy'] }
        : { orderBy?: proposalsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, proposalsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProposalsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the proposals model
   */
  readonly fields: proposalsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for proposals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__proposalsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    freelancer<T extends proposals$freelancerArgs<ExtArgs> = {}>(args?: Subset<T, proposals$freelancerArgs<ExtArgs>>): Prisma__freelancerClient<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    jobposted<T extends proposals$jobpostedArgs<ExtArgs> = {}>(args?: Subset<T, proposals$jobpostedArgs<ExtArgs>>): Prisma__jobpostedClient<$Result.GetResult<Prisma.$jobpostedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the proposals model
   */
  interface proposalsFieldRefs {
    readonly id: FieldRef<"proposals", 'Int'>
    readonly jobid: FieldRef<"proposals", 'Int'>
    readonly freelancerid: FieldRef<"proposals", 'Int'>
    readonly coverletter: FieldRef<"proposals", 'String'>
    readonly budgetquoted: FieldRef<"proposals", 'Int'>
    readonly proposedtimeline: FieldRef<"proposals", 'String'>
    readonly status: FieldRef<"proposals", 'proposal_status'>
    readonly submittedat: FieldRef<"proposals", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * proposals findUnique
   */
  export type proposalsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposals
     */
    select?: proposalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proposals
     */
    omit?: proposalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proposalsInclude<ExtArgs> | null
    /**
     * Filter, which proposals to fetch.
     */
    where: proposalsWhereUniqueInput
  }

  /**
   * proposals findUniqueOrThrow
   */
  export type proposalsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposals
     */
    select?: proposalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proposals
     */
    omit?: proposalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proposalsInclude<ExtArgs> | null
    /**
     * Filter, which proposals to fetch.
     */
    where: proposalsWhereUniqueInput
  }

  /**
   * proposals findFirst
   */
  export type proposalsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposals
     */
    select?: proposalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proposals
     */
    omit?: proposalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proposalsInclude<ExtArgs> | null
    /**
     * Filter, which proposals to fetch.
     */
    where?: proposalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proposals to fetch.
     */
    orderBy?: proposalsOrderByWithRelationInput | proposalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for proposals.
     */
    cursor?: proposalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of proposals.
     */
    distinct?: ProposalsScalarFieldEnum | ProposalsScalarFieldEnum[]
  }

  /**
   * proposals findFirstOrThrow
   */
  export type proposalsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposals
     */
    select?: proposalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proposals
     */
    omit?: proposalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proposalsInclude<ExtArgs> | null
    /**
     * Filter, which proposals to fetch.
     */
    where?: proposalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proposals to fetch.
     */
    orderBy?: proposalsOrderByWithRelationInput | proposalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for proposals.
     */
    cursor?: proposalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of proposals.
     */
    distinct?: ProposalsScalarFieldEnum | ProposalsScalarFieldEnum[]
  }

  /**
   * proposals findMany
   */
  export type proposalsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposals
     */
    select?: proposalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proposals
     */
    omit?: proposalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proposalsInclude<ExtArgs> | null
    /**
     * Filter, which proposals to fetch.
     */
    where?: proposalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proposals to fetch.
     */
    orderBy?: proposalsOrderByWithRelationInput | proposalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing proposals.
     */
    cursor?: proposalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proposals.
     */
    skip?: number
    distinct?: ProposalsScalarFieldEnum | ProposalsScalarFieldEnum[]
  }

  /**
   * proposals create
   */
  export type proposalsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposals
     */
    select?: proposalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proposals
     */
    omit?: proposalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proposalsInclude<ExtArgs> | null
    /**
     * The data needed to create a proposals.
     */
    data?: XOR<proposalsCreateInput, proposalsUncheckedCreateInput>
  }

  /**
   * proposals createMany
   */
  export type proposalsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many proposals.
     */
    data: proposalsCreateManyInput | proposalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * proposals createManyAndReturn
   */
  export type proposalsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposals
     */
    select?: proposalsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the proposals
     */
    omit?: proposalsOmit<ExtArgs> | null
    /**
     * The data used to create many proposals.
     */
    data: proposalsCreateManyInput | proposalsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proposalsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * proposals update
   */
  export type proposalsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposals
     */
    select?: proposalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proposals
     */
    omit?: proposalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proposalsInclude<ExtArgs> | null
    /**
     * The data needed to update a proposals.
     */
    data: XOR<proposalsUpdateInput, proposalsUncheckedUpdateInput>
    /**
     * Choose, which proposals to update.
     */
    where: proposalsWhereUniqueInput
  }

  /**
   * proposals updateMany
   */
  export type proposalsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update proposals.
     */
    data: XOR<proposalsUpdateManyMutationInput, proposalsUncheckedUpdateManyInput>
    /**
     * Filter which proposals to update
     */
    where?: proposalsWhereInput
    /**
     * Limit how many proposals to update.
     */
    limit?: number
  }

  /**
   * proposals updateManyAndReturn
   */
  export type proposalsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposals
     */
    select?: proposalsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the proposals
     */
    omit?: proposalsOmit<ExtArgs> | null
    /**
     * The data used to update proposals.
     */
    data: XOR<proposalsUpdateManyMutationInput, proposalsUncheckedUpdateManyInput>
    /**
     * Filter which proposals to update
     */
    where?: proposalsWhereInput
    /**
     * Limit how many proposals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proposalsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * proposals upsert
   */
  export type proposalsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposals
     */
    select?: proposalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proposals
     */
    omit?: proposalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proposalsInclude<ExtArgs> | null
    /**
     * The filter to search for the proposals to update in case it exists.
     */
    where: proposalsWhereUniqueInput
    /**
     * In case the proposals found by the `where` argument doesn't exist, create a new proposals with this data.
     */
    create: XOR<proposalsCreateInput, proposalsUncheckedCreateInput>
    /**
     * In case the proposals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<proposalsUpdateInput, proposalsUncheckedUpdateInput>
  }

  /**
   * proposals delete
   */
  export type proposalsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposals
     */
    select?: proposalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proposals
     */
    omit?: proposalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proposalsInclude<ExtArgs> | null
    /**
     * Filter which proposals to delete.
     */
    where: proposalsWhereUniqueInput
  }

  /**
   * proposals deleteMany
   */
  export type proposalsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which proposals to delete
     */
    where?: proposalsWhereInput
    /**
     * Limit how many proposals to delete.
     */
    limit?: number
  }

  /**
   * proposals.freelancer
   */
  export type proposals$freelancerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freelancer
     */
    omit?: freelancerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelancerInclude<ExtArgs> | null
    where?: freelancerWhereInput
  }

  /**
   * proposals.jobposted
   */
  export type proposals$jobpostedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobposted
     */
    select?: jobpostedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobposted
     */
    omit?: jobpostedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobpostedInclude<ExtArgs> | null
    where?: jobpostedWhereInput
  }

  /**
   * proposals without action
   */
  export type proposalsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposals
     */
    select?: proposalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proposals
     */
    omit?: proposalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proposalsInclude<ExtArgs> | null
  }


  /**
   * Model smartcontract
   */

  export type AggregateSmartcontract = {
    _count: SmartcontractCountAggregateOutputType | null
    _avg: SmartcontractAvgAggregateOutputType | null
    _sum: SmartcontractSumAggregateOutputType | null
    _min: SmartcontractMinAggregateOutputType | null
    _max: SmartcontractMaxAggregateOutputType | null
  }

  export type SmartcontractAvgAggregateOutputType = {
    id: number | null
    jobid: number | null
    freelancerid: number | null
    clientid: number | null
    escrowamount: number | null
    platformfee: number | null
  }

  export type SmartcontractSumAggregateOutputType = {
    id: number | null
    jobid: number | null
    freelancerid: number | null
    clientid: number | null
    escrowamount: number | null
    platformfee: number | null
  }

  export type SmartcontractMinAggregateOutputType = {
    id: number | null
    jobid: number | null
    freelancerid: number | null
    clientid: number | null
    startdate: Date | null
    enddate: Date | null
    escrowamount: number | null
    smartcontractaddress: string | null
    isactive: boolean | null
    iscompleted: boolean | null
    isdisputed: boolean | null
    platformfee: number | null
    paymentmethod: string | null
    terminationreason: string | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type SmartcontractMaxAggregateOutputType = {
    id: number | null
    jobid: number | null
    freelancerid: number | null
    clientid: number | null
    startdate: Date | null
    enddate: Date | null
    escrowamount: number | null
    smartcontractaddress: string | null
    isactive: boolean | null
    iscompleted: boolean | null
    isdisputed: boolean | null
    platformfee: number | null
    paymentmethod: string | null
    terminationreason: string | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type SmartcontractCountAggregateOutputType = {
    id: number
    jobid: number
    freelancerid: number
    clientid: number
    startdate: number
    enddate: number
    escrowamount: number
    smartcontractaddress: number
    isactive: number
    iscompleted: number
    isdisputed: number
    platformfee: number
    paymentmethod: number
    terminationreason: number
    createdat: number
    updatedat: number
    _all: number
  }


  export type SmartcontractAvgAggregateInputType = {
    id?: true
    jobid?: true
    freelancerid?: true
    clientid?: true
    escrowamount?: true
    platformfee?: true
  }

  export type SmartcontractSumAggregateInputType = {
    id?: true
    jobid?: true
    freelancerid?: true
    clientid?: true
    escrowamount?: true
    platformfee?: true
  }

  export type SmartcontractMinAggregateInputType = {
    id?: true
    jobid?: true
    freelancerid?: true
    clientid?: true
    startdate?: true
    enddate?: true
    escrowamount?: true
    smartcontractaddress?: true
    isactive?: true
    iscompleted?: true
    isdisputed?: true
    platformfee?: true
    paymentmethod?: true
    terminationreason?: true
    createdat?: true
    updatedat?: true
  }

  export type SmartcontractMaxAggregateInputType = {
    id?: true
    jobid?: true
    freelancerid?: true
    clientid?: true
    startdate?: true
    enddate?: true
    escrowamount?: true
    smartcontractaddress?: true
    isactive?: true
    iscompleted?: true
    isdisputed?: true
    platformfee?: true
    paymentmethod?: true
    terminationreason?: true
    createdat?: true
    updatedat?: true
  }

  export type SmartcontractCountAggregateInputType = {
    id?: true
    jobid?: true
    freelancerid?: true
    clientid?: true
    startdate?: true
    enddate?: true
    escrowamount?: true
    smartcontractaddress?: true
    isactive?: true
    iscompleted?: true
    isdisputed?: true
    platformfee?: true
    paymentmethod?: true
    terminationreason?: true
    createdat?: true
    updatedat?: true
    _all?: true
  }

  export type SmartcontractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which smartcontract to aggregate.
     */
    where?: smartcontractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of smartcontracts to fetch.
     */
    orderBy?: smartcontractOrderByWithRelationInput | smartcontractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: smartcontractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` smartcontracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` smartcontracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned smartcontracts
    **/
    _count?: true | SmartcontractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SmartcontractAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SmartcontractSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SmartcontractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SmartcontractMaxAggregateInputType
  }

  export type GetSmartcontractAggregateType<T extends SmartcontractAggregateArgs> = {
        [P in keyof T & keyof AggregateSmartcontract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSmartcontract[P]>
      : GetScalarType<T[P], AggregateSmartcontract[P]>
  }




  export type smartcontractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: smartcontractWhereInput
    orderBy?: smartcontractOrderByWithAggregationInput | smartcontractOrderByWithAggregationInput[]
    by: SmartcontractScalarFieldEnum[] | SmartcontractScalarFieldEnum
    having?: smartcontractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SmartcontractCountAggregateInputType | true
    _avg?: SmartcontractAvgAggregateInputType
    _sum?: SmartcontractSumAggregateInputType
    _min?: SmartcontractMinAggregateInputType
    _max?: SmartcontractMaxAggregateInputType
  }

  export type SmartcontractGroupByOutputType = {
    id: number
    jobid: number | null
    freelancerid: number | null
    clientid: number | null
    startdate: Date
    enddate: Date | null
    escrowamount: number
    smartcontractaddress: string | null
    isactive: boolean | null
    iscompleted: boolean | null
    isdisputed: boolean | null
    platformfee: number | null
    paymentmethod: string | null
    terminationreason: string | null
    createdat: Date | null
    updatedat: Date | null
    _count: SmartcontractCountAggregateOutputType | null
    _avg: SmartcontractAvgAggregateOutputType | null
    _sum: SmartcontractSumAggregateOutputType | null
    _min: SmartcontractMinAggregateOutputType | null
    _max: SmartcontractMaxAggregateOutputType | null
  }

  type GetSmartcontractGroupByPayload<T extends smartcontractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SmartcontractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SmartcontractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SmartcontractGroupByOutputType[P]>
            : GetScalarType<T[P], SmartcontractGroupByOutputType[P]>
        }
      >
    >


  export type smartcontractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobid?: boolean
    freelancerid?: boolean
    clientid?: boolean
    startdate?: boolean
    enddate?: boolean
    escrowamount?: boolean
    smartcontractaddress?: boolean
    isactive?: boolean
    iscompleted?: boolean
    isdisputed?: boolean
    platformfee?: boolean
    paymentmethod?: boolean
    terminationreason?: boolean
    createdat?: boolean
    updatedat?: boolean
    disputes?: boolean | smartcontract$disputesArgs<ExtArgs>
    paymentsescrow?: boolean | smartcontract$paymentsescrowArgs<ExtArgs>
    client?: boolean | smartcontract$clientArgs<ExtArgs>
    freelancer?: boolean | smartcontract$freelancerArgs<ExtArgs>
    jobposted?: boolean | smartcontract$jobpostedArgs<ExtArgs>
    _count?: boolean | SmartcontractCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["smartcontract"]>

  export type smartcontractSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobid?: boolean
    freelancerid?: boolean
    clientid?: boolean
    startdate?: boolean
    enddate?: boolean
    escrowamount?: boolean
    smartcontractaddress?: boolean
    isactive?: boolean
    iscompleted?: boolean
    isdisputed?: boolean
    platformfee?: boolean
    paymentmethod?: boolean
    terminationreason?: boolean
    createdat?: boolean
    updatedat?: boolean
    client?: boolean | smartcontract$clientArgs<ExtArgs>
    freelancer?: boolean | smartcontract$freelancerArgs<ExtArgs>
    jobposted?: boolean | smartcontract$jobpostedArgs<ExtArgs>
  }, ExtArgs["result"]["smartcontract"]>

  export type smartcontractSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobid?: boolean
    freelancerid?: boolean
    clientid?: boolean
    startdate?: boolean
    enddate?: boolean
    escrowamount?: boolean
    smartcontractaddress?: boolean
    isactive?: boolean
    iscompleted?: boolean
    isdisputed?: boolean
    platformfee?: boolean
    paymentmethod?: boolean
    terminationreason?: boolean
    createdat?: boolean
    updatedat?: boolean
    client?: boolean | smartcontract$clientArgs<ExtArgs>
    freelancer?: boolean | smartcontract$freelancerArgs<ExtArgs>
    jobposted?: boolean | smartcontract$jobpostedArgs<ExtArgs>
  }, ExtArgs["result"]["smartcontract"]>

  export type smartcontractSelectScalar = {
    id?: boolean
    jobid?: boolean
    freelancerid?: boolean
    clientid?: boolean
    startdate?: boolean
    enddate?: boolean
    escrowamount?: boolean
    smartcontractaddress?: boolean
    isactive?: boolean
    iscompleted?: boolean
    isdisputed?: boolean
    platformfee?: boolean
    paymentmethod?: boolean
    terminationreason?: boolean
    createdat?: boolean
    updatedat?: boolean
  }

  export type smartcontractOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobid" | "freelancerid" | "clientid" | "startdate" | "enddate" | "escrowamount" | "smartcontractaddress" | "isactive" | "iscompleted" | "isdisputed" | "platformfee" | "paymentmethod" | "terminationreason" | "createdat" | "updatedat", ExtArgs["result"]["smartcontract"]>
  export type smartcontractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disputes?: boolean | smartcontract$disputesArgs<ExtArgs>
    paymentsescrow?: boolean | smartcontract$paymentsescrowArgs<ExtArgs>
    client?: boolean | smartcontract$clientArgs<ExtArgs>
    freelancer?: boolean | smartcontract$freelancerArgs<ExtArgs>
    jobposted?: boolean | smartcontract$jobpostedArgs<ExtArgs>
    _count?: boolean | SmartcontractCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type smartcontractIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | smartcontract$clientArgs<ExtArgs>
    freelancer?: boolean | smartcontract$freelancerArgs<ExtArgs>
    jobposted?: boolean | smartcontract$jobpostedArgs<ExtArgs>
  }
  export type smartcontractIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | smartcontract$clientArgs<ExtArgs>
    freelancer?: boolean | smartcontract$freelancerArgs<ExtArgs>
    jobposted?: boolean | smartcontract$jobpostedArgs<ExtArgs>
  }

  export type $smartcontractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "smartcontract"
    objects: {
      disputes: Prisma.$disputesPayload<ExtArgs>[]
      paymentsescrow: Prisma.$paymentsescrowPayload<ExtArgs>[]
      client: Prisma.$clientPayload<ExtArgs> | null
      freelancer: Prisma.$freelancerPayload<ExtArgs> | null
      jobposted: Prisma.$jobpostedPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jobid: number | null
      freelancerid: number | null
      clientid: number | null
      startdate: Date
      enddate: Date | null
      escrowamount: number
      smartcontractaddress: string | null
      isactive: boolean | null
      iscompleted: boolean | null
      isdisputed: boolean | null
      platformfee: number | null
      paymentmethod: string | null
      terminationreason: string | null
      createdat: Date | null
      updatedat: Date | null
    }, ExtArgs["result"]["smartcontract"]>
    composites: {}
  }

  type smartcontractGetPayload<S extends boolean | null | undefined | smartcontractDefaultArgs> = $Result.GetResult<Prisma.$smartcontractPayload, S>

  type smartcontractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<smartcontractFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SmartcontractCountAggregateInputType | true
    }

  export interface smartcontractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['smartcontract'], meta: { name: 'smartcontract' } }
    /**
     * Find zero or one Smartcontract that matches the filter.
     * @param {smartcontractFindUniqueArgs} args - Arguments to find a Smartcontract
     * @example
     * // Get one Smartcontract
     * const smartcontract = await prisma.smartcontract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends smartcontractFindUniqueArgs>(args: SelectSubset<T, smartcontractFindUniqueArgs<ExtArgs>>): Prisma__smartcontractClient<$Result.GetResult<Prisma.$smartcontractPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Smartcontract that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {smartcontractFindUniqueOrThrowArgs} args - Arguments to find a Smartcontract
     * @example
     * // Get one Smartcontract
     * const smartcontract = await prisma.smartcontract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends smartcontractFindUniqueOrThrowArgs>(args: SelectSubset<T, smartcontractFindUniqueOrThrowArgs<ExtArgs>>): Prisma__smartcontractClient<$Result.GetResult<Prisma.$smartcontractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Smartcontract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {smartcontractFindFirstArgs} args - Arguments to find a Smartcontract
     * @example
     * // Get one Smartcontract
     * const smartcontract = await prisma.smartcontract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends smartcontractFindFirstArgs>(args?: SelectSubset<T, smartcontractFindFirstArgs<ExtArgs>>): Prisma__smartcontractClient<$Result.GetResult<Prisma.$smartcontractPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Smartcontract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {smartcontractFindFirstOrThrowArgs} args - Arguments to find a Smartcontract
     * @example
     * // Get one Smartcontract
     * const smartcontract = await prisma.smartcontract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends smartcontractFindFirstOrThrowArgs>(args?: SelectSubset<T, smartcontractFindFirstOrThrowArgs<ExtArgs>>): Prisma__smartcontractClient<$Result.GetResult<Prisma.$smartcontractPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Smartcontracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {smartcontractFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Smartcontracts
     * const smartcontracts = await prisma.smartcontract.findMany()
     * 
     * // Get first 10 Smartcontracts
     * const smartcontracts = await prisma.smartcontract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const smartcontractWithIdOnly = await prisma.smartcontract.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends smartcontractFindManyArgs>(args?: SelectSubset<T, smartcontractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$smartcontractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Smartcontract.
     * @param {smartcontractCreateArgs} args - Arguments to create a Smartcontract.
     * @example
     * // Create one Smartcontract
     * const Smartcontract = await prisma.smartcontract.create({
     *   data: {
     *     // ... data to create a Smartcontract
     *   }
     * })
     * 
     */
    create<T extends smartcontractCreateArgs>(args: SelectSubset<T, smartcontractCreateArgs<ExtArgs>>): Prisma__smartcontractClient<$Result.GetResult<Prisma.$smartcontractPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Smartcontracts.
     * @param {smartcontractCreateManyArgs} args - Arguments to create many Smartcontracts.
     * @example
     * // Create many Smartcontracts
     * const smartcontract = await prisma.smartcontract.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends smartcontractCreateManyArgs>(args?: SelectSubset<T, smartcontractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Smartcontracts and returns the data saved in the database.
     * @param {smartcontractCreateManyAndReturnArgs} args - Arguments to create many Smartcontracts.
     * @example
     * // Create many Smartcontracts
     * const smartcontract = await prisma.smartcontract.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Smartcontracts and only return the `id`
     * const smartcontractWithIdOnly = await prisma.smartcontract.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends smartcontractCreateManyAndReturnArgs>(args?: SelectSubset<T, smartcontractCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$smartcontractPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Smartcontract.
     * @param {smartcontractDeleteArgs} args - Arguments to delete one Smartcontract.
     * @example
     * // Delete one Smartcontract
     * const Smartcontract = await prisma.smartcontract.delete({
     *   where: {
     *     // ... filter to delete one Smartcontract
     *   }
     * })
     * 
     */
    delete<T extends smartcontractDeleteArgs>(args: SelectSubset<T, smartcontractDeleteArgs<ExtArgs>>): Prisma__smartcontractClient<$Result.GetResult<Prisma.$smartcontractPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Smartcontract.
     * @param {smartcontractUpdateArgs} args - Arguments to update one Smartcontract.
     * @example
     * // Update one Smartcontract
     * const smartcontract = await prisma.smartcontract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends smartcontractUpdateArgs>(args: SelectSubset<T, smartcontractUpdateArgs<ExtArgs>>): Prisma__smartcontractClient<$Result.GetResult<Prisma.$smartcontractPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Smartcontracts.
     * @param {smartcontractDeleteManyArgs} args - Arguments to filter Smartcontracts to delete.
     * @example
     * // Delete a few Smartcontracts
     * const { count } = await prisma.smartcontract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends smartcontractDeleteManyArgs>(args?: SelectSubset<T, smartcontractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Smartcontracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {smartcontractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Smartcontracts
     * const smartcontract = await prisma.smartcontract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends smartcontractUpdateManyArgs>(args: SelectSubset<T, smartcontractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Smartcontracts and returns the data updated in the database.
     * @param {smartcontractUpdateManyAndReturnArgs} args - Arguments to update many Smartcontracts.
     * @example
     * // Update many Smartcontracts
     * const smartcontract = await prisma.smartcontract.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Smartcontracts and only return the `id`
     * const smartcontractWithIdOnly = await prisma.smartcontract.updateManyAndReturn({
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
    updateManyAndReturn<T extends smartcontractUpdateManyAndReturnArgs>(args: SelectSubset<T, smartcontractUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$smartcontractPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Smartcontract.
     * @param {smartcontractUpsertArgs} args - Arguments to update or create a Smartcontract.
     * @example
     * // Update or create a Smartcontract
     * const smartcontract = await prisma.smartcontract.upsert({
     *   create: {
     *     // ... data to create a Smartcontract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Smartcontract we want to update
     *   }
     * })
     */
    upsert<T extends smartcontractUpsertArgs>(args: SelectSubset<T, smartcontractUpsertArgs<ExtArgs>>): Prisma__smartcontractClient<$Result.GetResult<Prisma.$smartcontractPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Smartcontracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {smartcontractCountArgs} args - Arguments to filter Smartcontracts to count.
     * @example
     * // Count the number of Smartcontracts
     * const count = await prisma.smartcontract.count({
     *   where: {
     *     // ... the filter for the Smartcontracts we want to count
     *   }
     * })
    **/
    count<T extends smartcontractCountArgs>(
      args?: Subset<T, smartcontractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SmartcontractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Smartcontract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmartcontractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SmartcontractAggregateArgs>(args: Subset<T, SmartcontractAggregateArgs>): Prisma.PrismaPromise<GetSmartcontractAggregateType<T>>

    /**
     * Group by Smartcontract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {smartcontractGroupByArgs} args - Group by arguments.
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
      T extends smartcontractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: smartcontractGroupByArgs['orderBy'] }
        : { orderBy?: smartcontractGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, smartcontractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSmartcontractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the smartcontract model
   */
  readonly fields: smartcontractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for smartcontract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__smartcontractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    disputes<T extends smartcontract$disputesArgs<ExtArgs> = {}>(args?: Subset<T, smartcontract$disputesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$disputesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paymentsescrow<T extends smartcontract$paymentsescrowArgs<ExtArgs> = {}>(args?: Subset<T, smartcontract$paymentsescrowArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsescrowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    client<T extends smartcontract$clientArgs<ExtArgs> = {}>(args?: Subset<T, smartcontract$clientArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    freelancer<T extends smartcontract$freelancerArgs<ExtArgs> = {}>(args?: Subset<T, smartcontract$freelancerArgs<ExtArgs>>): Prisma__freelancerClient<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    jobposted<T extends smartcontract$jobpostedArgs<ExtArgs> = {}>(args?: Subset<T, smartcontract$jobpostedArgs<ExtArgs>>): Prisma__jobpostedClient<$Result.GetResult<Prisma.$jobpostedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the smartcontract model
   */
  interface smartcontractFieldRefs {
    readonly id: FieldRef<"smartcontract", 'Int'>
    readonly jobid: FieldRef<"smartcontract", 'Int'>
    readonly freelancerid: FieldRef<"smartcontract", 'Int'>
    readonly clientid: FieldRef<"smartcontract", 'Int'>
    readonly startdate: FieldRef<"smartcontract", 'DateTime'>
    readonly enddate: FieldRef<"smartcontract", 'DateTime'>
    readonly escrowamount: FieldRef<"smartcontract", 'Int'>
    readonly smartcontractaddress: FieldRef<"smartcontract", 'String'>
    readonly isactive: FieldRef<"smartcontract", 'Boolean'>
    readonly iscompleted: FieldRef<"smartcontract", 'Boolean'>
    readonly isdisputed: FieldRef<"smartcontract", 'Boolean'>
    readonly platformfee: FieldRef<"smartcontract", 'Int'>
    readonly paymentmethod: FieldRef<"smartcontract", 'String'>
    readonly terminationreason: FieldRef<"smartcontract", 'String'>
    readonly createdat: FieldRef<"smartcontract", 'DateTime'>
    readonly updatedat: FieldRef<"smartcontract", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * smartcontract findUnique
   */
  export type smartcontractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the smartcontract
     */
    select?: smartcontractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the smartcontract
     */
    omit?: smartcontractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: smartcontractInclude<ExtArgs> | null
    /**
     * Filter, which smartcontract to fetch.
     */
    where: smartcontractWhereUniqueInput
  }

  /**
   * smartcontract findUniqueOrThrow
   */
  export type smartcontractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the smartcontract
     */
    select?: smartcontractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the smartcontract
     */
    omit?: smartcontractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: smartcontractInclude<ExtArgs> | null
    /**
     * Filter, which smartcontract to fetch.
     */
    where: smartcontractWhereUniqueInput
  }

  /**
   * smartcontract findFirst
   */
  export type smartcontractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the smartcontract
     */
    select?: smartcontractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the smartcontract
     */
    omit?: smartcontractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: smartcontractInclude<ExtArgs> | null
    /**
     * Filter, which smartcontract to fetch.
     */
    where?: smartcontractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of smartcontracts to fetch.
     */
    orderBy?: smartcontractOrderByWithRelationInput | smartcontractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for smartcontracts.
     */
    cursor?: smartcontractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` smartcontracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` smartcontracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of smartcontracts.
     */
    distinct?: SmartcontractScalarFieldEnum | SmartcontractScalarFieldEnum[]
  }

  /**
   * smartcontract findFirstOrThrow
   */
  export type smartcontractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the smartcontract
     */
    select?: smartcontractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the smartcontract
     */
    omit?: smartcontractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: smartcontractInclude<ExtArgs> | null
    /**
     * Filter, which smartcontract to fetch.
     */
    where?: smartcontractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of smartcontracts to fetch.
     */
    orderBy?: smartcontractOrderByWithRelationInput | smartcontractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for smartcontracts.
     */
    cursor?: smartcontractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` smartcontracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` smartcontracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of smartcontracts.
     */
    distinct?: SmartcontractScalarFieldEnum | SmartcontractScalarFieldEnum[]
  }

  /**
   * smartcontract findMany
   */
  export type smartcontractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the smartcontract
     */
    select?: smartcontractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the smartcontract
     */
    omit?: smartcontractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: smartcontractInclude<ExtArgs> | null
    /**
     * Filter, which smartcontracts to fetch.
     */
    where?: smartcontractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of smartcontracts to fetch.
     */
    orderBy?: smartcontractOrderByWithRelationInput | smartcontractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing smartcontracts.
     */
    cursor?: smartcontractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` smartcontracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` smartcontracts.
     */
    skip?: number
    distinct?: SmartcontractScalarFieldEnum | SmartcontractScalarFieldEnum[]
  }

  /**
   * smartcontract create
   */
  export type smartcontractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the smartcontract
     */
    select?: smartcontractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the smartcontract
     */
    omit?: smartcontractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: smartcontractInclude<ExtArgs> | null
    /**
     * The data needed to create a smartcontract.
     */
    data: XOR<smartcontractCreateInput, smartcontractUncheckedCreateInput>
  }

  /**
   * smartcontract createMany
   */
  export type smartcontractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many smartcontracts.
     */
    data: smartcontractCreateManyInput | smartcontractCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * smartcontract createManyAndReturn
   */
  export type smartcontractCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the smartcontract
     */
    select?: smartcontractSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the smartcontract
     */
    omit?: smartcontractOmit<ExtArgs> | null
    /**
     * The data used to create many smartcontracts.
     */
    data: smartcontractCreateManyInput | smartcontractCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: smartcontractIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * smartcontract update
   */
  export type smartcontractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the smartcontract
     */
    select?: smartcontractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the smartcontract
     */
    omit?: smartcontractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: smartcontractInclude<ExtArgs> | null
    /**
     * The data needed to update a smartcontract.
     */
    data: XOR<smartcontractUpdateInput, smartcontractUncheckedUpdateInput>
    /**
     * Choose, which smartcontract to update.
     */
    where: smartcontractWhereUniqueInput
  }

  /**
   * smartcontract updateMany
   */
  export type smartcontractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update smartcontracts.
     */
    data: XOR<smartcontractUpdateManyMutationInput, smartcontractUncheckedUpdateManyInput>
    /**
     * Filter which smartcontracts to update
     */
    where?: smartcontractWhereInput
    /**
     * Limit how many smartcontracts to update.
     */
    limit?: number
  }

  /**
   * smartcontract updateManyAndReturn
   */
  export type smartcontractUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the smartcontract
     */
    select?: smartcontractSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the smartcontract
     */
    omit?: smartcontractOmit<ExtArgs> | null
    /**
     * The data used to update smartcontracts.
     */
    data: XOR<smartcontractUpdateManyMutationInput, smartcontractUncheckedUpdateManyInput>
    /**
     * Filter which smartcontracts to update
     */
    where?: smartcontractWhereInput
    /**
     * Limit how many smartcontracts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: smartcontractIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * smartcontract upsert
   */
  export type smartcontractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the smartcontract
     */
    select?: smartcontractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the smartcontract
     */
    omit?: smartcontractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: smartcontractInclude<ExtArgs> | null
    /**
     * The filter to search for the smartcontract to update in case it exists.
     */
    where: smartcontractWhereUniqueInput
    /**
     * In case the smartcontract found by the `where` argument doesn't exist, create a new smartcontract with this data.
     */
    create: XOR<smartcontractCreateInput, smartcontractUncheckedCreateInput>
    /**
     * In case the smartcontract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<smartcontractUpdateInput, smartcontractUncheckedUpdateInput>
  }

  /**
   * smartcontract delete
   */
  export type smartcontractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the smartcontract
     */
    select?: smartcontractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the smartcontract
     */
    omit?: smartcontractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: smartcontractInclude<ExtArgs> | null
    /**
     * Filter which smartcontract to delete.
     */
    where: smartcontractWhereUniqueInput
  }

  /**
   * smartcontract deleteMany
   */
  export type smartcontractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which smartcontracts to delete
     */
    where?: smartcontractWhereInput
    /**
     * Limit how many smartcontracts to delete.
     */
    limit?: number
  }

  /**
   * smartcontract.disputes
   */
  export type smartcontract$disputesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disputes
     */
    select?: disputesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disputes
     */
    omit?: disputesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disputesInclude<ExtArgs> | null
    where?: disputesWhereInput
    orderBy?: disputesOrderByWithRelationInput | disputesOrderByWithRelationInput[]
    cursor?: disputesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisputesScalarFieldEnum | DisputesScalarFieldEnum[]
  }

  /**
   * smartcontract.paymentsescrow
   */
  export type smartcontract$paymentsescrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentsescrow
     */
    select?: paymentsescrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paymentsescrow
     */
    omit?: paymentsescrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsescrowInclude<ExtArgs> | null
    where?: paymentsescrowWhereInput
    orderBy?: paymentsescrowOrderByWithRelationInput | paymentsescrowOrderByWithRelationInput[]
    cursor?: paymentsescrowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsescrowScalarFieldEnum | PaymentsescrowScalarFieldEnum[]
  }

  /**
   * smartcontract.client
   */
  export type smartcontract$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    where?: clientWhereInput
  }

  /**
   * smartcontract.freelancer
   */
  export type smartcontract$freelancerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freelancer
     */
    omit?: freelancerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelancerInclude<ExtArgs> | null
    where?: freelancerWhereInput
  }

  /**
   * smartcontract.jobposted
   */
  export type smartcontract$jobpostedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobposted
     */
    select?: jobpostedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobposted
     */
    omit?: jobpostedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobpostedInclude<ExtArgs> | null
    where?: jobpostedWhereInput
  }

  /**
   * smartcontract without action
   */
  export type smartcontractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the smartcontract
     */
    select?: smartcontractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the smartcontract
     */
    omit?: smartcontractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: smartcontractInclude<ExtArgs> | null
  }


  /**
   * Model staking
   */

  export type AggregateStaking = {
    _count: StakingCountAggregateOutputType | null
    _avg: StakingAvgAggregateOutputType | null
    _sum: StakingSumAggregateOutputType | null
    _min: StakingMinAggregateOutputType | null
    _max: StakingMaxAggregateOutputType | null
  }

  export type StakingAvgAggregateOutputType = {
    id: number | null
    userid: number | null
    stakeamount: number | null
    trustscore: number | null
    resumescore: number | null
  }

  export type StakingSumAggregateOutputType = {
    id: number | null
    userid: number | null
    stakeamount: number | null
    trustscore: number | null
    resumescore: number | null
  }

  export type StakingMinAggregateOutputType = {
    id: number | null
    userid: number | null
    stakeamount: number | null
    stakepurpose: $Enums.stake_purpose | null
    trustscore: number | null
    resumescore: number | null
    isvalidator: boolean | null
    startdate: Date | null
    enddate: Date | null
    active: boolean | null
  }

  export type StakingMaxAggregateOutputType = {
    id: number | null
    userid: number | null
    stakeamount: number | null
    stakepurpose: $Enums.stake_purpose | null
    trustscore: number | null
    resumescore: number | null
    isvalidator: boolean | null
    startdate: Date | null
    enddate: Date | null
    active: boolean | null
  }

  export type StakingCountAggregateOutputType = {
    id: number
    userid: number
    stakeamount: number
    stakepurpose: number
    trustscore: number
    resumescore: number
    isvalidator: number
    startdate: number
    enddate: number
    active: number
    _all: number
  }


  export type StakingAvgAggregateInputType = {
    id?: true
    userid?: true
    stakeamount?: true
    trustscore?: true
    resumescore?: true
  }

  export type StakingSumAggregateInputType = {
    id?: true
    userid?: true
    stakeamount?: true
    trustscore?: true
    resumescore?: true
  }

  export type StakingMinAggregateInputType = {
    id?: true
    userid?: true
    stakeamount?: true
    stakepurpose?: true
    trustscore?: true
    resumescore?: true
    isvalidator?: true
    startdate?: true
    enddate?: true
    active?: true
  }

  export type StakingMaxAggregateInputType = {
    id?: true
    userid?: true
    stakeamount?: true
    stakepurpose?: true
    trustscore?: true
    resumescore?: true
    isvalidator?: true
    startdate?: true
    enddate?: true
    active?: true
  }

  export type StakingCountAggregateInputType = {
    id?: true
    userid?: true
    stakeamount?: true
    stakepurpose?: true
    trustscore?: true
    resumescore?: true
    isvalidator?: true
    startdate?: true
    enddate?: true
    active?: true
    _all?: true
  }

  export type StakingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staking to aggregate.
     */
    where?: stakingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stakings to fetch.
     */
    orderBy?: stakingOrderByWithRelationInput | stakingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stakingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stakings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stakings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stakings
    **/
    _count?: true | StakingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StakingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StakingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StakingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StakingMaxAggregateInputType
  }

  export type GetStakingAggregateType<T extends StakingAggregateArgs> = {
        [P in keyof T & keyof AggregateStaking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaking[P]>
      : GetScalarType<T[P], AggregateStaking[P]>
  }




  export type stakingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stakingWhereInput
    orderBy?: stakingOrderByWithAggregationInput | stakingOrderByWithAggregationInput[]
    by: StakingScalarFieldEnum[] | StakingScalarFieldEnum
    having?: stakingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StakingCountAggregateInputType | true
    _avg?: StakingAvgAggregateInputType
    _sum?: StakingSumAggregateInputType
    _min?: StakingMinAggregateInputType
    _max?: StakingMaxAggregateInputType
  }

  export type StakingGroupByOutputType = {
    id: number
    userid: number
    stakeamount: number
    stakepurpose: $Enums.stake_purpose | null
    trustscore: number | null
    resumescore: number | null
    isvalidator: boolean | null
    startdate: Date | null
    enddate: Date | null
    active: boolean | null
    _count: StakingCountAggregateOutputType | null
    _avg: StakingAvgAggregateOutputType | null
    _sum: StakingSumAggregateOutputType | null
    _min: StakingMinAggregateOutputType | null
    _max: StakingMaxAggregateOutputType | null
  }

  type GetStakingGroupByPayload<T extends stakingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StakingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StakingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StakingGroupByOutputType[P]>
            : GetScalarType<T[P], StakingGroupByOutputType[P]>
        }
      >
    >


  export type stakingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    stakeamount?: boolean
    stakepurpose?: boolean
    trustscore?: boolean
    resumescore?: boolean
    isvalidator?: boolean
    startdate?: boolean
    enddate?: boolean
    active?: boolean
  }, ExtArgs["result"]["staking"]>

  export type stakingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    stakeamount?: boolean
    stakepurpose?: boolean
    trustscore?: boolean
    resumescore?: boolean
    isvalidator?: boolean
    startdate?: boolean
    enddate?: boolean
    active?: boolean
  }, ExtArgs["result"]["staking"]>

  export type stakingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    stakeamount?: boolean
    stakepurpose?: boolean
    trustscore?: boolean
    resumescore?: boolean
    isvalidator?: boolean
    startdate?: boolean
    enddate?: boolean
    active?: boolean
  }, ExtArgs["result"]["staking"]>

  export type stakingSelectScalar = {
    id?: boolean
    userid?: boolean
    stakeamount?: boolean
    stakepurpose?: boolean
    trustscore?: boolean
    resumescore?: boolean
    isvalidator?: boolean
    startdate?: boolean
    enddate?: boolean
    active?: boolean
  }

  export type stakingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userid" | "stakeamount" | "stakepurpose" | "trustscore" | "resumescore" | "isvalidator" | "startdate" | "enddate" | "active", ExtArgs["result"]["staking"]>

  export type $stakingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "staking"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userid: number
      stakeamount: number
      stakepurpose: $Enums.stake_purpose | null
      trustscore: number | null
      resumescore: number | null
      isvalidator: boolean | null
      startdate: Date | null
      enddate: Date | null
      active: boolean | null
    }, ExtArgs["result"]["staking"]>
    composites: {}
  }

  type stakingGetPayload<S extends boolean | null | undefined | stakingDefaultArgs> = $Result.GetResult<Prisma.$stakingPayload, S>

  type stakingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stakingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StakingCountAggregateInputType | true
    }

  export interface stakingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['staking'], meta: { name: 'staking' } }
    /**
     * Find zero or one Staking that matches the filter.
     * @param {stakingFindUniqueArgs} args - Arguments to find a Staking
     * @example
     * // Get one Staking
     * const staking = await prisma.staking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stakingFindUniqueArgs>(args: SelectSubset<T, stakingFindUniqueArgs<ExtArgs>>): Prisma__stakingClient<$Result.GetResult<Prisma.$stakingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stakingFindUniqueOrThrowArgs} args - Arguments to find a Staking
     * @example
     * // Get one Staking
     * const staking = await prisma.staking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stakingFindUniqueOrThrowArgs>(args: SelectSubset<T, stakingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stakingClient<$Result.GetResult<Prisma.$stakingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stakingFindFirstArgs} args - Arguments to find a Staking
     * @example
     * // Get one Staking
     * const staking = await prisma.staking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stakingFindFirstArgs>(args?: SelectSubset<T, stakingFindFirstArgs<ExtArgs>>): Prisma__stakingClient<$Result.GetResult<Prisma.$stakingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stakingFindFirstOrThrowArgs} args - Arguments to find a Staking
     * @example
     * // Get one Staking
     * const staking = await prisma.staking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stakingFindFirstOrThrowArgs>(args?: SelectSubset<T, stakingFindFirstOrThrowArgs<ExtArgs>>): Prisma__stakingClient<$Result.GetResult<Prisma.$stakingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stakings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stakingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stakings
     * const stakings = await prisma.staking.findMany()
     * 
     * // Get first 10 Stakings
     * const stakings = await prisma.staking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stakingWithIdOnly = await prisma.staking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends stakingFindManyArgs>(args?: SelectSubset<T, stakingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stakingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staking.
     * @param {stakingCreateArgs} args - Arguments to create a Staking.
     * @example
     * // Create one Staking
     * const Staking = await prisma.staking.create({
     *   data: {
     *     // ... data to create a Staking
     *   }
     * })
     * 
     */
    create<T extends stakingCreateArgs>(args: SelectSubset<T, stakingCreateArgs<ExtArgs>>): Prisma__stakingClient<$Result.GetResult<Prisma.$stakingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stakings.
     * @param {stakingCreateManyArgs} args - Arguments to create many Stakings.
     * @example
     * // Create many Stakings
     * const staking = await prisma.staking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stakingCreateManyArgs>(args?: SelectSubset<T, stakingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stakings and returns the data saved in the database.
     * @param {stakingCreateManyAndReturnArgs} args - Arguments to create many Stakings.
     * @example
     * // Create many Stakings
     * const staking = await prisma.staking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stakings and only return the `id`
     * const stakingWithIdOnly = await prisma.staking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stakingCreateManyAndReturnArgs>(args?: SelectSubset<T, stakingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stakingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Staking.
     * @param {stakingDeleteArgs} args - Arguments to delete one Staking.
     * @example
     * // Delete one Staking
     * const Staking = await prisma.staking.delete({
     *   where: {
     *     // ... filter to delete one Staking
     *   }
     * })
     * 
     */
    delete<T extends stakingDeleteArgs>(args: SelectSubset<T, stakingDeleteArgs<ExtArgs>>): Prisma__stakingClient<$Result.GetResult<Prisma.$stakingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staking.
     * @param {stakingUpdateArgs} args - Arguments to update one Staking.
     * @example
     * // Update one Staking
     * const staking = await prisma.staking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stakingUpdateArgs>(args: SelectSubset<T, stakingUpdateArgs<ExtArgs>>): Prisma__stakingClient<$Result.GetResult<Prisma.$stakingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stakings.
     * @param {stakingDeleteManyArgs} args - Arguments to filter Stakings to delete.
     * @example
     * // Delete a few Stakings
     * const { count } = await prisma.staking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stakingDeleteManyArgs>(args?: SelectSubset<T, stakingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stakings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stakingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stakings
     * const staking = await prisma.staking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stakingUpdateManyArgs>(args: SelectSubset<T, stakingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stakings and returns the data updated in the database.
     * @param {stakingUpdateManyAndReturnArgs} args - Arguments to update many Stakings.
     * @example
     * // Update many Stakings
     * const staking = await prisma.staking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stakings and only return the `id`
     * const stakingWithIdOnly = await prisma.staking.updateManyAndReturn({
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
    updateManyAndReturn<T extends stakingUpdateManyAndReturnArgs>(args: SelectSubset<T, stakingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stakingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Staking.
     * @param {stakingUpsertArgs} args - Arguments to update or create a Staking.
     * @example
     * // Update or create a Staking
     * const staking = await prisma.staking.upsert({
     *   create: {
     *     // ... data to create a Staking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staking we want to update
     *   }
     * })
     */
    upsert<T extends stakingUpsertArgs>(args: SelectSubset<T, stakingUpsertArgs<ExtArgs>>): Prisma__stakingClient<$Result.GetResult<Prisma.$stakingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stakings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stakingCountArgs} args - Arguments to filter Stakings to count.
     * @example
     * // Count the number of Stakings
     * const count = await prisma.staking.count({
     *   where: {
     *     // ... the filter for the Stakings we want to count
     *   }
     * })
    **/
    count<T extends stakingCountArgs>(
      args?: Subset<T, stakingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StakingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StakingAggregateArgs>(args: Subset<T, StakingAggregateArgs>): Prisma.PrismaPromise<GetStakingAggregateType<T>>

    /**
     * Group by Staking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stakingGroupByArgs} args - Group by arguments.
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
      T extends stakingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stakingGroupByArgs['orderBy'] }
        : { orderBy?: stakingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, stakingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStakingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the staking model
   */
  readonly fields: stakingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for staking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stakingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the staking model
   */
  interface stakingFieldRefs {
    readonly id: FieldRef<"staking", 'Int'>
    readonly userid: FieldRef<"staking", 'Int'>
    readonly stakeamount: FieldRef<"staking", 'Int'>
    readonly stakepurpose: FieldRef<"staking", 'stake_purpose'>
    readonly trustscore: FieldRef<"staking", 'Float'>
    readonly resumescore: FieldRef<"staking", 'Int'>
    readonly isvalidator: FieldRef<"staking", 'Boolean'>
    readonly startdate: FieldRef<"staking", 'DateTime'>
    readonly enddate: FieldRef<"staking", 'DateTime'>
    readonly active: FieldRef<"staking", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * staking findUnique
   */
  export type stakingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staking
     */
    select?: stakingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staking
     */
    omit?: stakingOmit<ExtArgs> | null
    /**
     * Filter, which staking to fetch.
     */
    where: stakingWhereUniqueInput
  }

  /**
   * staking findUniqueOrThrow
   */
  export type stakingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staking
     */
    select?: stakingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staking
     */
    omit?: stakingOmit<ExtArgs> | null
    /**
     * Filter, which staking to fetch.
     */
    where: stakingWhereUniqueInput
  }

  /**
   * staking findFirst
   */
  export type stakingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staking
     */
    select?: stakingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staking
     */
    omit?: stakingOmit<ExtArgs> | null
    /**
     * Filter, which staking to fetch.
     */
    where?: stakingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stakings to fetch.
     */
    orderBy?: stakingOrderByWithRelationInput | stakingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stakings.
     */
    cursor?: stakingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stakings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stakings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stakings.
     */
    distinct?: StakingScalarFieldEnum | StakingScalarFieldEnum[]
  }

  /**
   * staking findFirstOrThrow
   */
  export type stakingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staking
     */
    select?: stakingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staking
     */
    omit?: stakingOmit<ExtArgs> | null
    /**
     * Filter, which staking to fetch.
     */
    where?: stakingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stakings to fetch.
     */
    orderBy?: stakingOrderByWithRelationInput | stakingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stakings.
     */
    cursor?: stakingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stakings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stakings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stakings.
     */
    distinct?: StakingScalarFieldEnum | StakingScalarFieldEnum[]
  }

  /**
   * staking findMany
   */
  export type stakingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staking
     */
    select?: stakingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staking
     */
    omit?: stakingOmit<ExtArgs> | null
    /**
     * Filter, which stakings to fetch.
     */
    where?: stakingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stakings to fetch.
     */
    orderBy?: stakingOrderByWithRelationInput | stakingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stakings.
     */
    cursor?: stakingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stakings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stakings.
     */
    skip?: number
    distinct?: StakingScalarFieldEnum | StakingScalarFieldEnum[]
  }

  /**
   * staking create
   */
  export type stakingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staking
     */
    select?: stakingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staking
     */
    omit?: stakingOmit<ExtArgs> | null
    /**
     * The data needed to create a staking.
     */
    data: XOR<stakingCreateInput, stakingUncheckedCreateInput>
  }

  /**
   * staking createMany
   */
  export type stakingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stakings.
     */
    data: stakingCreateManyInput | stakingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * staking createManyAndReturn
   */
  export type stakingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staking
     */
    select?: stakingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the staking
     */
    omit?: stakingOmit<ExtArgs> | null
    /**
     * The data used to create many stakings.
     */
    data: stakingCreateManyInput | stakingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * staking update
   */
  export type stakingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staking
     */
    select?: stakingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staking
     */
    omit?: stakingOmit<ExtArgs> | null
    /**
     * The data needed to update a staking.
     */
    data: XOR<stakingUpdateInput, stakingUncheckedUpdateInput>
    /**
     * Choose, which staking to update.
     */
    where: stakingWhereUniqueInput
  }

  /**
   * staking updateMany
   */
  export type stakingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stakings.
     */
    data: XOR<stakingUpdateManyMutationInput, stakingUncheckedUpdateManyInput>
    /**
     * Filter which stakings to update
     */
    where?: stakingWhereInput
    /**
     * Limit how many stakings to update.
     */
    limit?: number
  }

  /**
   * staking updateManyAndReturn
   */
  export type stakingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staking
     */
    select?: stakingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the staking
     */
    omit?: stakingOmit<ExtArgs> | null
    /**
     * The data used to update stakings.
     */
    data: XOR<stakingUpdateManyMutationInput, stakingUncheckedUpdateManyInput>
    /**
     * Filter which stakings to update
     */
    where?: stakingWhereInput
    /**
     * Limit how many stakings to update.
     */
    limit?: number
  }

  /**
   * staking upsert
   */
  export type stakingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staking
     */
    select?: stakingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staking
     */
    omit?: stakingOmit<ExtArgs> | null
    /**
     * The filter to search for the staking to update in case it exists.
     */
    where: stakingWhereUniqueInput
    /**
     * In case the staking found by the `where` argument doesn't exist, create a new staking with this data.
     */
    create: XOR<stakingCreateInput, stakingUncheckedCreateInput>
    /**
     * In case the staking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stakingUpdateInput, stakingUncheckedUpdateInput>
  }

  /**
   * staking delete
   */
  export type stakingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staking
     */
    select?: stakingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staking
     */
    omit?: stakingOmit<ExtArgs> | null
    /**
     * Filter which staking to delete.
     */
    where: stakingWhereUniqueInput
  }

  /**
   * staking deleteMany
   */
  export type stakingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stakings to delete
     */
    where?: stakingWhereInput
    /**
     * Limit how many stakings to delete.
     */
    limit?: number
  }

  /**
   * staking without action
   */
  export type stakingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staking
     */
    select?: stakingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staking
     */
    omit?: stakingOmit<ExtArgs> | null
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


  export const ClientScalarFieldEnum: {
    id: 'id',
    cognitoid: 'cognitoid',
    name: 'name',
    email: 'email',
    password: 'password',
    metamaskid: 'metamaskid'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const DisputesScalarFieldEnum: {
    id: 'id',
    contractid: 'contractid',
    milestoneid: 'milestoneid',
    raisedby: 'raisedby',
    againstuserid: 'againstuserid',
    description: 'description',
    status: 'status',
    resolution: 'resolution',
    resolutionby: 'resolutionby',
    evidenceurls: 'evidenceurls',
    createdat: 'createdat',
    resolvedat: 'resolvedat'
  };

  export type DisputesScalarFieldEnum = (typeof DisputesScalarFieldEnum)[keyof typeof DisputesScalarFieldEnum]


  export const FreelancerScalarFieldEnum: {
    id: 'id',
    cognitoid: 'cognitoid',
    name: 'name',
    email: 'email',
    password: 'password',
    metamaskid: 'metamaskid'
  };

  export type FreelancerScalarFieldEnum = (typeof FreelancerScalarFieldEnum)[keyof typeof FreelancerScalarFieldEnum]


  export const JobpostedScalarFieldEnum: {
    id: 'id',
    clientid: 'clientid',
    name: 'name',
    description: 'description',
    tags: 'tags',
    location: 'location',
    joblevel: 'joblevel',
    budget: 'budget',
    contracttohire: 'contracttohire',
    qualificationspreferred: 'qualificationspreferred',
    postingtime: 'postingtime',
    postingdate: 'postingdate',
    validtill: 'validtill',
    companyname: 'companyname',
    customizable: 'customizable',
    photourls: 'photourls'
  };

  export type JobpostedScalarFieldEnum = (typeof JobpostedScalarFieldEnum)[keyof typeof JobpostedScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    senderid: 'senderid',
    receiverid: 'receiverid',
    jobid: 'jobid',
    messagetext: 'messagetext',
    messagetype: 'messagetype',
    attachmenturl: 'attachmenturl',
    timestamp: 'timestamp',
    isread: 'isread',
    issystem: 'issystem'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const MilestonesScalarFieldEnum: {
    id: 'id',
    jobid: 'jobid',
    freelancerid: 'freelancerid',
    title: 'title',
    description: 'description',
    duedate: 'duedate',
    amount: 'amount',
    status: 'status'
  };

  export type MilestonesScalarFieldEnum = (typeof MilestonesScalarFieldEnum)[keyof typeof MilestonesScalarFieldEnum]


  export const NftcredentialScalarFieldEnum: {
    id: 'id',
    freelancerid: 'freelancerid',
    jobid: 'jobid',
    tokenid: 'tokenid',
    rating: 'rating',
    testimonial: 'testimonial',
    isminted: 'isminted',
    txhash: 'txhash',
    createdat: 'createdat'
  };

  export type NftcredentialScalarFieldEnum = (typeof NftcredentialScalarFieldEnum)[keyof typeof NftcredentialScalarFieldEnum]


  export const PaymentsescrowScalarFieldEnum: {
    id: 'id',
    contractid: 'contractid',
    milestoneid: 'milestoneid',
    type: 'type',
    status: 'status',
    paymentmethod: 'paymentmethod',
    txhash: 'txhash',
    amount: 'amount',
    initiatedby: 'initiatedby',
    receiverid: 'receiverid',
    notes: 'notes',
    timestamp: 'timestamp',
    confirmedat: 'confirmedat'
  };

  export type PaymentsescrowScalarFieldEnum = (typeof PaymentsescrowScalarFieldEnum)[keyof typeof PaymentsescrowScalarFieldEnum]


  export const ProposalsScalarFieldEnum: {
    id: 'id',
    jobid: 'jobid',
    freelancerid: 'freelancerid',
    coverletter: 'coverletter',
    budgetquoted: 'budgetquoted',
    proposedtimeline: 'proposedtimeline',
    status: 'status',
    submittedat: 'submittedat'
  };

  export type ProposalsScalarFieldEnum = (typeof ProposalsScalarFieldEnum)[keyof typeof ProposalsScalarFieldEnum]


  export const SmartcontractScalarFieldEnum: {
    id: 'id',
    jobid: 'jobid',
    freelancerid: 'freelancerid',
    clientid: 'clientid',
    startdate: 'startdate',
    enddate: 'enddate',
    escrowamount: 'escrowamount',
    smartcontractaddress: 'smartcontractaddress',
    isactive: 'isactive',
    iscompleted: 'iscompleted',
    isdisputed: 'isdisputed',
    platformfee: 'platformfee',
    paymentmethod: 'paymentmethod',
    terminationreason: 'terminationreason',
    createdat: 'createdat',
    updatedat: 'updatedat'
  };

  export type SmartcontractScalarFieldEnum = (typeof SmartcontractScalarFieldEnum)[keyof typeof SmartcontractScalarFieldEnum]


  export const StakingScalarFieldEnum: {
    id: 'id',
    userid: 'userid',
    stakeamount: 'stakeamount',
    stakepurpose: 'stakepurpose',
    trustscore: 'trustscore',
    resumescore: 'resumescore',
    isvalidator: 'isvalidator',
    startdate: 'startdate',
    enddate: 'enddate',
    active: 'active'
  };

  export type StakingScalarFieldEnum = (typeof StakingScalarFieldEnum)[keyof typeof StakingScalarFieldEnum]


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
   * Reference to a field of type 'dispute_status'
   */
  export type Enumdispute_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'dispute_status'>
    


  /**
   * Reference to a field of type 'dispute_status[]'
   */
  export type ListEnumdispute_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'dispute_status[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'message_type'
   */
  export type Enummessage_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'message_type'>
    


  /**
   * Reference to a field of type 'message_type[]'
   */
  export type ListEnummessage_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'message_type[]'>
    


  /**
   * Reference to a field of type 'milestone_status'
   */
  export type Enummilestone_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'milestone_status'>
    


  /**
   * Reference to a field of type 'milestone_status[]'
   */
  export type ListEnummilestone_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'milestone_status[]'>
    


  /**
   * Reference to a field of type 'payment_type'
   */
  export type Enumpayment_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_type'>
    


  /**
   * Reference to a field of type 'payment_type[]'
   */
  export type ListEnumpayment_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_type[]'>
    


  /**
   * Reference to a field of type 'payment_status'
   */
  export type Enumpayment_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_status'>
    


  /**
   * Reference to a field of type 'payment_status[]'
   */
  export type ListEnumpayment_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_status[]'>
    


  /**
   * Reference to a field of type 'payment_method'
   */
  export type Enumpayment_methodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_method'>
    


  /**
   * Reference to a field of type 'payment_method[]'
   */
  export type ListEnumpayment_methodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_method[]'>
    


  /**
   * Reference to a field of type 'proposal_status'
   */
  export type Enumproposal_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'proposal_status'>
    


  /**
   * Reference to a field of type 'proposal_status[]'
   */
  export type ListEnumproposal_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'proposal_status[]'>
    


  /**
   * Reference to a field of type 'stake_purpose'
   */
  export type Enumstake_purposeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'stake_purpose'>
    


  /**
   * Reference to a field of type 'stake_purpose[]'
   */
  export type ListEnumstake_purposeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'stake_purpose[]'>
    


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


  export type clientWhereInput = {
    AND?: clientWhereInput | clientWhereInput[]
    OR?: clientWhereInput[]
    NOT?: clientWhereInput | clientWhereInput[]
    id?: IntFilter<"client"> | number
    cognitoid?: StringFilter<"client"> | string
    name?: StringFilter<"client"> | string
    email?: StringFilter<"client"> | string
    password?: StringNullableFilter<"client"> | string | null
    metamaskid?: StringNullableFilter<"client"> | string | null
    jobposted?: JobpostedListRelationFilter
    smartcontract?: SmartcontractListRelationFilter
  }

  export type clientOrderByWithRelationInput = {
    id?: SortOrder
    cognitoid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    metamaskid?: SortOrderInput | SortOrder
    jobposted?: jobpostedOrderByRelationAggregateInput
    smartcontract?: smartcontractOrderByRelationAggregateInput
  }

  export type clientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cognitoid?: string
    email?: string
    metamaskid?: string
    AND?: clientWhereInput | clientWhereInput[]
    OR?: clientWhereInput[]
    NOT?: clientWhereInput | clientWhereInput[]
    name?: StringFilter<"client"> | string
    password?: StringNullableFilter<"client"> | string | null
    jobposted?: JobpostedListRelationFilter
    smartcontract?: SmartcontractListRelationFilter
  }, "id" | "cognitoid" | "email" | "metamaskid">

  export type clientOrderByWithAggregationInput = {
    id?: SortOrder
    cognitoid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    metamaskid?: SortOrderInput | SortOrder
    _count?: clientCountOrderByAggregateInput
    _avg?: clientAvgOrderByAggregateInput
    _max?: clientMaxOrderByAggregateInput
    _min?: clientMinOrderByAggregateInput
    _sum?: clientSumOrderByAggregateInput
  }

  export type clientScalarWhereWithAggregatesInput = {
    AND?: clientScalarWhereWithAggregatesInput | clientScalarWhereWithAggregatesInput[]
    OR?: clientScalarWhereWithAggregatesInput[]
    NOT?: clientScalarWhereWithAggregatesInput | clientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"client"> | number
    cognitoid?: StringWithAggregatesFilter<"client"> | string
    name?: StringWithAggregatesFilter<"client"> | string
    email?: StringWithAggregatesFilter<"client"> | string
    password?: StringNullableWithAggregatesFilter<"client"> | string | null
    metamaskid?: StringNullableWithAggregatesFilter<"client"> | string | null
  }

  export type disputesWhereInput = {
    AND?: disputesWhereInput | disputesWhereInput[]
    OR?: disputesWhereInput[]
    NOT?: disputesWhereInput | disputesWhereInput[]
    id?: IntFilter<"disputes"> | number
    contractid?: IntNullableFilter<"disputes"> | number | null
    milestoneid?: IntNullableFilter<"disputes"> | number | null
    raisedby?: IntFilter<"disputes"> | number
    againstuserid?: IntFilter<"disputes"> | number
    description?: StringNullableFilter<"disputes"> | string | null
    status?: Enumdispute_statusNullableFilter<"disputes"> | $Enums.dispute_status | null
    resolution?: StringNullableFilter<"disputes"> | string | null
    resolutionby?: IntNullableFilter<"disputes"> | number | null
    evidenceurls?: StringNullableListFilter<"disputes">
    createdat?: DateTimeNullableFilter<"disputes"> | Date | string | null
    resolvedat?: DateTimeNullableFilter<"disputes"> | Date | string | null
    smartcontract?: XOR<SmartcontractNullableScalarRelationFilter, smartcontractWhereInput> | null
    milestones?: XOR<MilestonesNullableScalarRelationFilter, milestonesWhereInput> | null
  }

  export type disputesOrderByWithRelationInput = {
    id?: SortOrder
    contractid?: SortOrderInput | SortOrder
    milestoneid?: SortOrderInput | SortOrder
    raisedby?: SortOrder
    againstuserid?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    resolution?: SortOrderInput | SortOrder
    resolutionby?: SortOrderInput | SortOrder
    evidenceurls?: SortOrder
    createdat?: SortOrderInput | SortOrder
    resolvedat?: SortOrderInput | SortOrder
    smartcontract?: smartcontractOrderByWithRelationInput
    milestones?: milestonesOrderByWithRelationInput
  }

  export type disputesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: disputesWhereInput | disputesWhereInput[]
    OR?: disputesWhereInput[]
    NOT?: disputesWhereInput | disputesWhereInput[]
    contractid?: IntNullableFilter<"disputes"> | number | null
    milestoneid?: IntNullableFilter<"disputes"> | number | null
    raisedby?: IntFilter<"disputes"> | number
    againstuserid?: IntFilter<"disputes"> | number
    description?: StringNullableFilter<"disputes"> | string | null
    status?: Enumdispute_statusNullableFilter<"disputes"> | $Enums.dispute_status | null
    resolution?: StringNullableFilter<"disputes"> | string | null
    resolutionby?: IntNullableFilter<"disputes"> | number | null
    evidenceurls?: StringNullableListFilter<"disputes">
    createdat?: DateTimeNullableFilter<"disputes"> | Date | string | null
    resolvedat?: DateTimeNullableFilter<"disputes"> | Date | string | null
    smartcontract?: XOR<SmartcontractNullableScalarRelationFilter, smartcontractWhereInput> | null
    milestones?: XOR<MilestonesNullableScalarRelationFilter, milestonesWhereInput> | null
  }, "id">

  export type disputesOrderByWithAggregationInput = {
    id?: SortOrder
    contractid?: SortOrderInput | SortOrder
    milestoneid?: SortOrderInput | SortOrder
    raisedby?: SortOrder
    againstuserid?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    resolution?: SortOrderInput | SortOrder
    resolutionby?: SortOrderInput | SortOrder
    evidenceurls?: SortOrder
    createdat?: SortOrderInput | SortOrder
    resolvedat?: SortOrderInput | SortOrder
    _count?: disputesCountOrderByAggregateInput
    _avg?: disputesAvgOrderByAggregateInput
    _max?: disputesMaxOrderByAggregateInput
    _min?: disputesMinOrderByAggregateInput
    _sum?: disputesSumOrderByAggregateInput
  }

  export type disputesScalarWhereWithAggregatesInput = {
    AND?: disputesScalarWhereWithAggregatesInput | disputesScalarWhereWithAggregatesInput[]
    OR?: disputesScalarWhereWithAggregatesInput[]
    NOT?: disputesScalarWhereWithAggregatesInput | disputesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"disputes"> | number
    contractid?: IntNullableWithAggregatesFilter<"disputes"> | number | null
    milestoneid?: IntNullableWithAggregatesFilter<"disputes"> | number | null
    raisedby?: IntWithAggregatesFilter<"disputes"> | number
    againstuserid?: IntWithAggregatesFilter<"disputes"> | number
    description?: StringNullableWithAggregatesFilter<"disputes"> | string | null
    status?: Enumdispute_statusNullableWithAggregatesFilter<"disputes"> | $Enums.dispute_status | null
    resolution?: StringNullableWithAggregatesFilter<"disputes"> | string | null
    resolutionby?: IntNullableWithAggregatesFilter<"disputes"> | number | null
    evidenceurls?: StringNullableListFilter<"disputes">
    createdat?: DateTimeNullableWithAggregatesFilter<"disputes"> | Date | string | null
    resolvedat?: DateTimeNullableWithAggregatesFilter<"disputes"> | Date | string | null
  }

  export type freelancerWhereInput = {
    AND?: freelancerWhereInput | freelancerWhereInput[]
    OR?: freelancerWhereInput[]
    NOT?: freelancerWhereInput | freelancerWhereInput[]
    id?: IntFilter<"freelancer"> | number
    cognitoid?: StringFilter<"freelancer"> | string
    name?: StringFilter<"freelancer"> | string
    email?: StringFilter<"freelancer"> | string
    password?: StringFilter<"freelancer"> | string
    metamaskid?: StringNullableFilter<"freelancer"> | string | null
    milestones?: MilestonesListRelationFilter
    nftcredential?: NftcredentialListRelationFilter
    paymentsescrow?: PaymentsescrowListRelationFilter
    proposals?: ProposalsListRelationFilter
    smartcontract?: SmartcontractListRelationFilter
  }

  export type freelancerOrderByWithRelationInput = {
    id?: SortOrder
    cognitoid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    metamaskid?: SortOrderInput | SortOrder
    milestones?: milestonesOrderByRelationAggregateInput
    nftcredential?: nftcredentialOrderByRelationAggregateInput
    paymentsescrow?: paymentsescrowOrderByRelationAggregateInput
    proposals?: proposalsOrderByRelationAggregateInput
    smartcontract?: smartcontractOrderByRelationAggregateInput
  }

  export type freelancerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cognitoid?: string
    email?: string
    metamaskid?: string
    AND?: freelancerWhereInput | freelancerWhereInput[]
    OR?: freelancerWhereInput[]
    NOT?: freelancerWhereInput | freelancerWhereInput[]
    name?: StringFilter<"freelancer"> | string
    password?: StringFilter<"freelancer"> | string
    milestones?: MilestonesListRelationFilter
    nftcredential?: NftcredentialListRelationFilter
    paymentsescrow?: PaymentsescrowListRelationFilter
    proposals?: ProposalsListRelationFilter
    smartcontract?: SmartcontractListRelationFilter
  }, "id" | "cognitoid" | "email" | "metamaskid">

  export type freelancerOrderByWithAggregationInput = {
    id?: SortOrder
    cognitoid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    metamaskid?: SortOrderInput | SortOrder
    _count?: freelancerCountOrderByAggregateInput
    _avg?: freelancerAvgOrderByAggregateInput
    _max?: freelancerMaxOrderByAggregateInput
    _min?: freelancerMinOrderByAggregateInput
    _sum?: freelancerSumOrderByAggregateInput
  }

  export type freelancerScalarWhereWithAggregatesInput = {
    AND?: freelancerScalarWhereWithAggregatesInput | freelancerScalarWhereWithAggregatesInput[]
    OR?: freelancerScalarWhereWithAggregatesInput[]
    NOT?: freelancerScalarWhereWithAggregatesInput | freelancerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"freelancer"> | number
    cognitoid?: StringWithAggregatesFilter<"freelancer"> | string
    name?: StringWithAggregatesFilter<"freelancer"> | string
    email?: StringWithAggregatesFilter<"freelancer"> | string
    password?: StringWithAggregatesFilter<"freelancer"> | string
    metamaskid?: StringNullableWithAggregatesFilter<"freelancer"> | string | null
  }

  export type jobpostedWhereInput = {
    AND?: jobpostedWhereInput | jobpostedWhereInput[]
    OR?: jobpostedWhereInput[]
    NOT?: jobpostedWhereInput | jobpostedWhereInput[]
    id?: IntFilter<"jobposted"> | number
    clientid?: IntNullableFilter<"jobposted"> | number | null
    name?: StringFilter<"jobposted"> | string
    description?: StringFilter<"jobposted"> | string
    tags?: StringNullableListFilter<"jobposted">
    location?: StringNullableFilter<"jobposted"> | string | null
    joblevel?: StringNullableFilter<"jobposted"> | string | null
    budget?: IntNullableFilter<"jobposted"> | number | null
    contracttohire?: BoolNullableFilter<"jobposted"> | boolean | null
    qualificationspreferred?: StringNullableFilter<"jobposted"> | string | null
    postingtime?: DateTimeNullableFilter<"jobposted"> | Date | string | null
    postingdate?: DateTimeNullableFilter<"jobposted"> | Date | string | null
    validtill?: DateTimeNullableFilter<"jobposted"> | Date | string | null
    companyname?: StringNullableFilter<"jobposted"> | string | null
    customizable?: BoolNullableFilter<"jobposted"> | boolean | null
    photourls?: StringNullableListFilter<"jobposted">
    client?: XOR<ClientNullableScalarRelationFilter, clientWhereInput> | null
    message?: MessageListRelationFilter
    milestones?: MilestonesListRelationFilter
    nftcredential?: NftcredentialListRelationFilter
    proposals?: ProposalsListRelationFilter
    smartcontract?: SmartcontractListRelationFilter
  }

  export type jobpostedOrderByWithRelationInput = {
    id?: SortOrder
    clientid?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    location?: SortOrderInput | SortOrder
    joblevel?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    contracttohire?: SortOrderInput | SortOrder
    qualificationspreferred?: SortOrderInput | SortOrder
    postingtime?: SortOrderInput | SortOrder
    postingdate?: SortOrderInput | SortOrder
    validtill?: SortOrderInput | SortOrder
    companyname?: SortOrderInput | SortOrder
    customizable?: SortOrderInput | SortOrder
    photourls?: SortOrder
    client?: clientOrderByWithRelationInput
    message?: messageOrderByRelationAggregateInput
    milestones?: milestonesOrderByRelationAggregateInput
    nftcredential?: nftcredentialOrderByRelationAggregateInput
    proposals?: proposalsOrderByRelationAggregateInput
    smartcontract?: smartcontractOrderByRelationAggregateInput
  }

  export type jobpostedWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: jobpostedWhereInput | jobpostedWhereInput[]
    OR?: jobpostedWhereInput[]
    NOT?: jobpostedWhereInput | jobpostedWhereInput[]
    clientid?: IntNullableFilter<"jobposted"> | number | null
    name?: StringFilter<"jobposted"> | string
    description?: StringFilter<"jobposted"> | string
    tags?: StringNullableListFilter<"jobposted">
    location?: StringNullableFilter<"jobposted"> | string | null
    joblevel?: StringNullableFilter<"jobposted"> | string | null
    budget?: IntNullableFilter<"jobposted"> | number | null
    contracttohire?: BoolNullableFilter<"jobposted"> | boolean | null
    qualificationspreferred?: StringNullableFilter<"jobposted"> | string | null
    postingtime?: DateTimeNullableFilter<"jobposted"> | Date | string | null
    postingdate?: DateTimeNullableFilter<"jobposted"> | Date | string | null
    validtill?: DateTimeNullableFilter<"jobposted"> | Date | string | null
    companyname?: StringNullableFilter<"jobposted"> | string | null
    customizable?: BoolNullableFilter<"jobposted"> | boolean | null
    photourls?: StringNullableListFilter<"jobposted">
    client?: XOR<ClientNullableScalarRelationFilter, clientWhereInput> | null
    message?: MessageListRelationFilter
    milestones?: MilestonesListRelationFilter
    nftcredential?: NftcredentialListRelationFilter
    proposals?: ProposalsListRelationFilter
    smartcontract?: SmartcontractListRelationFilter
  }, "id">

  export type jobpostedOrderByWithAggregationInput = {
    id?: SortOrder
    clientid?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    location?: SortOrderInput | SortOrder
    joblevel?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    contracttohire?: SortOrderInput | SortOrder
    qualificationspreferred?: SortOrderInput | SortOrder
    postingtime?: SortOrderInput | SortOrder
    postingdate?: SortOrderInput | SortOrder
    validtill?: SortOrderInput | SortOrder
    companyname?: SortOrderInput | SortOrder
    customizable?: SortOrderInput | SortOrder
    photourls?: SortOrder
    _count?: jobpostedCountOrderByAggregateInput
    _avg?: jobpostedAvgOrderByAggregateInput
    _max?: jobpostedMaxOrderByAggregateInput
    _min?: jobpostedMinOrderByAggregateInput
    _sum?: jobpostedSumOrderByAggregateInput
  }

  export type jobpostedScalarWhereWithAggregatesInput = {
    AND?: jobpostedScalarWhereWithAggregatesInput | jobpostedScalarWhereWithAggregatesInput[]
    OR?: jobpostedScalarWhereWithAggregatesInput[]
    NOT?: jobpostedScalarWhereWithAggregatesInput | jobpostedScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"jobposted"> | number
    clientid?: IntNullableWithAggregatesFilter<"jobposted"> | number | null
    name?: StringWithAggregatesFilter<"jobposted"> | string
    description?: StringWithAggregatesFilter<"jobposted"> | string
    tags?: StringNullableListFilter<"jobposted">
    location?: StringNullableWithAggregatesFilter<"jobposted"> | string | null
    joblevel?: StringNullableWithAggregatesFilter<"jobposted"> | string | null
    budget?: IntNullableWithAggregatesFilter<"jobposted"> | number | null
    contracttohire?: BoolNullableWithAggregatesFilter<"jobposted"> | boolean | null
    qualificationspreferred?: StringNullableWithAggregatesFilter<"jobposted"> | string | null
    postingtime?: DateTimeNullableWithAggregatesFilter<"jobposted"> | Date | string | null
    postingdate?: DateTimeNullableWithAggregatesFilter<"jobposted"> | Date | string | null
    validtill?: DateTimeNullableWithAggregatesFilter<"jobposted"> | Date | string | null
    companyname?: StringNullableWithAggregatesFilter<"jobposted"> | string | null
    customizable?: BoolNullableWithAggregatesFilter<"jobposted"> | boolean | null
    photourls?: StringNullableListFilter<"jobposted">
  }

  export type messageWhereInput = {
    AND?: messageWhereInput | messageWhereInput[]
    OR?: messageWhereInput[]
    NOT?: messageWhereInput | messageWhereInput[]
    id?: IntFilter<"message"> | number
    senderid?: IntFilter<"message"> | number
    receiverid?: IntFilter<"message"> | number
    jobid?: IntNullableFilter<"message"> | number | null
    messagetext?: StringNullableFilter<"message"> | string | null
    messagetype?: Enummessage_typeNullableFilter<"message"> | $Enums.message_type | null
    attachmenturl?: StringNullableFilter<"message"> | string | null
    timestamp?: DateTimeNullableFilter<"message"> | Date | string | null
    isread?: BoolNullableFilter<"message"> | boolean | null
    issystem?: BoolNullableFilter<"message"> | boolean | null
    jobposted?: XOR<JobpostedNullableScalarRelationFilter, jobpostedWhereInput> | null
  }

  export type messageOrderByWithRelationInput = {
    id?: SortOrder
    senderid?: SortOrder
    receiverid?: SortOrder
    jobid?: SortOrderInput | SortOrder
    messagetext?: SortOrderInput | SortOrder
    messagetype?: SortOrderInput | SortOrder
    attachmenturl?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    isread?: SortOrderInput | SortOrder
    issystem?: SortOrderInput | SortOrder
    jobposted?: jobpostedOrderByWithRelationInput
  }

  export type messageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: messageWhereInput | messageWhereInput[]
    OR?: messageWhereInput[]
    NOT?: messageWhereInput | messageWhereInput[]
    senderid?: IntFilter<"message"> | number
    receiverid?: IntFilter<"message"> | number
    jobid?: IntNullableFilter<"message"> | number | null
    messagetext?: StringNullableFilter<"message"> | string | null
    messagetype?: Enummessage_typeNullableFilter<"message"> | $Enums.message_type | null
    attachmenturl?: StringNullableFilter<"message"> | string | null
    timestamp?: DateTimeNullableFilter<"message"> | Date | string | null
    isread?: BoolNullableFilter<"message"> | boolean | null
    issystem?: BoolNullableFilter<"message"> | boolean | null
    jobposted?: XOR<JobpostedNullableScalarRelationFilter, jobpostedWhereInput> | null
  }, "id">

  export type messageOrderByWithAggregationInput = {
    id?: SortOrder
    senderid?: SortOrder
    receiverid?: SortOrder
    jobid?: SortOrderInput | SortOrder
    messagetext?: SortOrderInput | SortOrder
    messagetype?: SortOrderInput | SortOrder
    attachmenturl?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    isread?: SortOrderInput | SortOrder
    issystem?: SortOrderInput | SortOrder
    _count?: messageCountOrderByAggregateInput
    _avg?: messageAvgOrderByAggregateInput
    _max?: messageMaxOrderByAggregateInput
    _min?: messageMinOrderByAggregateInput
    _sum?: messageSumOrderByAggregateInput
  }

  export type messageScalarWhereWithAggregatesInput = {
    AND?: messageScalarWhereWithAggregatesInput | messageScalarWhereWithAggregatesInput[]
    OR?: messageScalarWhereWithAggregatesInput[]
    NOT?: messageScalarWhereWithAggregatesInput | messageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"message"> | number
    senderid?: IntWithAggregatesFilter<"message"> | number
    receiverid?: IntWithAggregatesFilter<"message"> | number
    jobid?: IntNullableWithAggregatesFilter<"message"> | number | null
    messagetext?: StringNullableWithAggregatesFilter<"message"> | string | null
    messagetype?: Enummessage_typeNullableWithAggregatesFilter<"message"> | $Enums.message_type | null
    attachmenturl?: StringNullableWithAggregatesFilter<"message"> | string | null
    timestamp?: DateTimeNullableWithAggregatesFilter<"message"> | Date | string | null
    isread?: BoolNullableWithAggregatesFilter<"message"> | boolean | null
    issystem?: BoolNullableWithAggregatesFilter<"message"> | boolean | null
  }

  export type milestonesWhereInput = {
    AND?: milestonesWhereInput | milestonesWhereInput[]
    OR?: milestonesWhereInput[]
    NOT?: milestonesWhereInput | milestonesWhereInput[]
    id?: IntFilter<"milestones"> | number
    jobid?: IntNullableFilter<"milestones"> | number | null
    freelancerid?: IntNullableFilter<"milestones"> | number | null
    title?: StringFilter<"milestones"> | string
    description?: StringNullableFilter<"milestones"> | string | null
    duedate?: DateTimeNullableFilter<"milestones"> | Date | string | null
    amount?: IntFilter<"milestones"> | number
    status?: Enummilestone_statusNullableFilter<"milestones"> | $Enums.milestone_status | null
    disputes?: DisputesListRelationFilter
    freelancer?: XOR<FreelancerNullableScalarRelationFilter, freelancerWhereInput> | null
    jobposted?: XOR<JobpostedNullableScalarRelationFilter, jobpostedWhereInput> | null
    paymentsescrow?: PaymentsescrowListRelationFilter
  }

  export type milestonesOrderByWithRelationInput = {
    id?: SortOrder
    jobid?: SortOrderInput | SortOrder
    freelancerid?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    duedate?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrderInput | SortOrder
    disputes?: disputesOrderByRelationAggregateInput
    freelancer?: freelancerOrderByWithRelationInput
    jobposted?: jobpostedOrderByWithRelationInput
    paymentsescrow?: paymentsescrowOrderByRelationAggregateInput
  }

  export type milestonesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: milestonesWhereInput | milestonesWhereInput[]
    OR?: milestonesWhereInput[]
    NOT?: milestonesWhereInput | milestonesWhereInput[]
    jobid?: IntNullableFilter<"milestones"> | number | null
    freelancerid?: IntNullableFilter<"milestones"> | number | null
    title?: StringFilter<"milestones"> | string
    description?: StringNullableFilter<"milestones"> | string | null
    duedate?: DateTimeNullableFilter<"milestones"> | Date | string | null
    amount?: IntFilter<"milestones"> | number
    status?: Enummilestone_statusNullableFilter<"milestones"> | $Enums.milestone_status | null
    disputes?: DisputesListRelationFilter
    freelancer?: XOR<FreelancerNullableScalarRelationFilter, freelancerWhereInput> | null
    jobposted?: XOR<JobpostedNullableScalarRelationFilter, jobpostedWhereInput> | null
    paymentsescrow?: PaymentsescrowListRelationFilter
  }, "id">

  export type milestonesOrderByWithAggregationInput = {
    id?: SortOrder
    jobid?: SortOrderInput | SortOrder
    freelancerid?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    duedate?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrderInput | SortOrder
    _count?: milestonesCountOrderByAggregateInput
    _avg?: milestonesAvgOrderByAggregateInput
    _max?: milestonesMaxOrderByAggregateInput
    _min?: milestonesMinOrderByAggregateInput
    _sum?: milestonesSumOrderByAggregateInput
  }

  export type milestonesScalarWhereWithAggregatesInput = {
    AND?: milestonesScalarWhereWithAggregatesInput | milestonesScalarWhereWithAggregatesInput[]
    OR?: milestonesScalarWhereWithAggregatesInput[]
    NOT?: milestonesScalarWhereWithAggregatesInput | milestonesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"milestones"> | number
    jobid?: IntNullableWithAggregatesFilter<"milestones"> | number | null
    freelancerid?: IntNullableWithAggregatesFilter<"milestones"> | number | null
    title?: StringWithAggregatesFilter<"milestones"> | string
    description?: StringNullableWithAggregatesFilter<"milestones"> | string | null
    duedate?: DateTimeNullableWithAggregatesFilter<"milestones"> | Date | string | null
    amount?: IntWithAggregatesFilter<"milestones"> | number
    status?: Enummilestone_statusNullableWithAggregatesFilter<"milestones"> | $Enums.milestone_status | null
  }

  export type nftcredentialWhereInput = {
    AND?: nftcredentialWhereInput | nftcredentialWhereInput[]
    OR?: nftcredentialWhereInput[]
    NOT?: nftcredentialWhereInput | nftcredentialWhereInput[]
    id?: IntFilter<"nftcredential"> | number
    freelancerid?: IntNullableFilter<"nftcredential"> | number | null
    jobid?: IntNullableFilter<"nftcredential"> | number | null
    tokenid?: IntNullableFilter<"nftcredential"> | number | null
    rating?: IntNullableFilter<"nftcredential"> | number | null
    testimonial?: StringNullableFilter<"nftcredential"> | string | null
    isminted?: BoolNullableFilter<"nftcredential"> | boolean | null
    txhash?: StringNullableFilter<"nftcredential"> | string | null
    createdat?: DateTimeNullableFilter<"nftcredential"> | Date | string | null
    freelancer?: XOR<FreelancerNullableScalarRelationFilter, freelancerWhereInput> | null
    jobposted?: XOR<JobpostedNullableScalarRelationFilter, jobpostedWhereInput> | null
  }

  export type nftcredentialOrderByWithRelationInput = {
    id?: SortOrder
    freelancerid?: SortOrderInput | SortOrder
    jobid?: SortOrderInput | SortOrder
    tokenid?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    testimonial?: SortOrderInput | SortOrder
    isminted?: SortOrderInput | SortOrder
    txhash?: SortOrderInput | SortOrder
    createdat?: SortOrderInput | SortOrder
    freelancer?: freelancerOrderByWithRelationInput
    jobposted?: jobpostedOrderByWithRelationInput
  }

  export type nftcredentialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tokenid?: number
    AND?: nftcredentialWhereInput | nftcredentialWhereInput[]
    OR?: nftcredentialWhereInput[]
    NOT?: nftcredentialWhereInput | nftcredentialWhereInput[]
    freelancerid?: IntNullableFilter<"nftcredential"> | number | null
    jobid?: IntNullableFilter<"nftcredential"> | number | null
    rating?: IntNullableFilter<"nftcredential"> | number | null
    testimonial?: StringNullableFilter<"nftcredential"> | string | null
    isminted?: BoolNullableFilter<"nftcredential"> | boolean | null
    txhash?: StringNullableFilter<"nftcredential"> | string | null
    createdat?: DateTimeNullableFilter<"nftcredential"> | Date | string | null
    freelancer?: XOR<FreelancerNullableScalarRelationFilter, freelancerWhereInput> | null
    jobposted?: XOR<JobpostedNullableScalarRelationFilter, jobpostedWhereInput> | null
  }, "id" | "tokenid">

  export type nftcredentialOrderByWithAggregationInput = {
    id?: SortOrder
    freelancerid?: SortOrderInput | SortOrder
    jobid?: SortOrderInput | SortOrder
    tokenid?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    testimonial?: SortOrderInput | SortOrder
    isminted?: SortOrderInput | SortOrder
    txhash?: SortOrderInput | SortOrder
    createdat?: SortOrderInput | SortOrder
    _count?: nftcredentialCountOrderByAggregateInput
    _avg?: nftcredentialAvgOrderByAggregateInput
    _max?: nftcredentialMaxOrderByAggregateInput
    _min?: nftcredentialMinOrderByAggregateInput
    _sum?: nftcredentialSumOrderByAggregateInput
  }

  export type nftcredentialScalarWhereWithAggregatesInput = {
    AND?: nftcredentialScalarWhereWithAggregatesInput | nftcredentialScalarWhereWithAggregatesInput[]
    OR?: nftcredentialScalarWhereWithAggregatesInput[]
    NOT?: nftcredentialScalarWhereWithAggregatesInput | nftcredentialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"nftcredential"> | number
    freelancerid?: IntNullableWithAggregatesFilter<"nftcredential"> | number | null
    jobid?: IntNullableWithAggregatesFilter<"nftcredential"> | number | null
    tokenid?: IntNullableWithAggregatesFilter<"nftcredential"> | number | null
    rating?: IntNullableWithAggregatesFilter<"nftcredential"> | number | null
    testimonial?: StringNullableWithAggregatesFilter<"nftcredential"> | string | null
    isminted?: BoolNullableWithAggregatesFilter<"nftcredential"> | boolean | null
    txhash?: StringNullableWithAggregatesFilter<"nftcredential"> | string | null
    createdat?: DateTimeNullableWithAggregatesFilter<"nftcredential"> | Date | string | null
  }

  export type paymentsescrowWhereInput = {
    AND?: paymentsescrowWhereInput | paymentsescrowWhereInput[]
    OR?: paymentsescrowWhereInput[]
    NOT?: paymentsescrowWhereInput | paymentsescrowWhereInput[]
    id?: IntFilter<"paymentsescrow"> | number
    contractid?: IntNullableFilter<"paymentsescrow"> | number | null
    milestoneid?: IntNullableFilter<"paymentsescrow"> | number | null
    type?: Enumpayment_typeFilter<"paymentsescrow"> | $Enums.payment_type
    status?: Enumpayment_statusNullableFilter<"paymentsescrow"> | $Enums.payment_status | null
    paymentmethod?: Enumpayment_methodNullableFilter<"paymentsescrow"> | $Enums.payment_method | null
    txhash?: StringNullableFilter<"paymentsescrow"> | string | null
    amount?: IntFilter<"paymentsescrow"> | number
    initiatedby?: IntNullableFilter<"paymentsescrow"> | number | null
    receiverid?: IntNullableFilter<"paymentsescrow"> | number | null
    notes?: StringNullableFilter<"paymentsescrow"> | string | null
    timestamp?: DateTimeNullableFilter<"paymentsescrow"> | Date | string | null
    confirmedat?: DateTimeNullableFilter<"paymentsescrow"> | Date | string | null
    smartcontract?: XOR<SmartcontractNullableScalarRelationFilter, smartcontractWhereInput> | null
    milestones?: XOR<MilestonesNullableScalarRelationFilter, milestonesWhereInput> | null
    freelancer?: XOR<FreelancerNullableScalarRelationFilter, freelancerWhereInput> | null
  }

  export type paymentsescrowOrderByWithRelationInput = {
    id?: SortOrder
    contractid?: SortOrderInput | SortOrder
    milestoneid?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrderInput | SortOrder
    paymentmethod?: SortOrderInput | SortOrder
    txhash?: SortOrderInput | SortOrder
    amount?: SortOrder
    initiatedby?: SortOrderInput | SortOrder
    receiverid?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    confirmedat?: SortOrderInput | SortOrder
    smartcontract?: smartcontractOrderByWithRelationInput
    milestones?: milestonesOrderByWithRelationInput
    freelancer?: freelancerOrderByWithRelationInput
  }

  export type paymentsescrowWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: paymentsescrowWhereInput | paymentsescrowWhereInput[]
    OR?: paymentsescrowWhereInput[]
    NOT?: paymentsescrowWhereInput | paymentsescrowWhereInput[]
    contractid?: IntNullableFilter<"paymentsescrow"> | number | null
    milestoneid?: IntNullableFilter<"paymentsescrow"> | number | null
    type?: Enumpayment_typeFilter<"paymentsescrow"> | $Enums.payment_type
    status?: Enumpayment_statusNullableFilter<"paymentsescrow"> | $Enums.payment_status | null
    paymentmethod?: Enumpayment_methodNullableFilter<"paymentsescrow"> | $Enums.payment_method | null
    txhash?: StringNullableFilter<"paymentsescrow"> | string | null
    amount?: IntFilter<"paymentsescrow"> | number
    initiatedby?: IntNullableFilter<"paymentsescrow"> | number | null
    receiverid?: IntNullableFilter<"paymentsescrow"> | number | null
    notes?: StringNullableFilter<"paymentsescrow"> | string | null
    timestamp?: DateTimeNullableFilter<"paymentsescrow"> | Date | string | null
    confirmedat?: DateTimeNullableFilter<"paymentsescrow"> | Date | string | null
    smartcontract?: XOR<SmartcontractNullableScalarRelationFilter, smartcontractWhereInput> | null
    milestones?: XOR<MilestonesNullableScalarRelationFilter, milestonesWhereInput> | null
    freelancer?: XOR<FreelancerNullableScalarRelationFilter, freelancerWhereInput> | null
  }, "id">

  export type paymentsescrowOrderByWithAggregationInput = {
    id?: SortOrder
    contractid?: SortOrderInput | SortOrder
    milestoneid?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrderInput | SortOrder
    paymentmethod?: SortOrderInput | SortOrder
    txhash?: SortOrderInput | SortOrder
    amount?: SortOrder
    initiatedby?: SortOrderInput | SortOrder
    receiverid?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    confirmedat?: SortOrderInput | SortOrder
    _count?: paymentsescrowCountOrderByAggregateInput
    _avg?: paymentsescrowAvgOrderByAggregateInput
    _max?: paymentsescrowMaxOrderByAggregateInput
    _min?: paymentsescrowMinOrderByAggregateInput
    _sum?: paymentsescrowSumOrderByAggregateInput
  }

  export type paymentsescrowScalarWhereWithAggregatesInput = {
    AND?: paymentsescrowScalarWhereWithAggregatesInput | paymentsescrowScalarWhereWithAggregatesInput[]
    OR?: paymentsescrowScalarWhereWithAggregatesInput[]
    NOT?: paymentsescrowScalarWhereWithAggregatesInput | paymentsescrowScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"paymentsescrow"> | number
    contractid?: IntNullableWithAggregatesFilter<"paymentsescrow"> | number | null
    milestoneid?: IntNullableWithAggregatesFilter<"paymentsescrow"> | number | null
    type?: Enumpayment_typeWithAggregatesFilter<"paymentsescrow"> | $Enums.payment_type
    status?: Enumpayment_statusNullableWithAggregatesFilter<"paymentsescrow"> | $Enums.payment_status | null
    paymentmethod?: Enumpayment_methodNullableWithAggregatesFilter<"paymentsescrow"> | $Enums.payment_method | null
    txhash?: StringNullableWithAggregatesFilter<"paymentsescrow"> | string | null
    amount?: IntWithAggregatesFilter<"paymentsescrow"> | number
    initiatedby?: IntNullableWithAggregatesFilter<"paymentsescrow"> | number | null
    receiverid?: IntNullableWithAggregatesFilter<"paymentsescrow"> | number | null
    notes?: StringNullableWithAggregatesFilter<"paymentsescrow"> | string | null
    timestamp?: DateTimeNullableWithAggregatesFilter<"paymentsescrow"> | Date | string | null
    confirmedat?: DateTimeNullableWithAggregatesFilter<"paymentsescrow"> | Date | string | null
  }

  export type proposalsWhereInput = {
    AND?: proposalsWhereInput | proposalsWhereInput[]
    OR?: proposalsWhereInput[]
    NOT?: proposalsWhereInput | proposalsWhereInput[]
    id?: IntFilter<"proposals"> | number
    jobid?: IntNullableFilter<"proposals"> | number | null
    freelancerid?: IntNullableFilter<"proposals"> | number | null
    coverletter?: StringNullableFilter<"proposals"> | string | null
    budgetquoted?: IntNullableFilter<"proposals"> | number | null
    proposedtimeline?: StringNullableFilter<"proposals"> | string | null
    status?: Enumproposal_statusNullableFilter<"proposals"> | $Enums.proposal_status | null
    submittedat?: DateTimeNullableFilter<"proposals"> | Date | string | null
    freelancer?: XOR<FreelancerNullableScalarRelationFilter, freelancerWhereInput> | null
    jobposted?: XOR<JobpostedNullableScalarRelationFilter, jobpostedWhereInput> | null
  }

  export type proposalsOrderByWithRelationInput = {
    id?: SortOrder
    jobid?: SortOrderInput | SortOrder
    freelancerid?: SortOrderInput | SortOrder
    coverletter?: SortOrderInput | SortOrder
    budgetquoted?: SortOrderInput | SortOrder
    proposedtimeline?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    submittedat?: SortOrderInput | SortOrder
    freelancer?: freelancerOrderByWithRelationInput
    jobposted?: jobpostedOrderByWithRelationInput
  }

  export type proposalsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: proposalsWhereInput | proposalsWhereInput[]
    OR?: proposalsWhereInput[]
    NOT?: proposalsWhereInput | proposalsWhereInput[]
    jobid?: IntNullableFilter<"proposals"> | number | null
    freelancerid?: IntNullableFilter<"proposals"> | number | null
    coverletter?: StringNullableFilter<"proposals"> | string | null
    budgetquoted?: IntNullableFilter<"proposals"> | number | null
    proposedtimeline?: StringNullableFilter<"proposals"> | string | null
    status?: Enumproposal_statusNullableFilter<"proposals"> | $Enums.proposal_status | null
    submittedat?: DateTimeNullableFilter<"proposals"> | Date | string | null
    freelancer?: XOR<FreelancerNullableScalarRelationFilter, freelancerWhereInput> | null
    jobposted?: XOR<JobpostedNullableScalarRelationFilter, jobpostedWhereInput> | null
  }, "id">

  export type proposalsOrderByWithAggregationInput = {
    id?: SortOrder
    jobid?: SortOrderInput | SortOrder
    freelancerid?: SortOrderInput | SortOrder
    coverletter?: SortOrderInput | SortOrder
    budgetquoted?: SortOrderInput | SortOrder
    proposedtimeline?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    submittedat?: SortOrderInput | SortOrder
    _count?: proposalsCountOrderByAggregateInput
    _avg?: proposalsAvgOrderByAggregateInput
    _max?: proposalsMaxOrderByAggregateInput
    _min?: proposalsMinOrderByAggregateInput
    _sum?: proposalsSumOrderByAggregateInput
  }

  export type proposalsScalarWhereWithAggregatesInput = {
    AND?: proposalsScalarWhereWithAggregatesInput | proposalsScalarWhereWithAggregatesInput[]
    OR?: proposalsScalarWhereWithAggregatesInput[]
    NOT?: proposalsScalarWhereWithAggregatesInput | proposalsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"proposals"> | number
    jobid?: IntNullableWithAggregatesFilter<"proposals"> | number | null
    freelancerid?: IntNullableWithAggregatesFilter<"proposals"> | number | null
    coverletter?: StringNullableWithAggregatesFilter<"proposals"> | string | null
    budgetquoted?: IntNullableWithAggregatesFilter<"proposals"> | number | null
    proposedtimeline?: StringNullableWithAggregatesFilter<"proposals"> | string | null
    status?: Enumproposal_statusNullableWithAggregatesFilter<"proposals"> | $Enums.proposal_status | null
    submittedat?: DateTimeNullableWithAggregatesFilter<"proposals"> | Date | string | null
  }

  export type smartcontractWhereInput = {
    AND?: smartcontractWhereInput | smartcontractWhereInput[]
    OR?: smartcontractWhereInput[]
    NOT?: smartcontractWhereInput | smartcontractWhereInput[]
    id?: IntFilter<"smartcontract"> | number
    jobid?: IntNullableFilter<"smartcontract"> | number | null
    freelancerid?: IntNullableFilter<"smartcontract"> | number | null
    clientid?: IntNullableFilter<"smartcontract"> | number | null
    startdate?: DateTimeFilter<"smartcontract"> | Date | string
    enddate?: DateTimeNullableFilter<"smartcontract"> | Date | string | null
    escrowamount?: IntFilter<"smartcontract"> | number
    smartcontractaddress?: StringNullableFilter<"smartcontract"> | string | null
    isactive?: BoolNullableFilter<"smartcontract"> | boolean | null
    iscompleted?: BoolNullableFilter<"smartcontract"> | boolean | null
    isdisputed?: BoolNullableFilter<"smartcontract"> | boolean | null
    platformfee?: IntNullableFilter<"smartcontract"> | number | null
    paymentmethod?: StringNullableFilter<"smartcontract"> | string | null
    terminationreason?: StringNullableFilter<"smartcontract"> | string | null
    createdat?: DateTimeNullableFilter<"smartcontract"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"smartcontract"> | Date | string | null
    disputes?: DisputesListRelationFilter
    paymentsescrow?: PaymentsescrowListRelationFilter
    client?: XOR<ClientNullableScalarRelationFilter, clientWhereInput> | null
    freelancer?: XOR<FreelancerNullableScalarRelationFilter, freelancerWhereInput> | null
    jobposted?: XOR<JobpostedNullableScalarRelationFilter, jobpostedWhereInput> | null
  }

  export type smartcontractOrderByWithRelationInput = {
    id?: SortOrder
    jobid?: SortOrderInput | SortOrder
    freelancerid?: SortOrderInput | SortOrder
    clientid?: SortOrderInput | SortOrder
    startdate?: SortOrder
    enddate?: SortOrderInput | SortOrder
    escrowamount?: SortOrder
    smartcontractaddress?: SortOrderInput | SortOrder
    isactive?: SortOrderInput | SortOrder
    iscompleted?: SortOrderInput | SortOrder
    isdisputed?: SortOrderInput | SortOrder
    platformfee?: SortOrderInput | SortOrder
    paymentmethod?: SortOrderInput | SortOrder
    terminationreason?: SortOrderInput | SortOrder
    createdat?: SortOrderInput | SortOrder
    updatedat?: SortOrderInput | SortOrder
    disputes?: disputesOrderByRelationAggregateInput
    paymentsescrow?: paymentsescrowOrderByRelationAggregateInput
    client?: clientOrderByWithRelationInput
    freelancer?: freelancerOrderByWithRelationInput
    jobposted?: jobpostedOrderByWithRelationInput
  }

  export type smartcontractWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    smartcontractaddress?: string
    AND?: smartcontractWhereInput | smartcontractWhereInput[]
    OR?: smartcontractWhereInput[]
    NOT?: smartcontractWhereInput | smartcontractWhereInput[]
    jobid?: IntNullableFilter<"smartcontract"> | number | null
    freelancerid?: IntNullableFilter<"smartcontract"> | number | null
    clientid?: IntNullableFilter<"smartcontract"> | number | null
    startdate?: DateTimeFilter<"smartcontract"> | Date | string
    enddate?: DateTimeNullableFilter<"smartcontract"> | Date | string | null
    escrowamount?: IntFilter<"smartcontract"> | number
    isactive?: BoolNullableFilter<"smartcontract"> | boolean | null
    iscompleted?: BoolNullableFilter<"smartcontract"> | boolean | null
    isdisputed?: BoolNullableFilter<"smartcontract"> | boolean | null
    platformfee?: IntNullableFilter<"smartcontract"> | number | null
    paymentmethod?: StringNullableFilter<"smartcontract"> | string | null
    terminationreason?: StringNullableFilter<"smartcontract"> | string | null
    createdat?: DateTimeNullableFilter<"smartcontract"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"smartcontract"> | Date | string | null
    disputes?: DisputesListRelationFilter
    paymentsescrow?: PaymentsescrowListRelationFilter
    client?: XOR<ClientNullableScalarRelationFilter, clientWhereInput> | null
    freelancer?: XOR<FreelancerNullableScalarRelationFilter, freelancerWhereInput> | null
    jobposted?: XOR<JobpostedNullableScalarRelationFilter, jobpostedWhereInput> | null
  }, "id" | "smartcontractaddress">

  export type smartcontractOrderByWithAggregationInput = {
    id?: SortOrder
    jobid?: SortOrderInput | SortOrder
    freelancerid?: SortOrderInput | SortOrder
    clientid?: SortOrderInput | SortOrder
    startdate?: SortOrder
    enddate?: SortOrderInput | SortOrder
    escrowamount?: SortOrder
    smartcontractaddress?: SortOrderInput | SortOrder
    isactive?: SortOrderInput | SortOrder
    iscompleted?: SortOrderInput | SortOrder
    isdisputed?: SortOrderInput | SortOrder
    platformfee?: SortOrderInput | SortOrder
    paymentmethod?: SortOrderInput | SortOrder
    terminationreason?: SortOrderInput | SortOrder
    createdat?: SortOrderInput | SortOrder
    updatedat?: SortOrderInput | SortOrder
    _count?: smartcontractCountOrderByAggregateInput
    _avg?: smartcontractAvgOrderByAggregateInput
    _max?: smartcontractMaxOrderByAggregateInput
    _min?: smartcontractMinOrderByAggregateInput
    _sum?: smartcontractSumOrderByAggregateInput
  }

  export type smartcontractScalarWhereWithAggregatesInput = {
    AND?: smartcontractScalarWhereWithAggregatesInput | smartcontractScalarWhereWithAggregatesInput[]
    OR?: smartcontractScalarWhereWithAggregatesInput[]
    NOT?: smartcontractScalarWhereWithAggregatesInput | smartcontractScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"smartcontract"> | number
    jobid?: IntNullableWithAggregatesFilter<"smartcontract"> | number | null
    freelancerid?: IntNullableWithAggregatesFilter<"smartcontract"> | number | null
    clientid?: IntNullableWithAggregatesFilter<"smartcontract"> | number | null
    startdate?: DateTimeWithAggregatesFilter<"smartcontract"> | Date | string
    enddate?: DateTimeNullableWithAggregatesFilter<"smartcontract"> | Date | string | null
    escrowamount?: IntWithAggregatesFilter<"smartcontract"> | number
    smartcontractaddress?: StringNullableWithAggregatesFilter<"smartcontract"> | string | null
    isactive?: BoolNullableWithAggregatesFilter<"smartcontract"> | boolean | null
    iscompleted?: BoolNullableWithAggregatesFilter<"smartcontract"> | boolean | null
    isdisputed?: BoolNullableWithAggregatesFilter<"smartcontract"> | boolean | null
    platformfee?: IntNullableWithAggregatesFilter<"smartcontract"> | number | null
    paymentmethod?: StringNullableWithAggregatesFilter<"smartcontract"> | string | null
    terminationreason?: StringNullableWithAggregatesFilter<"smartcontract"> | string | null
    createdat?: DateTimeNullableWithAggregatesFilter<"smartcontract"> | Date | string | null
    updatedat?: DateTimeNullableWithAggregatesFilter<"smartcontract"> | Date | string | null
  }

  export type stakingWhereInput = {
    AND?: stakingWhereInput | stakingWhereInput[]
    OR?: stakingWhereInput[]
    NOT?: stakingWhereInput | stakingWhereInput[]
    id?: IntFilter<"staking"> | number
    userid?: IntFilter<"staking"> | number
    stakeamount?: IntFilter<"staking"> | number
    stakepurpose?: Enumstake_purposeNullableFilter<"staking"> | $Enums.stake_purpose | null
    trustscore?: FloatNullableFilter<"staking"> | number | null
    resumescore?: IntNullableFilter<"staking"> | number | null
    isvalidator?: BoolNullableFilter<"staking"> | boolean | null
    startdate?: DateTimeNullableFilter<"staking"> | Date | string | null
    enddate?: DateTimeNullableFilter<"staking"> | Date | string | null
    active?: BoolNullableFilter<"staking"> | boolean | null
  }

  export type stakingOrderByWithRelationInput = {
    id?: SortOrder
    userid?: SortOrder
    stakeamount?: SortOrder
    stakepurpose?: SortOrderInput | SortOrder
    trustscore?: SortOrderInput | SortOrder
    resumescore?: SortOrderInput | SortOrder
    isvalidator?: SortOrderInput | SortOrder
    startdate?: SortOrderInput | SortOrder
    enddate?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
  }

  export type stakingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: stakingWhereInput | stakingWhereInput[]
    OR?: stakingWhereInput[]
    NOT?: stakingWhereInput | stakingWhereInput[]
    userid?: IntFilter<"staking"> | number
    stakeamount?: IntFilter<"staking"> | number
    stakepurpose?: Enumstake_purposeNullableFilter<"staking"> | $Enums.stake_purpose | null
    trustscore?: FloatNullableFilter<"staking"> | number | null
    resumescore?: IntNullableFilter<"staking"> | number | null
    isvalidator?: BoolNullableFilter<"staking"> | boolean | null
    startdate?: DateTimeNullableFilter<"staking"> | Date | string | null
    enddate?: DateTimeNullableFilter<"staking"> | Date | string | null
    active?: BoolNullableFilter<"staking"> | boolean | null
  }, "id">

  export type stakingOrderByWithAggregationInput = {
    id?: SortOrder
    userid?: SortOrder
    stakeamount?: SortOrder
    stakepurpose?: SortOrderInput | SortOrder
    trustscore?: SortOrderInput | SortOrder
    resumescore?: SortOrderInput | SortOrder
    isvalidator?: SortOrderInput | SortOrder
    startdate?: SortOrderInput | SortOrder
    enddate?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    _count?: stakingCountOrderByAggregateInput
    _avg?: stakingAvgOrderByAggregateInput
    _max?: stakingMaxOrderByAggregateInput
    _min?: stakingMinOrderByAggregateInput
    _sum?: stakingSumOrderByAggregateInput
  }

  export type stakingScalarWhereWithAggregatesInput = {
    AND?: stakingScalarWhereWithAggregatesInput | stakingScalarWhereWithAggregatesInput[]
    OR?: stakingScalarWhereWithAggregatesInput[]
    NOT?: stakingScalarWhereWithAggregatesInput | stakingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"staking"> | number
    userid?: IntWithAggregatesFilter<"staking"> | number
    stakeamount?: IntWithAggregatesFilter<"staking"> | number
    stakepurpose?: Enumstake_purposeNullableWithAggregatesFilter<"staking"> | $Enums.stake_purpose | null
    trustscore?: FloatNullableWithAggregatesFilter<"staking"> | number | null
    resumescore?: IntNullableWithAggregatesFilter<"staking"> | number | null
    isvalidator?: BoolNullableWithAggregatesFilter<"staking"> | boolean | null
    startdate?: DateTimeNullableWithAggregatesFilter<"staking"> | Date | string | null
    enddate?: DateTimeNullableWithAggregatesFilter<"staking"> | Date | string | null
    active?: BoolNullableWithAggregatesFilter<"staking"> | boolean | null
  }

  export type clientCreateInput = {
    cognitoid: string
    name: string
    email: string
    password?: string | null
    metamaskid?: string | null
    jobposted?: jobpostedCreateNestedManyWithoutClientInput
    smartcontract?: smartcontractCreateNestedManyWithoutClientInput
  }

  export type clientUncheckedCreateInput = {
    id?: number
    cognitoid: string
    name: string
    email: string
    password?: string | null
    metamaskid?: string | null
    jobposted?: jobpostedUncheckedCreateNestedManyWithoutClientInput
    smartcontract?: smartcontractUncheckedCreateNestedManyWithoutClientInput
  }

  export type clientUpdateInput = {
    cognitoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    metamaskid?: NullableStringFieldUpdateOperationsInput | string | null
    jobposted?: jobpostedUpdateManyWithoutClientNestedInput
    smartcontract?: smartcontractUpdateManyWithoutClientNestedInput
  }

  export type clientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    metamaskid?: NullableStringFieldUpdateOperationsInput | string | null
    jobposted?: jobpostedUncheckedUpdateManyWithoutClientNestedInput
    smartcontract?: smartcontractUncheckedUpdateManyWithoutClientNestedInput
  }

  export type clientCreateManyInput = {
    id?: number
    cognitoid: string
    name: string
    email: string
    password?: string | null
    metamaskid?: string | null
  }

  export type clientUpdateManyMutationInput = {
    cognitoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    metamaskid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    metamaskid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type disputesCreateInput = {
    raisedby: number
    againstuserid: number
    description?: string | null
    status?: $Enums.dispute_status | null
    resolution?: string | null
    resolutionby?: number | null
    evidenceurls?: disputesCreateevidenceurlsInput | string[]
    createdat?: Date | string | null
    resolvedat?: Date | string | null
    smartcontract?: smartcontractCreateNestedOneWithoutDisputesInput
    milestones?: milestonesCreateNestedOneWithoutDisputesInput
  }

  export type disputesUncheckedCreateInput = {
    id?: number
    contractid?: number | null
    milestoneid?: number | null
    raisedby: number
    againstuserid: number
    description?: string | null
    status?: $Enums.dispute_status | null
    resolution?: string | null
    resolutionby?: number | null
    evidenceurls?: disputesCreateevidenceurlsInput | string[]
    createdat?: Date | string | null
    resolvedat?: Date | string | null
  }

  export type disputesUpdateInput = {
    raisedby?: IntFieldUpdateOperationsInput | number
    againstuserid?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumdispute_statusFieldUpdateOperationsInput | $Enums.dispute_status | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionby?: NullableIntFieldUpdateOperationsInput | number | null
    evidenceurls?: disputesUpdateevidenceurlsInput | string[]
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    smartcontract?: smartcontractUpdateOneWithoutDisputesNestedInput
    milestones?: milestonesUpdateOneWithoutDisputesNestedInput
  }

  export type disputesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractid?: NullableIntFieldUpdateOperationsInput | number | null
    milestoneid?: NullableIntFieldUpdateOperationsInput | number | null
    raisedby?: IntFieldUpdateOperationsInput | number
    againstuserid?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumdispute_statusFieldUpdateOperationsInput | $Enums.dispute_status | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionby?: NullableIntFieldUpdateOperationsInput | number | null
    evidenceurls?: disputesUpdateevidenceurlsInput | string[]
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type disputesCreateManyInput = {
    id?: number
    contractid?: number | null
    milestoneid?: number | null
    raisedby: number
    againstuserid: number
    description?: string | null
    status?: $Enums.dispute_status | null
    resolution?: string | null
    resolutionby?: number | null
    evidenceurls?: disputesCreateevidenceurlsInput | string[]
    createdat?: Date | string | null
    resolvedat?: Date | string | null
  }

  export type disputesUpdateManyMutationInput = {
    raisedby?: IntFieldUpdateOperationsInput | number
    againstuserid?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumdispute_statusFieldUpdateOperationsInput | $Enums.dispute_status | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionby?: NullableIntFieldUpdateOperationsInput | number | null
    evidenceurls?: disputesUpdateevidenceurlsInput | string[]
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type disputesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractid?: NullableIntFieldUpdateOperationsInput | number | null
    milestoneid?: NullableIntFieldUpdateOperationsInput | number | null
    raisedby?: IntFieldUpdateOperationsInput | number
    againstuserid?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumdispute_statusFieldUpdateOperationsInput | $Enums.dispute_status | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionby?: NullableIntFieldUpdateOperationsInput | number | null
    evidenceurls?: disputesUpdateevidenceurlsInput | string[]
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type freelancerCreateInput = {
    cognitoid: string
    name: string
    email: string
    password: string
    metamaskid?: string | null
    milestones?: milestonesCreateNestedManyWithoutFreelancerInput
    nftcredential?: nftcredentialCreateNestedManyWithoutFreelancerInput
    paymentsescrow?: paymentsescrowCreateNestedManyWithoutFreelancerInput
    proposals?: proposalsCreateNestedManyWithoutFreelancerInput
    smartcontract?: smartcontractCreateNestedManyWithoutFreelancerInput
  }

  export type freelancerUncheckedCreateInput = {
    id?: number
    cognitoid: string
    name: string
    email: string
    password: string
    metamaskid?: string | null
    milestones?: milestonesUncheckedCreateNestedManyWithoutFreelancerInput
    nftcredential?: nftcredentialUncheckedCreateNestedManyWithoutFreelancerInput
    paymentsescrow?: paymentsescrowUncheckedCreateNestedManyWithoutFreelancerInput
    proposals?: proposalsUncheckedCreateNestedManyWithoutFreelancerInput
    smartcontract?: smartcontractUncheckedCreateNestedManyWithoutFreelancerInput
  }

  export type freelancerUpdateInput = {
    cognitoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    metamaskid?: NullableStringFieldUpdateOperationsInput | string | null
    milestones?: milestonesUpdateManyWithoutFreelancerNestedInput
    nftcredential?: nftcredentialUpdateManyWithoutFreelancerNestedInput
    paymentsescrow?: paymentsescrowUpdateManyWithoutFreelancerNestedInput
    proposals?: proposalsUpdateManyWithoutFreelancerNestedInput
    smartcontract?: smartcontractUpdateManyWithoutFreelancerNestedInput
  }

  export type freelancerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    metamaskid?: NullableStringFieldUpdateOperationsInput | string | null
    milestones?: milestonesUncheckedUpdateManyWithoutFreelancerNestedInput
    nftcredential?: nftcredentialUncheckedUpdateManyWithoutFreelancerNestedInput
    paymentsescrow?: paymentsescrowUncheckedUpdateManyWithoutFreelancerNestedInput
    proposals?: proposalsUncheckedUpdateManyWithoutFreelancerNestedInput
    smartcontract?: smartcontractUncheckedUpdateManyWithoutFreelancerNestedInput
  }

  export type freelancerCreateManyInput = {
    id?: number
    cognitoid: string
    name: string
    email: string
    password: string
    metamaskid?: string | null
  }

  export type freelancerUpdateManyMutationInput = {
    cognitoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    metamaskid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type freelancerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    metamaskid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type jobpostedCreateInput = {
    name: string
    description: string
    tags?: jobpostedCreatetagsInput | string[]
    location?: string | null
    joblevel?: string | null
    budget?: number | null
    contracttohire?: boolean | null
    qualificationspreferred?: string | null
    postingtime?: Date | string | null
    postingdate?: Date | string | null
    validtill?: Date | string | null
    companyname?: string | null
    customizable?: boolean | null
    photourls?: jobpostedCreatephotourlsInput | string[]
    client?: clientCreateNestedOneWithoutJobpostedInput
    message?: messageCreateNestedManyWithoutJobpostedInput
    milestones?: milestonesCreateNestedManyWithoutJobpostedInput
    nftcredential?: nftcredentialCreateNestedManyWithoutJobpostedInput
    proposals?: proposalsCreateNestedManyWithoutJobpostedInput
    smartcontract?: smartcontractCreateNestedManyWithoutJobpostedInput
  }

  export type jobpostedUncheckedCreateInput = {
    id?: number
    clientid?: number | null
    name: string
    description: string
    tags?: jobpostedCreatetagsInput | string[]
    location?: string | null
    joblevel?: string | null
    budget?: number | null
    contracttohire?: boolean | null
    qualificationspreferred?: string | null
    postingtime?: Date | string | null
    postingdate?: Date | string | null
    validtill?: Date | string | null
    companyname?: string | null
    customizable?: boolean | null
    photourls?: jobpostedCreatephotourlsInput | string[]
    message?: messageUncheckedCreateNestedManyWithoutJobpostedInput
    milestones?: milestonesUncheckedCreateNestedManyWithoutJobpostedInput
    nftcredential?: nftcredentialUncheckedCreateNestedManyWithoutJobpostedInput
    proposals?: proposalsUncheckedCreateNestedManyWithoutJobpostedInput
    smartcontract?: smartcontractUncheckedCreateNestedManyWithoutJobpostedInput
  }

  export type jobpostedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: jobpostedUpdatetagsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joblevel?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    contracttohire?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qualificationspreferred?: NullableStringFieldUpdateOperationsInput | string | null
    postingtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postingdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validtill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyname?: NullableStringFieldUpdateOperationsInput | string | null
    customizable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    photourls?: jobpostedUpdatephotourlsInput | string[]
    client?: clientUpdateOneWithoutJobpostedNestedInput
    message?: messageUpdateManyWithoutJobpostedNestedInput
    milestones?: milestonesUpdateManyWithoutJobpostedNestedInput
    nftcredential?: nftcredentialUpdateManyWithoutJobpostedNestedInput
    proposals?: proposalsUpdateManyWithoutJobpostedNestedInput
    smartcontract?: smartcontractUpdateManyWithoutJobpostedNestedInput
  }

  export type jobpostedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientid?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: jobpostedUpdatetagsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joblevel?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    contracttohire?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qualificationspreferred?: NullableStringFieldUpdateOperationsInput | string | null
    postingtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postingdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validtill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyname?: NullableStringFieldUpdateOperationsInput | string | null
    customizable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    photourls?: jobpostedUpdatephotourlsInput | string[]
    message?: messageUncheckedUpdateManyWithoutJobpostedNestedInput
    milestones?: milestonesUncheckedUpdateManyWithoutJobpostedNestedInput
    nftcredential?: nftcredentialUncheckedUpdateManyWithoutJobpostedNestedInput
    proposals?: proposalsUncheckedUpdateManyWithoutJobpostedNestedInput
    smartcontract?: smartcontractUncheckedUpdateManyWithoutJobpostedNestedInput
  }

  export type jobpostedCreateManyInput = {
    id?: number
    clientid?: number | null
    name: string
    description: string
    tags?: jobpostedCreatetagsInput | string[]
    location?: string | null
    joblevel?: string | null
    budget?: number | null
    contracttohire?: boolean | null
    qualificationspreferred?: string | null
    postingtime?: Date | string | null
    postingdate?: Date | string | null
    validtill?: Date | string | null
    companyname?: string | null
    customizable?: boolean | null
    photourls?: jobpostedCreatephotourlsInput | string[]
  }

  export type jobpostedUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: jobpostedUpdatetagsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joblevel?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    contracttohire?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qualificationspreferred?: NullableStringFieldUpdateOperationsInput | string | null
    postingtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postingdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validtill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyname?: NullableStringFieldUpdateOperationsInput | string | null
    customizable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    photourls?: jobpostedUpdatephotourlsInput | string[]
  }

  export type jobpostedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientid?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: jobpostedUpdatetagsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joblevel?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    contracttohire?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qualificationspreferred?: NullableStringFieldUpdateOperationsInput | string | null
    postingtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postingdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validtill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyname?: NullableStringFieldUpdateOperationsInput | string | null
    customizable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    photourls?: jobpostedUpdatephotourlsInput | string[]
  }

  export type messageCreateInput = {
    senderid: number
    receiverid: number
    messagetext?: string | null
    messagetype?: $Enums.message_type | null
    attachmenturl?: string | null
    timestamp?: Date | string | null
    isread?: boolean | null
    issystem?: boolean | null
    jobposted?: jobpostedCreateNestedOneWithoutMessageInput
  }

  export type messageUncheckedCreateInput = {
    id?: number
    senderid: number
    receiverid: number
    jobid?: number | null
    messagetext?: string | null
    messagetype?: $Enums.message_type | null
    attachmenturl?: string | null
    timestamp?: Date | string | null
    isread?: boolean | null
    issystem?: boolean | null
  }

  export type messageUpdateInput = {
    senderid?: IntFieldUpdateOperationsInput | number
    receiverid?: IntFieldUpdateOperationsInput | number
    messagetext?: NullableStringFieldUpdateOperationsInput | string | null
    messagetype?: NullableEnummessage_typeFieldUpdateOperationsInput | $Enums.message_type | null
    attachmenturl?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isread?: NullableBoolFieldUpdateOperationsInput | boolean | null
    issystem?: NullableBoolFieldUpdateOperationsInput | boolean | null
    jobposted?: jobpostedUpdateOneWithoutMessageNestedInput
  }

  export type messageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderid?: IntFieldUpdateOperationsInput | number
    receiverid?: IntFieldUpdateOperationsInput | number
    jobid?: NullableIntFieldUpdateOperationsInput | number | null
    messagetext?: NullableStringFieldUpdateOperationsInput | string | null
    messagetype?: NullableEnummessage_typeFieldUpdateOperationsInput | $Enums.message_type | null
    attachmenturl?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isread?: NullableBoolFieldUpdateOperationsInput | boolean | null
    issystem?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type messageCreateManyInput = {
    id?: number
    senderid: number
    receiverid: number
    jobid?: number | null
    messagetext?: string | null
    messagetype?: $Enums.message_type | null
    attachmenturl?: string | null
    timestamp?: Date | string | null
    isread?: boolean | null
    issystem?: boolean | null
  }

  export type messageUpdateManyMutationInput = {
    senderid?: IntFieldUpdateOperationsInput | number
    receiverid?: IntFieldUpdateOperationsInput | number
    messagetext?: NullableStringFieldUpdateOperationsInput | string | null
    messagetype?: NullableEnummessage_typeFieldUpdateOperationsInput | $Enums.message_type | null
    attachmenturl?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isread?: NullableBoolFieldUpdateOperationsInput | boolean | null
    issystem?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type messageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderid?: IntFieldUpdateOperationsInput | number
    receiverid?: IntFieldUpdateOperationsInput | number
    jobid?: NullableIntFieldUpdateOperationsInput | number | null
    messagetext?: NullableStringFieldUpdateOperationsInput | string | null
    messagetype?: NullableEnummessage_typeFieldUpdateOperationsInput | $Enums.message_type | null
    attachmenturl?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isread?: NullableBoolFieldUpdateOperationsInput | boolean | null
    issystem?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type milestonesCreateInput = {
    title: string
    description?: string | null
    duedate?: Date | string | null
    amount: number
    status?: $Enums.milestone_status | null
    disputes?: disputesCreateNestedManyWithoutMilestonesInput
    freelancer?: freelancerCreateNestedOneWithoutMilestonesInput
    jobposted?: jobpostedCreateNestedOneWithoutMilestonesInput
    paymentsescrow?: paymentsescrowCreateNestedManyWithoutMilestonesInput
  }

  export type milestonesUncheckedCreateInput = {
    id?: number
    jobid?: number | null
    freelancerid?: number | null
    title: string
    description?: string | null
    duedate?: Date | string | null
    amount: number
    status?: $Enums.milestone_status | null
    disputes?: disputesUncheckedCreateNestedManyWithoutMilestonesInput
    paymentsescrow?: paymentsescrowUncheckedCreateNestedManyWithoutMilestonesInput
  }

  export type milestonesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duedate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: NullableEnummilestone_statusFieldUpdateOperationsInput | $Enums.milestone_status | null
    disputes?: disputesUpdateManyWithoutMilestonesNestedInput
    freelancer?: freelancerUpdateOneWithoutMilestonesNestedInput
    jobposted?: jobpostedUpdateOneWithoutMilestonesNestedInput
    paymentsescrow?: paymentsescrowUpdateManyWithoutMilestonesNestedInput
  }

  export type milestonesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobid?: NullableIntFieldUpdateOperationsInput | number | null
    freelancerid?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duedate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: NullableEnummilestone_statusFieldUpdateOperationsInput | $Enums.milestone_status | null
    disputes?: disputesUncheckedUpdateManyWithoutMilestonesNestedInput
    paymentsescrow?: paymentsescrowUncheckedUpdateManyWithoutMilestonesNestedInput
  }

  export type milestonesCreateManyInput = {
    id?: number
    jobid?: number | null
    freelancerid?: number | null
    title: string
    description?: string | null
    duedate?: Date | string | null
    amount: number
    status?: $Enums.milestone_status | null
  }

  export type milestonesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duedate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: NullableEnummilestone_statusFieldUpdateOperationsInput | $Enums.milestone_status | null
  }

  export type milestonesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobid?: NullableIntFieldUpdateOperationsInput | number | null
    freelancerid?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duedate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: NullableEnummilestone_statusFieldUpdateOperationsInput | $Enums.milestone_status | null
  }

  export type nftcredentialCreateInput = {
    tokenid?: number | null
    rating?: number | null
    testimonial?: string | null
    isminted?: boolean | null
    txhash?: string | null
    createdat?: Date | string | null
    freelancer?: freelancerCreateNestedOneWithoutNftcredentialInput
    jobposted?: jobpostedCreateNestedOneWithoutNftcredentialInput
  }

  export type nftcredentialUncheckedCreateInput = {
    id?: number
    freelancerid?: number | null
    jobid?: number | null
    tokenid?: number | null
    rating?: number | null
    testimonial?: string | null
    isminted?: boolean | null
    txhash?: string | null
    createdat?: Date | string | null
  }

  export type nftcredentialUpdateInput = {
    tokenid?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    testimonial?: NullableStringFieldUpdateOperationsInput | string | null
    isminted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    txhash?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    freelancer?: freelancerUpdateOneWithoutNftcredentialNestedInput
    jobposted?: jobpostedUpdateOneWithoutNftcredentialNestedInput
  }

  export type nftcredentialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    freelancerid?: NullableIntFieldUpdateOperationsInput | number | null
    jobid?: NullableIntFieldUpdateOperationsInput | number | null
    tokenid?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    testimonial?: NullableStringFieldUpdateOperationsInput | string | null
    isminted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    txhash?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type nftcredentialCreateManyInput = {
    id?: number
    freelancerid?: number | null
    jobid?: number | null
    tokenid?: number | null
    rating?: number | null
    testimonial?: string | null
    isminted?: boolean | null
    txhash?: string | null
    createdat?: Date | string | null
  }

  export type nftcredentialUpdateManyMutationInput = {
    tokenid?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    testimonial?: NullableStringFieldUpdateOperationsInput | string | null
    isminted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    txhash?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type nftcredentialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    freelancerid?: NullableIntFieldUpdateOperationsInput | number | null
    jobid?: NullableIntFieldUpdateOperationsInput | number | null
    tokenid?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    testimonial?: NullableStringFieldUpdateOperationsInput | string | null
    isminted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    txhash?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsescrowCreateInput = {
    type: $Enums.payment_type
    status?: $Enums.payment_status | null
    paymentmethod?: $Enums.payment_method | null
    txhash?: string | null
    amount: number
    initiatedby?: number | null
    notes?: string | null
    timestamp?: Date | string | null
    confirmedat?: Date | string | null
    smartcontract?: smartcontractCreateNestedOneWithoutPaymentsescrowInput
    milestones?: milestonesCreateNestedOneWithoutPaymentsescrowInput
    freelancer?: freelancerCreateNestedOneWithoutPaymentsescrowInput
  }

  export type paymentsescrowUncheckedCreateInput = {
    id?: number
    contractid?: number | null
    milestoneid?: number | null
    type: $Enums.payment_type
    status?: $Enums.payment_status | null
    paymentmethod?: $Enums.payment_method | null
    txhash?: string | null
    amount: number
    initiatedby?: number | null
    receiverid?: number | null
    notes?: string | null
    timestamp?: Date | string | null
    confirmedat?: Date | string | null
  }

  export type paymentsescrowUpdateInput = {
    type?: Enumpayment_typeFieldUpdateOperationsInput | $Enums.payment_type
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    paymentmethod?: NullableEnumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method | null
    txhash?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    initiatedby?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    smartcontract?: smartcontractUpdateOneWithoutPaymentsescrowNestedInput
    milestones?: milestonesUpdateOneWithoutPaymentsescrowNestedInput
    freelancer?: freelancerUpdateOneWithoutPaymentsescrowNestedInput
  }

  export type paymentsescrowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractid?: NullableIntFieldUpdateOperationsInput | number | null
    milestoneid?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumpayment_typeFieldUpdateOperationsInput | $Enums.payment_type
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    paymentmethod?: NullableEnumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method | null
    txhash?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    initiatedby?: NullableIntFieldUpdateOperationsInput | number | null
    receiverid?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsescrowCreateManyInput = {
    id?: number
    contractid?: number | null
    milestoneid?: number | null
    type: $Enums.payment_type
    status?: $Enums.payment_status | null
    paymentmethod?: $Enums.payment_method | null
    txhash?: string | null
    amount: number
    initiatedby?: number | null
    receiverid?: number | null
    notes?: string | null
    timestamp?: Date | string | null
    confirmedat?: Date | string | null
  }

  export type paymentsescrowUpdateManyMutationInput = {
    type?: Enumpayment_typeFieldUpdateOperationsInput | $Enums.payment_type
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    paymentmethod?: NullableEnumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method | null
    txhash?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    initiatedby?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsescrowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractid?: NullableIntFieldUpdateOperationsInput | number | null
    milestoneid?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumpayment_typeFieldUpdateOperationsInput | $Enums.payment_type
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    paymentmethod?: NullableEnumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method | null
    txhash?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    initiatedby?: NullableIntFieldUpdateOperationsInput | number | null
    receiverid?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type proposalsCreateInput = {
    coverletter?: string | null
    budgetquoted?: number | null
    proposedtimeline?: string | null
    status?: $Enums.proposal_status | null
    submittedat?: Date | string | null
    freelancer?: freelancerCreateNestedOneWithoutProposalsInput
    jobposted?: jobpostedCreateNestedOneWithoutProposalsInput
  }

  export type proposalsUncheckedCreateInput = {
    id?: number
    jobid?: number | null
    freelancerid?: number | null
    coverletter?: string | null
    budgetquoted?: number | null
    proposedtimeline?: string | null
    status?: $Enums.proposal_status | null
    submittedat?: Date | string | null
  }

  export type proposalsUpdateInput = {
    coverletter?: NullableStringFieldUpdateOperationsInput | string | null
    budgetquoted?: NullableIntFieldUpdateOperationsInput | number | null
    proposedtimeline?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumproposal_statusFieldUpdateOperationsInput | $Enums.proposal_status | null
    submittedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    freelancer?: freelancerUpdateOneWithoutProposalsNestedInput
    jobposted?: jobpostedUpdateOneWithoutProposalsNestedInput
  }

  export type proposalsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobid?: NullableIntFieldUpdateOperationsInput | number | null
    freelancerid?: NullableIntFieldUpdateOperationsInput | number | null
    coverletter?: NullableStringFieldUpdateOperationsInput | string | null
    budgetquoted?: NullableIntFieldUpdateOperationsInput | number | null
    proposedtimeline?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumproposal_statusFieldUpdateOperationsInput | $Enums.proposal_status | null
    submittedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type proposalsCreateManyInput = {
    id?: number
    jobid?: number | null
    freelancerid?: number | null
    coverletter?: string | null
    budgetquoted?: number | null
    proposedtimeline?: string | null
    status?: $Enums.proposal_status | null
    submittedat?: Date | string | null
  }

  export type proposalsUpdateManyMutationInput = {
    coverletter?: NullableStringFieldUpdateOperationsInput | string | null
    budgetquoted?: NullableIntFieldUpdateOperationsInput | number | null
    proposedtimeline?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumproposal_statusFieldUpdateOperationsInput | $Enums.proposal_status | null
    submittedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type proposalsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobid?: NullableIntFieldUpdateOperationsInput | number | null
    freelancerid?: NullableIntFieldUpdateOperationsInput | number | null
    coverletter?: NullableStringFieldUpdateOperationsInput | string | null
    budgetquoted?: NullableIntFieldUpdateOperationsInput | number | null
    proposedtimeline?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumproposal_statusFieldUpdateOperationsInput | $Enums.proposal_status | null
    submittedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type smartcontractCreateInput = {
    startdate: Date | string
    enddate?: Date | string | null
    escrowamount: number
    smartcontractaddress?: string | null
    isactive?: boolean | null
    iscompleted?: boolean | null
    isdisputed?: boolean | null
    platformfee?: number | null
    paymentmethod?: string | null
    terminationreason?: string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
    disputes?: disputesCreateNestedManyWithoutSmartcontractInput
    paymentsescrow?: paymentsescrowCreateNestedManyWithoutSmartcontractInput
    client?: clientCreateNestedOneWithoutSmartcontractInput
    freelancer?: freelancerCreateNestedOneWithoutSmartcontractInput
    jobposted?: jobpostedCreateNestedOneWithoutSmartcontractInput
  }

  export type smartcontractUncheckedCreateInput = {
    id?: number
    jobid?: number | null
    freelancerid?: number | null
    clientid?: number | null
    startdate: Date | string
    enddate?: Date | string | null
    escrowamount: number
    smartcontractaddress?: string | null
    isactive?: boolean | null
    iscompleted?: boolean | null
    isdisputed?: boolean | null
    platformfee?: number | null
    paymentmethod?: string | null
    terminationreason?: string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
    disputes?: disputesUncheckedCreateNestedManyWithoutSmartcontractInput
    paymentsescrow?: paymentsescrowUncheckedCreateNestedManyWithoutSmartcontractInput
  }

  export type smartcontractUpdateInput = {
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escrowamount?: IntFieldUpdateOperationsInput | number
    smartcontractaddress?: NullableStringFieldUpdateOperationsInput | string | null
    isactive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    iscompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isdisputed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    platformfee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentmethod?: NullableStringFieldUpdateOperationsInput | string | null
    terminationreason?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disputes?: disputesUpdateManyWithoutSmartcontractNestedInput
    paymentsescrow?: paymentsescrowUpdateManyWithoutSmartcontractNestedInput
    client?: clientUpdateOneWithoutSmartcontractNestedInput
    freelancer?: freelancerUpdateOneWithoutSmartcontractNestedInput
    jobposted?: jobpostedUpdateOneWithoutSmartcontractNestedInput
  }

  export type smartcontractUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobid?: NullableIntFieldUpdateOperationsInput | number | null
    freelancerid?: NullableIntFieldUpdateOperationsInput | number | null
    clientid?: NullableIntFieldUpdateOperationsInput | number | null
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escrowamount?: IntFieldUpdateOperationsInput | number
    smartcontractaddress?: NullableStringFieldUpdateOperationsInput | string | null
    isactive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    iscompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isdisputed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    platformfee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentmethod?: NullableStringFieldUpdateOperationsInput | string | null
    terminationreason?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disputes?: disputesUncheckedUpdateManyWithoutSmartcontractNestedInput
    paymentsescrow?: paymentsescrowUncheckedUpdateManyWithoutSmartcontractNestedInput
  }

  export type smartcontractCreateManyInput = {
    id?: number
    jobid?: number | null
    freelancerid?: number | null
    clientid?: number | null
    startdate: Date | string
    enddate?: Date | string | null
    escrowamount: number
    smartcontractaddress?: string | null
    isactive?: boolean | null
    iscompleted?: boolean | null
    isdisputed?: boolean | null
    platformfee?: number | null
    paymentmethod?: string | null
    terminationreason?: string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
  }

  export type smartcontractUpdateManyMutationInput = {
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escrowamount?: IntFieldUpdateOperationsInput | number
    smartcontractaddress?: NullableStringFieldUpdateOperationsInput | string | null
    isactive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    iscompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isdisputed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    platformfee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentmethod?: NullableStringFieldUpdateOperationsInput | string | null
    terminationreason?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type smartcontractUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobid?: NullableIntFieldUpdateOperationsInput | number | null
    freelancerid?: NullableIntFieldUpdateOperationsInput | number | null
    clientid?: NullableIntFieldUpdateOperationsInput | number | null
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escrowamount?: IntFieldUpdateOperationsInput | number
    smartcontractaddress?: NullableStringFieldUpdateOperationsInput | string | null
    isactive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    iscompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isdisputed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    platformfee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentmethod?: NullableStringFieldUpdateOperationsInput | string | null
    terminationreason?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type stakingCreateInput = {
    userid: number
    stakeamount: number
    stakepurpose?: $Enums.stake_purpose | null
    trustscore?: number | null
    resumescore?: number | null
    isvalidator?: boolean | null
    startdate?: Date | string | null
    enddate?: Date | string | null
    active?: boolean | null
  }

  export type stakingUncheckedCreateInput = {
    id?: number
    userid: number
    stakeamount: number
    stakepurpose?: $Enums.stake_purpose | null
    trustscore?: number | null
    resumescore?: number | null
    isvalidator?: boolean | null
    startdate?: Date | string | null
    enddate?: Date | string | null
    active?: boolean | null
  }

  export type stakingUpdateInput = {
    userid?: IntFieldUpdateOperationsInput | number
    stakeamount?: IntFieldUpdateOperationsInput | number
    stakepurpose?: NullableEnumstake_purposeFieldUpdateOperationsInput | $Enums.stake_purpose | null
    trustscore?: NullableFloatFieldUpdateOperationsInput | number | null
    resumescore?: NullableIntFieldUpdateOperationsInput | number | null
    isvalidator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type stakingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    stakeamount?: IntFieldUpdateOperationsInput | number
    stakepurpose?: NullableEnumstake_purposeFieldUpdateOperationsInput | $Enums.stake_purpose | null
    trustscore?: NullableFloatFieldUpdateOperationsInput | number | null
    resumescore?: NullableIntFieldUpdateOperationsInput | number | null
    isvalidator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type stakingCreateManyInput = {
    id?: number
    userid: number
    stakeamount: number
    stakepurpose?: $Enums.stake_purpose | null
    trustscore?: number | null
    resumescore?: number | null
    isvalidator?: boolean | null
    startdate?: Date | string | null
    enddate?: Date | string | null
    active?: boolean | null
  }

  export type stakingUpdateManyMutationInput = {
    userid?: IntFieldUpdateOperationsInput | number
    stakeamount?: IntFieldUpdateOperationsInput | number
    stakepurpose?: NullableEnumstake_purposeFieldUpdateOperationsInput | $Enums.stake_purpose | null
    trustscore?: NullableFloatFieldUpdateOperationsInput | number | null
    resumescore?: NullableIntFieldUpdateOperationsInput | number | null
    isvalidator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type stakingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    stakeamount?: IntFieldUpdateOperationsInput | number
    stakepurpose?: NullableEnumstake_purposeFieldUpdateOperationsInput | $Enums.stake_purpose | null
    trustscore?: NullableFloatFieldUpdateOperationsInput | number | null
    resumescore?: NullableIntFieldUpdateOperationsInput | number | null
    isvalidator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
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

  export type JobpostedListRelationFilter = {
    every?: jobpostedWhereInput
    some?: jobpostedWhereInput
    none?: jobpostedWhereInput
  }

  export type SmartcontractListRelationFilter = {
    every?: smartcontractWhereInput
    some?: smartcontractWhereInput
    none?: smartcontractWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type jobpostedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type smartcontractOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clientCountOrderByAggregateInput = {
    id?: SortOrder
    cognitoid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    metamaskid?: SortOrder
  }

  export type clientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type clientMaxOrderByAggregateInput = {
    id?: SortOrder
    cognitoid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    metamaskid?: SortOrder
  }

  export type clientMinOrderByAggregateInput = {
    id?: SortOrder
    cognitoid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    metamaskid?: SortOrder
  }

  export type clientSumOrderByAggregateInput = {
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Enumdispute_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.dispute_status | Enumdispute_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.dispute_status[] | ListEnumdispute_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.dispute_status[] | ListEnumdispute_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumdispute_statusNullableFilter<$PrismaModel> | $Enums.dispute_status | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type SmartcontractNullableScalarRelationFilter = {
    is?: smartcontractWhereInput | null
    isNot?: smartcontractWhereInput | null
  }

  export type MilestonesNullableScalarRelationFilter = {
    is?: milestonesWhereInput | null
    isNot?: milestonesWhereInput | null
  }

  export type disputesCountOrderByAggregateInput = {
    id?: SortOrder
    contractid?: SortOrder
    milestoneid?: SortOrder
    raisedby?: SortOrder
    againstuserid?: SortOrder
    description?: SortOrder
    status?: SortOrder
    resolution?: SortOrder
    resolutionby?: SortOrder
    evidenceurls?: SortOrder
    createdat?: SortOrder
    resolvedat?: SortOrder
  }

  export type disputesAvgOrderByAggregateInput = {
    id?: SortOrder
    contractid?: SortOrder
    milestoneid?: SortOrder
    raisedby?: SortOrder
    againstuserid?: SortOrder
    resolutionby?: SortOrder
  }

  export type disputesMaxOrderByAggregateInput = {
    id?: SortOrder
    contractid?: SortOrder
    milestoneid?: SortOrder
    raisedby?: SortOrder
    againstuserid?: SortOrder
    description?: SortOrder
    status?: SortOrder
    resolution?: SortOrder
    resolutionby?: SortOrder
    createdat?: SortOrder
    resolvedat?: SortOrder
  }

  export type disputesMinOrderByAggregateInput = {
    id?: SortOrder
    contractid?: SortOrder
    milestoneid?: SortOrder
    raisedby?: SortOrder
    againstuserid?: SortOrder
    description?: SortOrder
    status?: SortOrder
    resolution?: SortOrder
    resolutionby?: SortOrder
    createdat?: SortOrder
    resolvedat?: SortOrder
  }

  export type disputesSumOrderByAggregateInput = {
    id?: SortOrder
    contractid?: SortOrder
    milestoneid?: SortOrder
    raisedby?: SortOrder
    againstuserid?: SortOrder
    resolutionby?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Enumdispute_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.dispute_status | Enumdispute_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.dispute_status[] | ListEnumdispute_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.dispute_status[] | ListEnumdispute_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumdispute_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.dispute_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumdispute_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumdispute_statusNullableFilter<$PrismaModel>
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

  export type MilestonesListRelationFilter = {
    every?: milestonesWhereInput
    some?: milestonesWhereInput
    none?: milestonesWhereInput
  }

  export type NftcredentialListRelationFilter = {
    every?: nftcredentialWhereInput
    some?: nftcredentialWhereInput
    none?: nftcredentialWhereInput
  }

  export type PaymentsescrowListRelationFilter = {
    every?: paymentsescrowWhereInput
    some?: paymentsescrowWhereInput
    none?: paymentsescrowWhereInput
  }

  export type ProposalsListRelationFilter = {
    every?: proposalsWhereInput
    some?: proposalsWhereInput
    none?: proposalsWhereInput
  }

  export type milestonesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type nftcredentialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type paymentsescrowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type proposalsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type freelancerCountOrderByAggregateInput = {
    id?: SortOrder
    cognitoid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    metamaskid?: SortOrder
  }

  export type freelancerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type freelancerMaxOrderByAggregateInput = {
    id?: SortOrder
    cognitoid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    metamaskid?: SortOrder
  }

  export type freelancerMinOrderByAggregateInput = {
    id?: SortOrder
    cognitoid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    metamaskid?: SortOrder
  }

  export type freelancerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ClientNullableScalarRelationFilter = {
    is?: clientWhereInput | null
    isNot?: clientWhereInput | null
  }

  export type MessageListRelationFilter = {
    every?: messageWhereInput
    some?: messageWhereInput
    none?: messageWhereInput
  }

  export type messageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type jobpostedCountOrderByAggregateInput = {
    id?: SortOrder
    clientid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    location?: SortOrder
    joblevel?: SortOrder
    budget?: SortOrder
    contracttohire?: SortOrder
    qualificationspreferred?: SortOrder
    postingtime?: SortOrder
    postingdate?: SortOrder
    validtill?: SortOrder
    companyname?: SortOrder
    customizable?: SortOrder
    photourls?: SortOrder
  }

  export type jobpostedAvgOrderByAggregateInput = {
    id?: SortOrder
    clientid?: SortOrder
    budget?: SortOrder
  }

  export type jobpostedMaxOrderByAggregateInput = {
    id?: SortOrder
    clientid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    location?: SortOrder
    joblevel?: SortOrder
    budget?: SortOrder
    contracttohire?: SortOrder
    qualificationspreferred?: SortOrder
    postingtime?: SortOrder
    postingdate?: SortOrder
    validtill?: SortOrder
    companyname?: SortOrder
    customizable?: SortOrder
  }

  export type jobpostedMinOrderByAggregateInput = {
    id?: SortOrder
    clientid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    location?: SortOrder
    joblevel?: SortOrder
    budget?: SortOrder
    contracttohire?: SortOrder
    qualificationspreferred?: SortOrder
    postingtime?: SortOrder
    postingdate?: SortOrder
    validtill?: SortOrder
    companyname?: SortOrder
    customizable?: SortOrder
  }

  export type jobpostedSumOrderByAggregateInput = {
    id?: SortOrder
    clientid?: SortOrder
    budget?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type Enummessage_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.message_type | Enummessage_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.message_type[] | ListEnummessage_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.message_type[] | ListEnummessage_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnummessage_typeNullableFilter<$PrismaModel> | $Enums.message_type | null
  }

  export type JobpostedNullableScalarRelationFilter = {
    is?: jobpostedWhereInput | null
    isNot?: jobpostedWhereInput | null
  }

  export type messageCountOrderByAggregateInput = {
    id?: SortOrder
    senderid?: SortOrder
    receiverid?: SortOrder
    jobid?: SortOrder
    messagetext?: SortOrder
    messagetype?: SortOrder
    attachmenturl?: SortOrder
    timestamp?: SortOrder
    isread?: SortOrder
    issystem?: SortOrder
  }

  export type messageAvgOrderByAggregateInput = {
    id?: SortOrder
    senderid?: SortOrder
    receiverid?: SortOrder
    jobid?: SortOrder
  }

  export type messageMaxOrderByAggregateInput = {
    id?: SortOrder
    senderid?: SortOrder
    receiverid?: SortOrder
    jobid?: SortOrder
    messagetext?: SortOrder
    messagetype?: SortOrder
    attachmenturl?: SortOrder
    timestamp?: SortOrder
    isread?: SortOrder
    issystem?: SortOrder
  }

  export type messageMinOrderByAggregateInput = {
    id?: SortOrder
    senderid?: SortOrder
    receiverid?: SortOrder
    jobid?: SortOrder
    messagetext?: SortOrder
    messagetype?: SortOrder
    attachmenturl?: SortOrder
    timestamp?: SortOrder
    isread?: SortOrder
    issystem?: SortOrder
  }

  export type messageSumOrderByAggregateInput = {
    id?: SortOrder
    senderid?: SortOrder
    receiverid?: SortOrder
    jobid?: SortOrder
  }

  export type Enummessage_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.message_type | Enummessage_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.message_type[] | ListEnummessage_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.message_type[] | ListEnummessage_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnummessage_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.message_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnummessage_typeNullableFilter<$PrismaModel>
    _max?: NestedEnummessage_typeNullableFilter<$PrismaModel>
  }

  export type Enummilestone_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.milestone_status | Enummilestone_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.milestone_status[] | ListEnummilestone_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.milestone_status[] | ListEnummilestone_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnummilestone_statusNullableFilter<$PrismaModel> | $Enums.milestone_status | null
  }

  export type DisputesListRelationFilter = {
    every?: disputesWhereInput
    some?: disputesWhereInput
    none?: disputesWhereInput
  }

  export type FreelancerNullableScalarRelationFilter = {
    is?: freelancerWhereInput | null
    isNot?: freelancerWhereInput | null
  }

  export type disputesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type milestonesCountOrderByAggregateInput = {
    id?: SortOrder
    jobid?: SortOrder
    freelancerid?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duedate?: SortOrder
    amount?: SortOrder
    status?: SortOrder
  }

  export type milestonesAvgOrderByAggregateInput = {
    id?: SortOrder
    jobid?: SortOrder
    freelancerid?: SortOrder
    amount?: SortOrder
  }

  export type milestonesMaxOrderByAggregateInput = {
    id?: SortOrder
    jobid?: SortOrder
    freelancerid?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duedate?: SortOrder
    amount?: SortOrder
    status?: SortOrder
  }

  export type milestonesMinOrderByAggregateInput = {
    id?: SortOrder
    jobid?: SortOrder
    freelancerid?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duedate?: SortOrder
    amount?: SortOrder
    status?: SortOrder
  }

  export type milestonesSumOrderByAggregateInput = {
    id?: SortOrder
    jobid?: SortOrder
    freelancerid?: SortOrder
    amount?: SortOrder
  }

  export type Enummilestone_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.milestone_status | Enummilestone_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.milestone_status[] | ListEnummilestone_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.milestone_status[] | ListEnummilestone_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnummilestone_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.milestone_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnummilestone_statusNullableFilter<$PrismaModel>
    _max?: NestedEnummilestone_statusNullableFilter<$PrismaModel>
  }

  export type nftcredentialCountOrderByAggregateInput = {
    id?: SortOrder
    freelancerid?: SortOrder
    jobid?: SortOrder
    tokenid?: SortOrder
    rating?: SortOrder
    testimonial?: SortOrder
    isminted?: SortOrder
    txhash?: SortOrder
    createdat?: SortOrder
  }

  export type nftcredentialAvgOrderByAggregateInput = {
    id?: SortOrder
    freelancerid?: SortOrder
    jobid?: SortOrder
    tokenid?: SortOrder
    rating?: SortOrder
  }

  export type nftcredentialMaxOrderByAggregateInput = {
    id?: SortOrder
    freelancerid?: SortOrder
    jobid?: SortOrder
    tokenid?: SortOrder
    rating?: SortOrder
    testimonial?: SortOrder
    isminted?: SortOrder
    txhash?: SortOrder
    createdat?: SortOrder
  }

  export type nftcredentialMinOrderByAggregateInput = {
    id?: SortOrder
    freelancerid?: SortOrder
    jobid?: SortOrder
    tokenid?: SortOrder
    rating?: SortOrder
    testimonial?: SortOrder
    isminted?: SortOrder
    txhash?: SortOrder
    createdat?: SortOrder
  }

  export type nftcredentialSumOrderByAggregateInput = {
    id?: SortOrder
    freelancerid?: SortOrder
    jobid?: SortOrder
    tokenid?: SortOrder
    rating?: SortOrder
  }

  export type Enumpayment_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_type | Enumpayment_typeFieldRefInput<$PrismaModel>
    in?: $Enums.payment_type[] | ListEnumpayment_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_type[] | ListEnumpayment_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_typeFilter<$PrismaModel> | $Enums.payment_type
  }

  export type Enumpayment_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpayment_statusNullableFilter<$PrismaModel> | $Enums.payment_status | null
  }

  export type Enumpayment_methodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpayment_methodNullableFilter<$PrismaModel> | $Enums.payment_method | null
  }

  export type paymentsescrowCountOrderByAggregateInput = {
    id?: SortOrder
    contractid?: SortOrder
    milestoneid?: SortOrder
    type?: SortOrder
    status?: SortOrder
    paymentmethod?: SortOrder
    txhash?: SortOrder
    amount?: SortOrder
    initiatedby?: SortOrder
    receiverid?: SortOrder
    notes?: SortOrder
    timestamp?: SortOrder
    confirmedat?: SortOrder
  }

  export type paymentsescrowAvgOrderByAggregateInput = {
    id?: SortOrder
    contractid?: SortOrder
    milestoneid?: SortOrder
    amount?: SortOrder
    initiatedby?: SortOrder
    receiverid?: SortOrder
  }

  export type paymentsescrowMaxOrderByAggregateInput = {
    id?: SortOrder
    contractid?: SortOrder
    milestoneid?: SortOrder
    type?: SortOrder
    status?: SortOrder
    paymentmethod?: SortOrder
    txhash?: SortOrder
    amount?: SortOrder
    initiatedby?: SortOrder
    receiverid?: SortOrder
    notes?: SortOrder
    timestamp?: SortOrder
    confirmedat?: SortOrder
  }

  export type paymentsescrowMinOrderByAggregateInput = {
    id?: SortOrder
    contractid?: SortOrder
    milestoneid?: SortOrder
    type?: SortOrder
    status?: SortOrder
    paymentmethod?: SortOrder
    txhash?: SortOrder
    amount?: SortOrder
    initiatedby?: SortOrder
    receiverid?: SortOrder
    notes?: SortOrder
    timestamp?: SortOrder
    confirmedat?: SortOrder
  }

  export type paymentsescrowSumOrderByAggregateInput = {
    id?: SortOrder
    contractid?: SortOrder
    milestoneid?: SortOrder
    amount?: SortOrder
    initiatedby?: SortOrder
    receiverid?: SortOrder
  }

  export type Enumpayment_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_type | Enumpayment_typeFieldRefInput<$PrismaModel>
    in?: $Enums.payment_type[] | ListEnumpayment_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_type[] | ListEnumpayment_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_typeWithAggregatesFilter<$PrismaModel> | $Enums.payment_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_typeFilter<$PrismaModel>
    _max?: NestedEnumpayment_typeFilter<$PrismaModel>
  }

  export type Enumpayment_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpayment_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.payment_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpayment_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumpayment_statusNullableFilter<$PrismaModel>
  }

  export type Enumpayment_methodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpayment_methodNullableWithAggregatesFilter<$PrismaModel> | $Enums.payment_method | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpayment_methodNullableFilter<$PrismaModel>
    _max?: NestedEnumpayment_methodNullableFilter<$PrismaModel>
  }

  export type Enumproposal_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.proposal_status | Enumproposal_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.proposal_status[] | ListEnumproposal_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.proposal_status[] | ListEnumproposal_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumproposal_statusNullableFilter<$PrismaModel> | $Enums.proposal_status | null
  }

  export type proposalsCountOrderByAggregateInput = {
    id?: SortOrder
    jobid?: SortOrder
    freelancerid?: SortOrder
    coverletter?: SortOrder
    budgetquoted?: SortOrder
    proposedtimeline?: SortOrder
    status?: SortOrder
    submittedat?: SortOrder
  }

  export type proposalsAvgOrderByAggregateInput = {
    id?: SortOrder
    jobid?: SortOrder
    freelancerid?: SortOrder
    budgetquoted?: SortOrder
  }

  export type proposalsMaxOrderByAggregateInput = {
    id?: SortOrder
    jobid?: SortOrder
    freelancerid?: SortOrder
    coverletter?: SortOrder
    budgetquoted?: SortOrder
    proposedtimeline?: SortOrder
    status?: SortOrder
    submittedat?: SortOrder
  }

  export type proposalsMinOrderByAggregateInput = {
    id?: SortOrder
    jobid?: SortOrder
    freelancerid?: SortOrder
    coverletter?: SortOrder
    budgetquoted?: SortOrder
    proposedtimeline?: SortOrder
    status?: SortOrder
    submittedat?: SortOrder
  }

  export type proposalsSumOrderByAggregateInput = {
    id?: SortOrder
    jobid?: SortOrder
    freelancerid?: SortOrder
    budgetquoted?: SortOrder
  }

  export type Enumproposal_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.proposal_status | Enumproposal_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.proposal_status[] | ListEnumproposal_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.proposal_status[] | ListEnumproposal_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumproposal_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.proposal_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumproposal_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumproposal_statusNullableFilter<$PrismaModel>
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

  export type smartcontractCountOrderByAggregateInput = {
    id?: SortOrder
    jobid?: SortOrder
    freelancerid?: SortOrder
    clientid?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    escrowamount?: SortOrder
    smartcontractaddress?: SortOrder
    isactive?: SortOrder
    iscompleted?: SortOrder
    isdisputed?: SortOrder
    platformfee?: SortOrder
    paymentmethod?: SortOrder
    terminationreason?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type smartcontractAvgOrderByAggregateInput = {
    id?: SortOrder
    jobid?: SortOrder
    freelancerid?: SortOrder
    clientid?: SortOrder
    escrowamount?: SortOrder
    platformfee?: SortOrder
  }

  export type smartcontractMaxOrderByAggregateInput = {
    id?: SortOrder
    jobid?: SortOrder
    freelancerid?: SortOrder
    clientid?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    escrowamount?: SortOrder
    smartcontractaddress?: SortOrder
    isactive?: SortOrder
    iscompleted?: SortOrder
    isdisputed?: SortOrder
    platformfee?: SortOrder
    paymentmethod?: SortOrder
    terminationreason?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type smartcontractMinOrderByAggregateInput = {
    id?: SortOrder
    jobid?: SortOrder
    freelancerid?: SortOrder
    clientid?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    escrowamount?: SortOrder
    smartcontractaddress?: SortOrder
    isactive?: SortOrder
    iscompleted?: SortOrder
    isdisputed?: SortOrder
    platformfee?: SortOrder
    paymentmethod?: SortOrder
    terminationreason?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type smartcontractSumOrderByAggregateInput = {
    id?: SortOrder
    jobid?: SortOrder
    freelancerid?: SortOrder
    clientid?: SortOrder
    escrowamount?: SortOrder
    platformfee?: SortOrder
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

  export type Enumstake_purposeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.stake_purpose | Enumstake_purposeFieldRefInput<$PrismaModel> | null
    in?: $Enums.stake_purpose[] | ListEnumstake_purposeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.stake_purpose[] | ListEnumstake_purposeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstake_purposeNullableFilter<$PrismaModel> | $Enums.stake_purpose | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type stakingCountOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    stakeamount?: SortOrder
    stakepurpose?: SortOrder
    trustscore?: SortOrder
    resumescore?: SortOrder
    isvalidator?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    active?: SortOrder
  }

  export type stakingAvgOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    stakeamount?: SortOrder
    trustscore?: SortOrder
    resumescore?: SortOrder
  }

  export type stakingMaxOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    stakeamount?: SortOrder
    stakepurpose?: SortOrder
    trustscore?: SortOrder
    resumescore?: SortOrder
    isvalidator?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    active?: SortOrder
  }

  export type stakingMinOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    stakeamount?: SortOrder
    stakepurpose?: SortOrder
    trustscore?: SortOrder
    resumescore?: SortOrder
    isvalidator?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    active?: SortOrder
  }

  export type stakingSumOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    stakeamount?: SortOrder
    trustscore?: SortOrder
    resumescore?: SortOrder
  }

  export type Enumstake_purposeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.stake_purpose | Enumstake_purposeFieldRefInput<$PrismaModel> | null
    in?: $Enums.stake_purpose[] | ListEnumstake_purposeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.stake_purpose[] | ListEnumstake_purposeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstake_purposeNullableWithAggregatesFilter<$PrismaModel> | $Enums.stake_purpose | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumstake_purposeNullableFilter<$PrismaModel>
    _max?: NestedEnumstake_purposeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type jobpostedCreateNestedManyWithoutClientInput = {
    create?: XOR<jobpostedCreateWithoutClientInput, jobpostedUncheckedCreateWithoutClientInput> | jobpostedCreateWithoutClientInput[] | jobpostedUncheckedCreateWithoutClientInput[]
    connectOrCreate?: jobpostedCreateOrConnectWithoutClientInput | jobpostedCreateOrConnectWithoutClientInput[]
    createMany?: jobpostedCreateManyClientInputEnvelope
    connect?: jobpostedWhereUniqueInput | jobpostedWhereUniqueInput[]
  }

  export type smartcontractCreateNestedManyWithoutClientInput = {
    create?: XOR<smartcontractCreateWithoutClientInput, smartcontractUncheckedCreateWithoutClientInput> | smartcontractCreateWithoutClientInput[] | smartcontractUncheckedCreateWithoutClientInput[]
    connectOrCreate?: smartcontractCreateOrConnectWithoutClientInput | smartcontractCreateOrConnectWithoutClientInput[]
    createMany?: smartcontractCreateManyClientInputEnvelope
    connect?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
  }

  export type jobpostedUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<jobpostedCreateWithoutClientInput, jobpostedUncheckedCreateWithoutClientInput> | jobpostedCreateWithoutClientInput[] | jobpostedUncheckedCreateWithoutClientInput[]
    connectOrCreate?: jobpostedCreateOrConnectWithoutClientInput | jobpostedCreateOrConnectWithoutClientInput[]
    createMany?: jobpostedCreateManyClientInputEnvelope
    connect?: jobpostedWhereUniqueInput | jobpostedWhereUniqueInput[]
  }

  export type smartcontractUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<smartcontractCreateWithoutClientInput, smartcontractUncheckedCreateWithoutClientInput> | smartcontractCreateWithoutClientInput[] | smartcontractUncheckedCreateWithoutClientInput[]
    connectOrCreate?: smartcontractCreateOrConnectWithoutClientInput | smartcontractCreateOrConnectWithoutClientInput[]
    createMany?: smartcontractCreateManyClientInputEnvelope
    connect?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type jobpostedUpdateManyWithoutClientNestedInput = {
    create?: XOR<jobpostedCreateWithoutClientInput, jobpostedUncheckedCreateWithoutClientInput> | jobpostedCreateWithoutClientInput[] | jobpostedUncheckedCreateWithoutClientInput[]
    connectOrCreate?: jobpostedCreateOrConnectWithoutClientInput | jobpostedCreateOrConnectWithoutClientInput[]
    upsert?: jobpostedUpsertWithWhereUniqueWithoutClientInput | jobpostedUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: jobpostedCreateManyClientInputEnvelope
    set?: jobpostedWhereUniqueInput | jobpostedWhereUniqueInput[]
    disconnect?: jobpostedWhereUniqueInput | jobpostedWhereUniqueInput[]
    delete?: jobpostedWhereUniqueInput | jobpostedWhereUniqueInput[]
    connect?: jobpostedWhereUniqueInput | jobpostedWhereUniqueInput[]
    update?: jobpostedUpdateWithWhereUniqueWithoutClientInput | jobpostedUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: jobpostedUpdateManyWithWhereWithoutClientInput | jobpostedUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: jobpostedScalarWhereInput | jobpostedScalarWhereInput[]
  }

  export type smartcontractUpdateManyWithoutClientNestedInput = {
    create?: XOR<smartcontractCreateWithoutClientInput, smartcontractUncheckedCreateWithoutClientInput> | smartcontractCreateWithoutClientInput[] | smartcontractUncheckedCreateWithoutClientInput[]
    connectOrCreate?: smartcontractCreateOrConnectWithoutClientInput | smartcontractCreateOrConnectWithoutClientInput[]
    upsert?: smartcontractUpsertWithWhereUniqueWithoutClientInput | smartcontractUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: smartcontractCreateManyClientInputEnvelope
    set?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
    disconnect?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
    delete?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
    connect?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
    update?: smartcontractUpdateWithWhereUniqueWithoutClientInput | smartcontractUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: smartcontractUpdateManyWithWhereWithoutClientInput | smartcontractUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: smartcontractScalarWhereInput | smartcontractScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type jobpostedUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<jobpostedCreateWithoutClientInput, jobpostedUncheckedCreateWithoutClientInput> | jobpostedCreateWithoutClientInput[] | jobpostedUncheckedCreateWithoutClientInput[]
    connectOrCreate?: jobpostedCreateOrConnectWithoutClientInput | jobpostedCreateOrConnectWithoutClientInput[]
    upsert?: jobpostedUpsertWithWhereUniqueWithoutClientInput | jobpostedUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: jobpostedCreateManyClientInputEnvelope
    set?: jobpostedWhereUniqueInput | jobpostedWhereUniqueInput[]
    disconnect?: jobpostedWhereUniqueInput | jobpostedWhereUniqueInput[]
    delete?: jobpostedWhereUniqueInput | jobpostedWhereUniqueInput[]
    connect?: jobpostedWhereUniqueInput | jobpostedWhereUniqueInput[]
    update?: jobpostedUpdateWithWhereUniqueWithoutClientInput | jobpostedUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: jobpostedUpdateManyWithWhereWithoutClientInput | jobpostedUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: jobpostedScalarWhereInput | jobpostedScalarWhereInput[]
  }

  export type smartcontractUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<smartcontractCreateWithoutClientInput, smartcontractUncheckedCreateWithoutClientInput> | smartcontractCreateWithoutClientInput[] | smartcontractUncheckedCreateWithoutClientInput[]
    connectOrCreate?: smartcontractCreateOrConnectWithoutClientInput | smartcontractCreateOrConnectWithoutClientInput[]
    upsert?: smartcontractUpsertWithWhereUniqueWithoutClientInput | smartcontractUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: smartcontractCreateManyClientInputEnvelope
    set?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
    disconnect?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
    delete?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
    connect?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
    update?: smartcontractUpdateWithWhereUniqueWithoutClientInput | smartcontractUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: smartcontractUpdateManyWithWhereWithoutClientInput | smartcontractUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: smartcontractScalarWhereInput | smartcontractScalarWhereInput[]
  }

  export type disputesCreateevidenceurlsInput = {
    set: string[]
  }

  export type smartcontractCreateNestedOneWithoutDisputesInput = {
    create?: XOR<smartcontractCreateWithoutDisputesInput, smartcontractUncheckedCreateWithoutDisputesInput>
    connectOrCreate?: smartcontractCreateOrConnectWithoutDisputesInput
    connect?: smartcontractWhereUniqueInput
  }

  export type milestonesCreateNestedOneWithoutDisputesInput = {
    create?: XOR<milestonesCreateWithoutDisputesInput, milestonesUncheckedCreateWithoutDisputesInput>
    connectOrCreate?: milestonesCreateOrConnectWithoutDisputesInput
    connect?: milestonesWhereUniqueInput
  }

  export type NullableEnumdispute_statusFieldUpdateOperationsInput = {
    set?: $Enums.dispute_status | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type disputesUpdateevidenceurlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type smartcontractUpdateOneWithoutDisputesNestedInput = {
    create?: XOR<smartcontractCreateWithoutDisputesInput, smartcontractUncheckedCreateWithoutDisputesInput>
    connectOrCreate?: smartcontractCreateOrConnectWithoutDisputesInput
    upsert?: smartcontractUpsertWithoutDisputesInput
    disconnect?: smartcontractWhereInput | boolean
    delete?: smartcontractWhereInput | boolean
    connect?: smartcontractWhereUniqueInput
    update?: XOR<XOR<smartcontractUpdateToOneWithWhereWithoutDisputesInput, smartcontractUpdateWithoutDisputesInput>, smartcontractUncheckedUpdateWithoutDisputesInput>
  }

  export type milestonesUpdateOneWithoutDisputesNestedInput = {
    create?: XOR<milestonesCreateWithoutDisputesInput, milestonesUncheckedCreateWithoutDisputesInput>
    connectOrCreate?: milestonesCreateOrConnectWithoutDisputesInput
    upsert?: milestonesUpsertWithoutDisputesInput
    disconnect?: milestonesWhereInput | boolean
    delete?: milestonesWhereInput | boolean
    connect?: milestonesWhereUniqueInput
    update?: XOR<XOR<milestonesUpdateToOneWithWhereWithoutDisputesInput, milestonesUpdateWithoutDisputesInput>, milestonesUncheckedUpdateWithoutDisputesInput>
  }

  export type milestonesCreateNestedManyWithoutFreelancerInput = {
    create?: XOR<milestonesCreateWithoutFreelancerInput, milestonesUncheckedCreateWithoutFreelancerInput> | milestonesCreateWithoutFreelancerInput[] | milestonesUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: milestonesCreateOrConnectWithoutFreelancerInput | milestonesCreateOrConnectWithoutFreelancerInput[]
    createMany?: milestonesCreateManyFreelancerInputEnvelope
    connect?: milestonesWhereUniqueInput | milestonesWhereUniqueInput[]
  }

  export type nftcredentialCreateNestedManyWithoutFreelancerInput = {
    create?: XOR<nftcredentialCreateWithoutFreelancerInput, nftcredentialUncheckedCreateWithoutFreelancerInput> | nftcredentialCreateWithoutFreelancerInput[] | nftcredentialUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: nftcredentialCreateOrConnectWithoutFreelancerInput | nftcredentialCreateOrConnectWithoutFreelancerInput[]
    createMany?: nftcredentialCreateManyFreelancerInputEnvelope
    connect?: nftcredentialWhereUniqueInput | nftcredentialWhereUniqueInput[]
  }

  export type paymentsescrowCreateNestedManyWithoutFreelancerInput = {
    create?: XOR<paymentsescrowCreateWithoutFreelancerInput, paymentsescrowUncheckedCreateWithoutFreelancerInput> | paymentsescrowCreateWithoutFreelancerInput[] | paymentsescrowUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: paymentsescrowCreateOrConnectWithoutFreelancerInput | paymentsescrowCreateOrConnectWithoutFreelancerInput[]
    createMany?: paymentsescrowCreateManyFreelancerInputEnvelope
    connect?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
  }

  export type proposalsCreateNestedManyWithoutFreelancerInput = {
    create?: XOR<proposalsCreateWithoutFreelancerInput, proposalsUncheckedCreateWithoutFreelancerInput> | proposalsCreateWithoutFreelancerInput[] | proposalsUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: proposalsCreateOrConnectWithoutFreelancerInput | proposalsCreateOrConnectWithoutFreelancerInput[]
    createMany?: proposalsCreateManyFreelancerInputEnvelope
    connect?: proposalsWhereUniqueInput | proposalsWhereUniqueInput[]
  }

  export type smartcontractCreateNestedManyWithoutFreelancerInput = {
    create?: XOR<smartcontractCreateWithoutFreelancerInput, smartcontractUncheckedCreateWithoutFreelancerInput> | smartcontractCreateWithoutFreelancerInput[] | smartcontractUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: smartcontractCreateOrConnectWithoutFreelancerInput | smartcontractCreateOrConnectWithoutFreelancerInput[]
    createMany?: smartcontractCreateManyFreelancerInputEnvelope
    connect?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
  }

  export type milestonesUncheckedCreateNestedManyWithoutFreelancerInput = {
    create?: XOR<milestonesCreateWithoutFreelancerInput, milestonesUncheckedCreateWithoutFreelancerInput> | milestonesCreateWithoutFreelancerInput[] | milestonesUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: milestonesCreateOrConnectWithoutFreelancerInput | milestonesCreateOrConnectWithoutFreelancerInput[]
    createMany?: milestonesCreateManyFreelancerInputEnvelope
    connect?: milestonesWhereUniqueInput | milestonesWhereUniqueInput[]
  }

  export type nftcredentialUncheckedCreateNestedManyWithoutFreelancerInput = {
    create?: XOR<nftcredentialCreateWithoutFreelancerInput, nftcredentialUncheckedCreateWithoutFreelancerInput> | nftcredentialCreateWithoutFreelancerInput[] | nftcredentialUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: nftcredentialCreateOrConnectWithoutFreelancerInput | nftcredentialCreateOrConnectWithoutFreelancerInput[]
    createMany?: nftcredentialCreateManyFreelancerInputEnvelope
    connect?: nftcredentialWhereUniqueInput | nftcredentialWhereUniqueInput[]
  }

  export type paymentsescrowUncheckedCreateNestedManyWithoutFreelancerInput = {
    create?: XOR<paymentsescrowCreateWithoutFreelancerInput, paymentsescrowUncheckedCreateWithoutFreelancerInput> | paymentsescrowCreateWithoutFreelancerInput[] | paymentsescrowUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: paymentsescrowCreateOrConnectWithoutFreelancerInput | paymentsescrowCreateOrConnectWithoutFreelancerInput[]
    createMany?: paymentsescrowCreateManyFreelancerInputEnvelope
    connect?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
  }

  export type proposalsUncheckedCreateNestedManyWithoutFreelancerInput = {
    create?: XOR<proposalsCreateWithoutFreelancerInput, proposalsUncheckedCreateWithoutFreelancerInput> | proposalsCreateWithoutFreelancerInput[] | proposalsUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: proposalsCreateOrConnectWithoutFreelancerInput | proposalsCreateOrConnectWithoutFreelancerInput[]
    createMany?: proposalsCreateManyFreelancerInputEnvelope
    connect?: proposalsWhereUniqueInput | proposalsWhereUniqueInput[]
  }

  export type smartcontractUncheckedCreateNestedManyWithoutFreelancerInput = {
    create?: XOR<smartcontractCreateWithoutFreelancerInput, smartcontractUncheckedCreateWithoutFreelancerInput> | smartcontractCreateWithoutFreelancerInput[] | smartcontractUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: smartcontractCreateOrConnectWithoutFreelancerInput | smartcontractCreateOrConnectWithoutFreelancerInput[]
    createMany?: smartcontractCreateManyFreelancerInputEnvelope
    connect?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
  }

  export type milestonesUpdateManyWithoutFreelancerNestedInput = {
    create?: XOR<milestonesCreateWithoutFreelancerInput, milestonesUncheckedCreateWithoutFreelancerInput> | milestonesCreateWithoutFreelancerInput[] | milestonesUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: milestonesCreateOrConnectWithoutFreelancerInput | milestonesCreateOrConnectWithoutFreelancerInput[]
    upsert?: milestonesUpsertWithWhereUniqueWithoutFreelancerInput | milestonesUpsertWithWhereUniqueWithoutFreelancerInput[]
    createMany?: milestonesCreateManyFreelancerInputEnvelope
    set?: milestonesWhereUniqueInput | milestonesWhereUniqueInput[]
    disconnect?: milestonesWhereUniqueInput | milestonesWhereUniqueInput[]
    delete?: milestonesWhereUniqueInput | milestonesWhereUniqueInput[]
    connect?: milestonesWhereUniqueInput | milestonesWhereUniqueInput[]
    update?: milestonesUpdateWithWhereUniqueWithoutFreelancerInput | milestonesUpdateWithWhereUniqueWithoutFreelancerInput[]
    updateMany?: milestonesUpdateManyWithWhereWithoutFreelancerInput | milestonesUpdateManyWithWhereWithoutFreelancerInput[]
    deleteMany?: milestonesScalarWhereInput | milestonesScalarWhereInput[]
  }

  export type nftcredentialUpdateManyWithoutFreelancerNestedInput = {
    create?: XOR<nftcredentialCreateWithoutFreelancerInput, nftcredentialUncheckedCreateWithoutFreelancerInput> | nftcredentialCreateWithoutFreelancerInput[] | nftcredentialUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: nftcredentialCreateOrConnectWithoutFreelancerInput | nftcredentialCreateOrConnectWithoutFreelancerInput[]
    upsert?: nftcredentialUpsertWithWhereUniqueWithoutFreelancerInput | nftcredentialUpsertWithWhereUniqueWithoutFreelancerInput[]
    createMany?: nftcredentialCreateManyFreelancerInputEnvelope
    set?: nftcredentialWhereUniqueInput | nftcredentialWhereUniqueInput[]
    disconnect?: nftcredentialWhereUniqueInput | nftcredentialWhereUniqueInput[]
    delete?: nftcredentialWhereUniqueInput | nftcredentialWhereUniqueInput[]
    connect?: nftcredentialWhereUniqueInput | nftcredentialWhereUniqueInput[]
    update?: nftcredentialUpdateWithWhereUniqueWithoutFreelancerInput | nftcredentialUpdateWithWhereUniqueWithoutFreelancerInput[]
    updateMany?: nftcredentialUpdateManyWithWhereWithoutFreelancerInput | nftcredentialUpdateManyWithWhereWithoutFreelancerInput[]
    deleteMany?: nftcredentialScalarWhereInput | nftcredentialScalarWhereInput[]
  }

  export type paymentsescrowUpdateManyWithoutFreelancerNestedInput = {
    create?: XOR<paymentsescrowCreateWithoutFreelancerInput, paymentsescrowUncheckedCreateWithoutFreelancerInput> | paymentsescrowCreateWithoutFreelancerInput[] | paymentsescrowUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: paymentsescrowCreateOrConnectWithoutFreelancerInput | paymentsescrowCreateOrConnectWithoutFreelancerInput[]
    upsert?: paymentsescrowUpsertWithWhereUniqueWithoutFreelancerInput | paymentsescrowUpsertWithWhereUniqueWithoutFreelancerInput[]
    createMany?: paymentsescrowCreateManyFreelancerInputEnvelope
    set?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
    disconnect?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
    delete?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
    connect?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
    update?: paymentsescrowUpdateWithWhereUniqueWithoutFreelancerInput | paymentsescrowUpdateWithWhereUniqueWithoutFreelancerInput[]
    updateMany?: paymentsescrowUpdateManyWithWhereWithoutFreelancerInput | paymentsescrowUpdateManyWithWhereWithoutFreelancerInput[]
    deleteMany?: paymentsescrowScalarWhereInput | paymentsescrowScalarWhereInput[]
  }

  export type proposalsUpdateManyWithoutFreelancerNestedInput = {
    create?: XOR<proposalsCreateWithoutFreelancerInput, proposalsUncheckedCreateWithoutFreelancerInput> | proposalsCreateWithoutFreelancerInput[] | proposalsUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: proposalsCreateOrConnectWithoutFreelancerInput | proposalsCreateOrConnectWithoutFreelancerInput[]
    upsert?: proposalsUpsertWithWhereUniqueWithoutFreelancerInput | proposalsUpsertWithWhereUniqueWithoutFreelancerInput[]
    createMany?: proposalsCreateManyFreelancerInputEnvelope
    set?: proposalsWhereUniqueInput | proposalsWhereUniqueInput[]
    disconnect?: proposalsWhereUniqueInput | proposalsWhereUniqueInput[]
    delete?: proposalsWhereUniqueInput | proposalsWhereUniqueInput[]
    connect?: proposalsWhereUniqueInput | proposalsWhereUniqueInput[]
    update?: proposalsUpdateWithWhereUniqueWithoutFreelancerInput | proposalsUpdateWithWhereUniqueWithoutFreelancerInput[]
    updateMany?: proposalsUpdateManyWithWhereWithoutFreelancerInput | proposalsUpdateManyWithWhereWithoutFreelancerInput[]
    deleteMany?: proposalsScalarWhereInput | proposalsScalarWhereInput[]
  }

  export type smartcontractUpdateManyWithoutFreelancerNestedInput = {
    create?: XOR<smartcontractCreateWithoutFreelancerInput, smartcontractUncheckedCreateWithoutFreelancerInput> | smartcontractCreateWithoutFreelancerInput[] | smartcontractUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: smartcontractCreateOrConnectWithoutFreelancerInput | smartcontractCreateOrConnectWithoutFreelancerInput[]
    upsert?: smartcontractUpsertWithWhereUniqueWithoutFreelancerInput | smartcontractUpsertWithWhereUniqueWithoutFreelancerInput[]
    createMany?: smartcontractCreateManyFreelancerInputEnvelope
    set?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
    disconnect?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
    delete?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
    connect?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
    update?: smartcontractUpdateWithWhereUniqueWithoutFreelancerInput | smartcontractUpdateWithWhereUniqueWithoutFreelancerInput[]
    updateMany?: smartcontractUpdateManyWithWhereWithoutFreelancerInput | smartcontractUpdateManyWithWhereWithoutFreelancerInput[]
    deleteMany?: smartcontractScalarWhereInput | smartcontractScalarWhereInput[]
  }

  export type milestonesUncheckedUpdateManyWithoutFreelancerNestedInput = {
    create?: XOR<milestonesCreateWithoutFreelancerInput, milestonesUncheckedCreateWithoutFreelancerInput> | milestonesCreateWithoutFreelancerInput[] | milestonesUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: milestonesCreateOrConnectWithoutFreelancerInput | milestonesCreateOrConnectWithoutFreelancerInput[]
    upsert?: milestonesUpsertWithWhereUniqueWithoutFreelancerInput | milestonesUpsertWithWhereUniqueWithoutFreelancerInput[]
    createMany?: milestonesCreateManyFreelancerInputEnvelope
    set?: milestonesWhereUniqueInput | milestonesWhereUniqueInput[]
    disconnect?: milestonesWhereUniqueInput | milestonesWhereUniqueInput[]
    delete?: milestonesWhereUniqueInput | milestonesWhereUniqueInput[]
    connect?: milestonesWhereUniqueInput | milestonesWhereUniqueInput[]
    update?: milestonesUpdateWithWhereUniqueWithoutFreelancerInput | milestonesUpdateWithWhereUniqueWithoutFreelancerInput[]
    updateMany?: milestonesUpdateManyWithWhereWithoutFreelancerInput | milestonesUpdateManyWithWhereWithoutFreelancerInput[]
    deleteMany?: milestonesScalarWhereInput | milestonesScalarWhereInput[]
  }

  export type nftcredentialUncheckedUpdateManyWithoutFreelancerNestedInput = {
    create?: XOR<nftcredentialCreateWithoutFreelancerInput, nftcredentialUncheckedCreateWithoutFreelancerInput> | nftcredentialCreateWithoutFreelancerInput[] | nftcredentialUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: nftcredentialCreateOrConnectWithoutFreelancerInput | nftcredentialCreateOrConnectWithoutFreelancerInput[]
    upsert?: nftcredentialUpsertWithWhereUniqueWithoutFreelancerInput | nftcredentialUpsertWithWhereUniqueWithoutFreelancerInput[]
    createMany?: nftcredentialCreateManyFreelancerInputEnvelope
    set?: nftcredentialWhereUniqueInput | nftcredentialWhereUniqueInput[]
    disconnect?: nftcredentialWhereUniqueInput | nftcredentialWhereUniqueInput[]
    delete?: nftcredentialWhereUniqueInput | nftcredentialWhereUniqueInput[]
    connect?: nftcredentialWhereUniqueInput | nftcredentialWhereUniqueInput[]
    update?: nftcredentialUpdateWithWhereUniqueWithoutFreelancerInput | nftcredentialUpdateWithWhereUniqueWithoutFreelancerInput[]
    updateMany?: nftcredentialUpdateManyWithWhereWithoutFreelancerInput | nftcredentialUpdateManyWithWhereWithoutFreelancerInput[]
    deleteMany?: nftcredentialScalarWhereInput | nftcredentialScalarWhereInput[]
  }

  export type paymentsescrowUncheckedUpdateManyWithoutFreelancerNestedInput = {
    create?: XOR<paymentsescrowCreateWithoutFreelancerInput, paymentsescrowUncheckedCreateWithoutFreelancerInput> | paymentsescrowCreateWithoutFreelancerInput[] | paymentsescrowUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: paymentsescrowCreateOrConnectWithoutFreelancerInput | paymentsescrowCreateOrConnectWithoutFreelancerInput[]
    upsert?: paymentsescrowUpsertWithWhereUniqueWithoutFreelancerInput | paymentsescrowUpsertWithWhereUniqueWithoutFreelancerInput[]
    createMany?: paymentsescrowCreateManyFreelancerInputEnvelope
    set?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
    disconnect?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
    delete?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
    connect?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
    update?: paymentsescrowUpdateWithWhereUniqueWithoutFreelancerInput | paymentsescrowUpdateWithWhereUniqueWithoutFreelancerInput[]
    updateMany?: paymentsescrowUpdateManyWithWhereWithoutFreelancerInput | paymentsescrowUpdateManyWithWhereWithoutFreelancerInput[]
    deleteMany?: paymentsescrowScalarWhereInput | paymentsescrowScalarWhereInput[]
  }

  export type proposalsUncheckedUpdateManyWithoutFreelancerNestedInput = {
    create?: XOR<proposalsCreateWithoutFreelancerInput, proposalsUncheckedCreateWithoutFreelancerInput> | proposalsCreateWithoutFreelancerInput[] | proposalsUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: proposalsCreateOrConnectWithoutFreelancerInput | proposalsCreateOrConnectWithoutFreelancerInput[]
    upsert?: proposalsUpsertWithWhereUniqueWithoutFreelancerInput | proposalsUpsertWithWhereUniqueWithoutFreelancerInput[]
    createMany?: proposalsCreateManyFreelancerInputEnvelope
    set?: proposalsWhereUniqueInput | proposalsWhereUniqueInput[]
    disconnect?: proposalsWhereUniqueInput | proposalsWhereUniqueInput[]
    delete?: proposalsWhereUniqueInput | proposalsWhereUniqueInput[]
    connect?: proposalsWhereUniqueInput | proposalsWhereUniqueInput[]
    update?: proposalsUpdateWithWhereUniqueWithoutFreelancerInput | proposalsUpdateWithWhereUniqueWithoutFreelancerInput[]
    updateMany?: proposalsUpdateManyWithWhereWithoutFreelancerInput | proposalsUpdateManyWithWhereWithoutFreelancerInput[]
    deleteMany?: proposalsScalarWhereInput | proposalsScalarWhereInput[]
  }

  export type smartcontractUncheckedUpdateManyWithoutFreelancerNestedInput = {
    create?: XOR<smartcontractCreateWithoutFreelancerInput, smartcontractUncheckedCreateWithoutFreelancerInput> | smartcontractCreateWithoutFreelancerInput[] | smartcontractUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: smartcontractCreateOrConnectWithoutFreelancerInput | smartcontractCreateOrConnectWithoutFreelancerInput[]
    upsert?: smartcontractUpsertWithWhereUniqueWithoutFreelancerInput | smartcontractUpsertWithWhereUniqueWithoutFreelancerInput[]
    createMany?: smartcontractCreateManyFreelancerInputEnvelope
    set?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
    disconnect?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
    delete?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
    connect?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
    update?: smartcontractUpdateWithWhereUniqueWithoutFreelancerInput | smartcontractUpdateWithWhereUniqueWithoutFreelancerInput[]
    updateMany?: smartcontractUpdateManyWithWhereWithoutFreelancerInput | smartcontractUpdateManyWithWhereWithoutFreelancerInput[]
    deleteMany?: smartcontractScalarWhereInput | smartcontractScalarWhereInput[]
  }

  export type jobpostedCreatetagsInput = {
    set: string[]
  }

  export type jobpostedCreatephotourlsInput = {
    set: string[]
  }

  export type clientCreateNestedOneWithoutJobpostedInput = {
    create?: XOR<clientCreateWithoutJobpostedInput, clientUncheckedCreateWithoutJobpostedInput>
    connectOrCreate?: clientCreateOrConnectWithoutJobpostedInput
    connect?: clientWhereUniqueInput
  }

  export type messageCreateNestedManyWithoutJobpostedInput = {
    create?: XOR<messageCreateWithoutJobpostedInput, messageUncheckedCreateWithoutJobpostedInput> | messageCreateWithoutJobpostedInput[] | messageUncheckedCreateWithoutJobpostedInput[]
    connectOrCreate?: messageCreateOrConnectWithoutJobpostedInput | messageCreateOrConnectWithoutJobpostedInput[]
    createMany?: messageCreateManyJobpostedInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type milestonesCreateNestedManyWithoutJobpostedInput = {
    create?: XOR<milestonesCreateWithoutJobpostedInput, milestonesUncheckedCreateWithoutJobpostedInput> | milestonesCreateWithoutJobpostedInput[] | milestonesUncheckedCreateWithoutJobpostedInput[]
    connectOrCreate?: milestonesCreateOrConnectWithoutJobpostedInput | milestonesCreateOrConnectWithoutJobpostedInput[]
    createMany?: milestonesCreateManyJobpostedInputEnvelope
    connect?: milestonesWhereUniqueInput | milestonesWhereUniqueInput[]
  }

  export type nftcredentialCreateNestedManyWithoutJobpostedInput = {
    create?: XOR<nftcredentialCreateWithoutJobpostedInput, nftcredentialUncheckedCreateWithoutJobpostedInput> | nftcredentialCreateWithoutJobpostedInput[] | nftcredentialUncheckedCreateWithoutJobpostedInput[]
    connectOrCreate?: nftcredentialCreateOrConnectWithoutJobpostedInput | nftcredentialCreateOrConnectWithoutJobpostedInput[]
    createMany?: nftcredentialCreateManyJobpostedInputEnvelope
    connect?: nftcredentialWhereUniqueInput | nftcredentialWhereUniqueInput[]
  }

  export type proposalsCreateNestedManyWithoutJobpostedInput = {
    create?: XOR<proposalsCreateWithoutJobpostedInput, proposalsUncheckedCreateWithoutJobpostedInput> | proposalsCreateWithoutJobpostedInput[] | proposalsUncheckedCreateWithoutJobpostedInput[]
    connectOrCreate?: proposalsCreateOrConnectWithoutJobpostedInput | proposalsCreateOrConnectWithoutJobpostedInput[]
    createMany?: proposalsCreateManyJobpostedInputEnvelope
    connect?: proposalsWhereUniqueInput | proposalsWhereUniqueInput[]
  }

  export type smartcontractCreateNestedManyWithoutJobpostedInput = {
    create?: XOR<smartcontractCreateWithoutJobpostedInput, smartcontractUncheckedCreateWithoutJobpostedInput> | smartcontractCreateWithoutJobpostedInput[] | smartcontractUncheckedCreateWithoutJobpostedInput[]
    connectOrCreate?: smartcontractCreateOrConnectWithoutJobpostedInput | smartcontractCreateOrConnectWithoutJobpostedInput[]
    createMany?: smartcontractCreateManyJobpostedInputEnvelope
    connect?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
  }

  export type messageUncheckedCreateNestedManyWithoutJobpostedInput = {
    create?: XOR<messageCreateWithoutJobpostedInput, messageUncheckedCreateWithoutJobpostedInput> | messageCreateWithoutJobpostedInput[] | messageUncheckedCreateWithoutJobpostedInput[]
    connectOrCreate?: messageCreateOrConnectWithoutJobpostedInput | messageCreateOrConnectWithoutJobpostedInput[]
    createMany?: messageCreateManyJobpostedInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type milestonesUncheckedCreateNestedManyWithoutJobpostedInput = {
    create?: XOR<milestonesCreateWithoutJobpostedInput, milestonesUncheckedCreateWithoutJobpostedInput> | milestonesCreateWithoutJobpostedInput[] | milestonesUncheckedCreateWithoutJobpostedInput[]
    connectOrCreate?: milestonesCreateOrConnectWithoutJobpostedInput | milestonesCreateOrConnectWithoutJobpostedInput[]
    createMany?: milestonesCreateManyJobpostedInputEnvelope
    connect?: milestonesWhereUniqueInput | milestonesWhereUniqueInput[]
  }

  export type nftcredentialUncheckedCreateNestedManyWithoutJobpostedInput = {
    create?: XOR<nftcredentialCreateWithoutJobpostedInput, nftcredentialUncheckedCreateWithoutJobpostedInput> | nftcredentialCreateWithoutJobpostedInput[] | nftcredentialUncheckedCreateWithoutJobpostedInput[]
    connectOrCreate?: nftcredentialCreateOrConnectWithoutJobpostedInput | nftcredentialCreateOrConnectWithoutJobpostedInput[]
    createMany?: nftcredentialCreateManyJobpostedInputEnvelope
    connect?: nftcredentialWhereUniqueInput | nftcredentialWhereUniqueInput[]
  }

  export type proposalsUncheckedCreateNestedManyWithoutJobpostedInput = {
    create?: XOR<proposalsCreateWithoutJobpostedInput, proposalsUncheckedCreateWithoutJobpostedInput> | proposalsCreateWithoutJobpostedInput[] | proposalsUncheckedCreateWithoutJobpostedInput[]
    connectOrCreate?: proposalsCreateOrConnectWithoutJobpostedInput | proposalsCreateOrConnectWithoutJobpostedInput[]
    createMany?: proposalsCreateManyJobpostedInputEnvelope
    connect?: proposalsWhereUniqueInput | proposalsWhereUniqueInput[]
  }

  export type smartcontractUncheckedCreateNestedManyWithoutJobpostedInput = {
    create?: XOR<smartcontractCreateWithoutJobpostedInput, smartcontractUncheckedCreateWithoutJobpostedInput> | smartcontractCreateWithoutJobpostedInput[] | smartcontractUncheckedCreateWithoutJobpostedInput[]
    connectOrCreate?: smartcontractCreateOrConnectWithoutJobpostedInput | smartcontractCreateOrConnectWithoutJobpostedInput[]
    createMany?: smartcontractCreateManyJobpostedInputEnvelope
    connect?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
  }

  export type jobpostedUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type jobpostedUpdatephotourlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type clientUpdateOneWithoutJobpostedNestedInput = {
    create?: XOR<clientCreateWithoutJobpostedInput, clientUncheckedCreateWithoutJobpostedInput>
    connectOrCreate?: clientCreateOrConnectWithoutJobpostedInput
    upsert?: clientUpsertWithoutJobpostedInput
    disconnect?: clientWhereInput | boolean
    delete?: clientWhereInput | boolean
    connect?: clientWhereUniqueInput
    update?: XOR<XOR<clientUpdateToOneWithWhereWithoutJobpostedInput, clientUpdateWithoutJobpostedInput>, clientUncheckedUpdateWithoutJobpostedInput>
  }

  export type messageUpdateManyWithoutJobpostedNestedInput = {
    create?: XOR<messageCreateWithoutJobpostedInput, messageUncheckedCreateWithoutJobpostedInput> | messageCreateWithoutJobpostedInput[] | messageUncheckedCreateWithoutJobpostedInput[]
    connectOrCreate?: messageCreateOrConnectWithoutJobpostedInput | messageCreateOrConnectWithoutJobpostedInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutJobpostedInput | messageUpsertWithWhereUniqueWithoutJobpostedInput[]
    createMany?: messageCreateManyJobpostedInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutJobpostedInput | messageUpdateWithWhereUniqueWithoutJobpostedInput[]
    updateMany?: messageUpdateManyWithWhereWithoutJobpostedInput | messageUpdateManyWithWhereWithoutJobpostedInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type milestonesUpdateManyWithoutJobpostedNestedInput = {
    create?: XOR<milestonesCreateWithoutJobpostedInput, milestonesUncheckedCreateWithoutJobpostedInput> | milestonesCreateWithoutJobpostedInput[] | milestonesUncheckedCreateWithoutJobpostedInput[]
    connectOrCreate?: milestonesCreateOrConnectWithoutJobpostedInput | milestonesCreateOrConnectWithoutJobpostedInput[]
    upsert?: milestonesUpsertWithWhereUniqueWithoutJobpostedInput | milestonesUpsertWithWhereUniqueWithoutJobpostedInput[]
    createMany?: milestonesCreateManyJobpostedInputEnvelope
    set?: milestonesWhereUniqueInput | milestonesWhereUniqueInput[]
    disconnect?: milestonesWhereUniqueInput | milestonesWhereUniqueInput[]
    delete?: milestonesWhereUniqueInput | milestonesWhereUniqueInput[]
    connect?: milestonesWhereUniqueInput | milestonesWhereUniqueInput[]
    update?: milestonesUpdateWithWhereUniqueWithoutJobpostedInput | milestonesUpdateWithWhereUniqueWithoutJobpostedInput[]
    updateMany?: milestonesUpdateManyWithWhereWithoutJobpostedInput | milestonesUpdateManyWithWhereWithoutJobpostedInput[]
    deleteMany?: milestonesScalarWhereInput | milestonesScalarWhereInput[]
  }

  export type nftcredentialUpdateManyWithoutJobpostedNestedInput = {
    create?: XOR<nftcredentialCreateWithoutJobpostedInput, nftcredentialUncheckedCreateWithoutJobpostedInput> | nftcredentialCreateWithoutJobpostedInput[] | nftcredentialUncheckedCreateWithoutJobpostedInput[]
    connectOrCreate?: nftcredentialCreateOrConnectWithoutJobpostedInput | nftcredentialCreateOrConnectWithoutJobpostedInput[]
    upsert?: nftcredentialUpsertWithWhereUniqueWithoutJobpostedInput | nftcredentialUpsertWithWhereUniqueWithoutJobpostedInput[]
    createMany?: nftcredentialCreateManyJobpostedInputEnvelope
    set?: nftcredentialWhereUniqueInput | nftcredentialWhereUniqueInput[]
    disconnect?: nftcredentialWhereUniqueInput | nftcredentialWhereUniqueInput[]
    delete?: nftcredentialWhereUniqueInput | nftcredentialWhereUniqueInput[]
    connect?: nftcredentialWhereUniqueInput | nftcredentialWhereUniqueInput[]
    update?: nftcredentialUpdateWithWhereUniqueWithoutJobpostedInput | nftcredentialUpdateWithWhereUniqueWithoutJobpostedInput[]
    updateMany?: nftcredentialUpdateManyWithWhereWithoutJobpostedInput | nftcredentialUpdateManyWithWhereWithoutJobpostedInput[]
    deleteMany?: nftcredentialScalarWhereInput | nftcredentialScalarWhereInput[]
  }

  export type proposalsUpdateManyWithoutJobpostedNestedInput = {
    create?: XOR<proposalsCreateWithoutJobpostedInput, proposalsUncheckedCreateWithoutJobpostedInput> | proposalsCreateWithoutJobpostedInput[] | proposalsUncheckedCreateWithoutJobpostedInput[]
    connectOrCreate?: proposalsCreateOrConnectWithoutJobpostedInput | proposalsCreateOrConnectWithoutJobpostedInput[]
    upsert?: proposalsUpsertWithWhereUniqueWithoutJobpostedInput | proposalsUpsertWithWhereUniqueWithoutJobpostedInput[]
    createMany?: proposalsCreateManyJobpostedInputEnvelope
    set?: proposalsWhereUniqueInput | proposalsWhereUniqueInput[]
    disconnect?: proposalsWhereUniqueInput | proposalsWhereUniqueInput[]
    delete?: proposalsWhereUniqueInput | proposalsWhereUniqueInput[]
    connect?: proposalsWhereUniqueInput | proposalsWhereUniqueInput[]
    update?: proposalsUpdateWithWhereUniqueWithoutJobpostedInput | proposalsUpdateWithWhereUniqueWithoutJobpostedInput[]
    updateMany?: proposalsUpdateManyWithWhereWithoutJobpostedInput | proposalsUpdateManyWithWhereWithoutJobpostedInput[]
    deleteMany?: proposalsScalarWhereInput | proposalsScalarWhereInput[]
  }

  export type smartcontractUpdateManyWithoutJobpostedNestedInput = {
    create?: XOR<smartcontractCreateWithoutJobpostedInput, smartcontractUncheckedCreateWithoutJobpostedInput> | smartcontractCreateWithoutJobpostedInput[] | smartcontractUncheckedCreateWithoutJobpostedInput[]
    connectOrCreate?: smartcontractCreateOrConnectWithoutJobpostedInput | smartcontractCreateOrConnectWithoutJobpostedInput[]
    upsert?: smartcontractUpsertWithWhereUniqueWithoutJobpostedInput | smartcontractUpsertWithWhereUniqueWithoutJobpostedInput[]
    createMany?: smartcontractCreateManyJobpostedInputEnvelope
    set?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
    disconnect?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
    delete?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
    connect?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
    update?: smartcontractUpdateWithWhereUniqueWithoutJobpostedInput | smartcontractUpdateWithWhereUniqueWithoutJobpostedInput[]
    updateMany?: smartcontractUpdateManyWithWhereWithoutJobpostedInput | smartcontractUpdateManyWithWhereWithoutJobpostedInput[]
    deleteMany?: smartcontractScalarWhereInput | smartcontractScalarWhereInput[]
  }

  export type messageUncheckedUpdateManyWithoutJobpostedNestedInput = {
    create?: XOR<messageCreateWithoutJobpostedInput, messageUncheckedCreateWithoutJobpostedInput> | messageCreateWithoutJobpostedInput[] | messageUncheckedCreateWithoutJobpostedInput[]
    connectOrCreate?: messageCreateOrConnectWithoutJobpostedInput | messageCreateOrConnectWithoutJobpostedInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutJobpostedInput | messageUpsertWithWhereUniqueWithoutJobpostedInput[]
    createMany?: messageCreateManyJobpostedInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutJobpostedInput | messageUpdateWithWhereUniqueWithoutJobpostedInput[]
    updateMany?: messageUpdateManyWithWhereWithoutJobpostedInput | messageUpdateManyWithWhereWithoutJobpostedInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type milestonesUncheckedUpdateManyWithoutJobpostedNestedInput = {
    create?: XOR<milestonesCreateWithoutJobpostedInput, milestonesUncheckedCreateWithoutJobpostedInput> | milestonesCreateWithoutJobpostedInput[] | milestonesUncheckedCreateWithoutJobpostedInput[]
    connectOrCreate?: milestonesCreateOrConnectWithoutJobpostedInput | milestonesCreateOrConnectWithoutJobpostedInput[]
    upsert?: milestonesUpsertWithWhereUniqueWithoutJobpostedInput | milestonesUpsertWithWhereUniqueWithoutJobpostedInput[]
    createMany?: milestonesCreateManyJobpostedInputEnvelope
    set?: milestonesWhereUniqueInput | milestonesWhereUniqueInput[]
    disconnect?: milestonesWhereUniqueInput | milestonesWhereUniqueInput[]
    delete?: milestonesWhereUniqueInput | milestonesWhereUniqueInput[]
    connect?: milestonesWhereUniqueInput | milestonesWhereUniqueInput[]
    update?: milestonesUpdateWithWhereUniqueWithoutJobpostedInput | milestonesUpdateWithWhereUniqueWithoutJobpostedInput[]
    updateMany?: milestonesUpdateManyWithWhereWithoutJobpostedInput | milestonesUpdateManyWithWhereWithoutJobpostedInput[]
    deleteMany?: milestonesScalarWhereInput | milestonesScalarWhereInput[]
  }

  export type nftcredentialUncheckedUpdateManyWithoutJobpostedNestedInput = {
    create?: XOR<nftcredentialCreateWithoutJobpostedInput, nftcredentialUncheckedCreateWithoutJobpostedInput> | nftcredentialCreateWithoutJobpostedInput[] | nftcredentialUncheckedCreateWithoutJobpostedInput[]
    connectOrCreate?: nftcredentialCreateOrConnectWithoutJobpostedInput | nftcredentialCreateOrConnectWithoutJobpostedInput[]
    upsert?: nftcredentialUpsertWithWhereUniqueWithoutJobpostedInput | nftcredentialUpsertWithWhereUniqueWithoutJobpostedInput[]
    createMany?: nftcredentialCreateManyJobpostedInputEnvelope
    set?: nftcredentialWhereUniqueInput | nftcredentialWhereUniqueInput[]
    disconnect?: nftcredentialWhereUniqueInput | nftcredentialWhereUniqueInput[]
    delete?: nftcredentialWhereUniqueInput | nftcredentialWhereUniqueInput[]
    connect?: nftcredentialWhereUniqueInput | nftcredentialWhereUniqueInput[]
    update?: nftcredentialUpdateWithWhereUniqueWithoutJobpostedInput | nftcredentialUpdateWithWhereUniqueWithoutJobpostedInput[]
    updateMany?: nftcredentialUpdateManyWithWhereWithoutJobpostedInput | nftcredentialUpdateManyWithWhereWithoutJobpostedInput[]
    deleteMany?: nftcredentialScalarWhereInput | nftcredentialScalarWhereInput[]
  }

  export type proposalsUncheckedUpdateManyWithoutJobpostedNestedInput = {
    create?: XOR<proposalsCreateWithoutJobpostedInput, proposalsUncheckedCreateWithoutJobpostedInput> | proposalsCreateWithoutJobpostedInput[] | proposalsUncheckedCreateWithoutJobpostedInput[]
    connectOrCreate?: proposalsCreateOrConnectWithoutJobpostedInput | proposalsCreateOrConnectWithoutJobpostedInput[]
    upsert?: proposalsUpsertWithWhereUniqueWithoutJobpostedInput | proposalsUpsertWithWhereUniqueWithoutJobpostedInput[]
    createMany?: proposalsCreateManyJobpostedInputEnvelope
    set?: proposalsWhereUniqueInput | proposalsWhereUniqueInput[]
    disconnect?: proposalsWhereUniqueInput | proposalsWhereUniqueInput[]
    delete?: proposalsWhereUniqueInput | proposalsWhereUniqueInput[]
    connect?: proposalsWhereUniqueInput | proposalsWhereUniqueInput[]
    update?: proposalsUpdateWithWhereUniqueWithoutJobpostedInput | proposalsUpdateWithWhereUniqueWithoutJobpostedInput[]
    updateMany?: proposalsUpdateManyWithWhereWithoutJobpostedInput | proposalsUpdateManyWithWhereWithoutJobpostedInput[]
    deleteMany?: proposalsScalarWhereInput | proposalsScalarWhereInput[]
  }

  export type smartcontractUncheckedUpdateManyWithoutJobpostedNestedInput = {
    create?: XOR<smartcontractCreateWithoutJobpostedInput, smartcontractUncheckedCreateWithoutJobpostedInput> | smartcontractCreateWithoutJobpostedInput[] | smartcontractUncheckedCreateWithoutJobpostedInput[]
    connectOrCreate?: smartcontractCreateOrConnectWithoutJobpostedInput | smartcontractCreateOrConnectWithoutJobpostedInput[]
    upsert?: smartcontractUpsertWithWhereUniqueWithoutJobpostedInput | smartcontractUpsertWithWhereUniqueWithoutJobpostedInput[]
    createMany?: smartcontractCreateManyJobpostedInputEnvelope
    set?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
    disconnect?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
    delete?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
    connect?: smartcontractWhereUniqueInput | smartcontractWhereUniqueInput[]
    update?: smartcontractUpdateWithWhereUniqueWithoutJobpostedInput | smartcontractUpdateWithWhereUniqueWithoutJobpostedInput[]
    updateMany?: smartcontractUpdateManyWithWhereWithoutJobpostedInput | smartcontractUpdateManyWithWhereWithoutJobpostedInput[]
    deleteMany?: smartcontractScalarWhereInput | smartcontractScalarWhereInput[]
  }

  export type jobpostedCreateNestedOneWithoutMessageInput = {
    create?: XOR<jobpostedCreateWithoutMessageInput, jobpostedUncheckedCreateWithoutMessageInput>
    connectOrCreate?: jobpostedCreateOrConnectWithoutMessageInput
    connect?: jobpostedWhereUniqueInput
  }

  export type NullableEnummessage_typeFieldUpdateOperationsInput = {
    set?: $Enums.message_type | null
  }

  export type jobpostedUpdateOneWithoutMessageNestedInput = {
    create?: XOR<jobpostedCreateWithoutMessageInput, jobpostedUncheckedCreateWithoutMessageInput>
    connectOrCreate?: jobpostedCreateOrConnectWithoutMessageInput
    upsert?: jobpostedUpsertWithoutMessageInput
    disconnect?: jobpostedWhereInput | boolean
    delete?: jobpostedWhereInput | boolean
    connect?: jobpostedWhereUniqueInput
    update?: XOR<XOR<jobpostedUpdateToOneWithWhereWithoutMessageInput, jobpostedUpdateWithoutMessageInput>, jobpostedUncheckedUpdateWithoutMessageInput>
  }

  export type disputesCreateNestedManyWithoutMilestonesInput = {
    create?: XOR<disputesCreateWithoutMilestonesInput, disputesUncheckedCreateWithoutMilestonesInput> | disputesCreateWithoutMilestonesInput[] | disputesUncheckedCreateWithoutMilestonesInput[]
    connectOrCreate?: disputesCreateOrConnectWithoutMilestonesInput | disputesCreateOrConnectWithoutMilestonesInput[]
    createMany?: disputesCreateManyMilestonesInputEnvelope
    connect?: disputesWhereUniqueInput | disputesWhereUniqueInput[]
  }

  export type freelancerCreateNestedOneWithoutMilestonesInput = {
    create?: XOR<freelancerCreateWithoutMilestonesInput, freelancerUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: freelancerCreateOrConnectWithoutMilestonesInput
    connect?: freelancerWhereUniqueInput
  }

  export type jobpostedCreateNestedOneWithoutMilestonesInput = {
    create?: XOR<jobpostedCreateWithoutMilestonesInput, jobpostedUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: jobpostedCreateOrConnectWithoutMilestonesInput
    connect?: jobpostedWhereUniqueInput
  }

  export type paymentsescrowCreateNestedManyWithoutMilestonesInput = {
    create?: XOR<paymentsescrowCreateWithoutMilestonesInput, paymentsescrowUncheckedCreateWithoutMilestonesInput> | paymentsescrowCreateWithoutMilestonesInput[] | paymentsescrowUncheckedCreateWithoutMilestonesInput[]
    connectOrCreate?: paymentsescrowCreateOrConnectWithoutMilestonesInput | paymentsescrowCreateOrConnectWithoutMilestonesInput[]
    createMany?: paymentsescrowCreateManyMilestonesInputEnvelope
    connect?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
  }

  export type disputesUncheckedCreateNestedManyWithoutMilestonesInput = {
    create?: XOR<disputesCreateWithoutMilestonesInput, disputesUncheckedCreateWithoutMilestonesInput> | disputesCreateWithoutMilestonesInput[] | disputesUncheckedCreateWithoutMilestonesInput[]
    connectOrCreate?: disputesCreateOrConnectWithoutMilestonesInput | disputesCreateOrConnectWithoutMilestonesInput[]
    createMany?: disputesCreateManyMilestonesInputEnvelope
    connect?: disputesWhereUniqueInput | disputesWhereUniqueInput[]
  }

  export type paymentsescrowUncheckedCreateNestedManyWithoutMilestonesInput = {
    create?: XOR<paymentsescrowCreateWithoutMilestonesInput, paymentsescrowUncheckedCreateWithoutMilestonesInput> | paymentsescrowCreateWithoutMilestonesInput[] | paymentsescrowUncheckedCreateWithoutMilestonesInput[]
    connectOrCreate?: paymentsescrowCreateOrConnectWithoutMilestonesInput | paymentsescrowCreateOrConnectWithoutMilestonesInput[]
    createMany?: paymentsescrowCreateManyMilestonesInputEnvelope
    connect?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
  }

  export type NullableEnummilestone_statusFieldUpdateOperationsInput = {
    set?: $Enums.milestone_status | null
  }

  export type disputesUpdateManyWithoutMilestonesNestedInput = {
    create?: XOR<disputesCreateWithoutMilestonesInput, disputesUncheckedCreateWithoutMilestonesInput> | disputesCreateWithoutMilestonesInput[] | disputesUncheckedCreateWithoutMilestonesInput[]
    connectOrCreate?: disputesCreateOrConnectWithoutMilestonesInput | disputesCreateOrConnectWithoutMilestonesInput[]
    upsert?: disputesUpsertWithWhereUniqueWithoutMilestonesInput | disputesUpsertWithWhereUniqueWithoutMilestonesInput[]
    createMany?: disputesCreateManyMilestonesInputEnvelope
    set?: disputesWhereUniqueInput | disputesWhereUniqueInput[]
    disconnect?: disputesWhereUniqueInput | disputesWhereUniqueInput[]
    delete?: disputesWhereUniqueInput | disputesWhereUniqueInput[]
    connect?: disputesWhereUniqueInput | disputesWhereUniqueInput[]
    update?: disputesUpdateWithWhereUniqueWithoutMilestonesInput | disputesUpdateWithWhereUniqueWithoutMilestonesInput[]
    updateMany?: disputesUpdateManyWithWhereWithoutMilestonesInput | disputesUpdateManyWithWhereWithoutMilestonesInput[]
    deleteMany?: disputesScalarWhereInput | disputesScalarWhereInput[]
  }

  export type freelancerUpdateOneWithoutMilestonesNestedInput = {
    create?: XOR<freelancerCreateWithoutMilestonesInput, freelancerUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: freelancerCreateOrConnectWithoutMilestonesInput
    upsert?: freelancerUpsertWithoutMilestonesInput
    disconnect?: freelancerWhereInput | boolean
    delete?: freelancerWhereInput | boolean
    connect?: freelancerWhereUniqueInput
    update?: XOR<XOR<freelancerUpdateToOneWithWhereWithoutMilestonesInput, freelancerUpdateWithoutMilestonesInput>, freelancerUncheckedUpdateWithoutMilestonesInput>
  }

  export type jobpostedUpdateOneWithoutMilestonesNestedInput = {
    create?: XOR<jobpostedCreateWithoutMilestonesInput, jobpostedUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: jobpostedCreateOrConnectWithoutMilestonesInput
    upsert?: jobpostedUpsertWithoutMilestonesInput
    disconnect?: jobpostedWhereInput | boolean
    delete?: jobpostedWhereInput | boolean
    connect?: jobpostedWhereUniqueInput
    update?: XOR<XOR<jobpostedUpdateToOneWithWhereWithoutMilestonesInput, jobpostedUpdateWithoutMilestonesInput>, jobpostedUncheckedUpdateWithoutMilestonesInput>
  }

  export type paymentsescrowUpdateManyWithoutMilestonesNestedInput = {
    create?: XOR<paymentsescrowCreateWithoutMilestonesInput, paymentsescrowUncheckedCreateWithoutMilestonesInput> | paymentsescrowCreateWithoutMilestonesInput[] | paymentsescrowUncheckedCreateWithoutMilestonesInput[]
    connectOrCreate?: paymentsescrowCreateOrConnectWithoutMilestonesInput | paymentsescrowCreateOrConnectWithoutMilestonesInput[]
    upsert?: paymentsescrowUpsertWithWhereUniqueWithoutMilestonesInput | paymentsescrowUpsertWithWhereUniqueWithoutMilestonesInput[]
    createMany?: paymentsescrowCreateManyMilestonesInputEnvelope
    set?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
    disconnect?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
    delete?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
    connect?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
    update?: paymentsescrowUpdateWithWhereUniqueWithoutMilestonesInput | paymentsescrowUpdateWithWhereUniqueWithoutMilestonesInput[]
    updateMany?: paymentsescrowUpdateManyWithWhereWithoutMilestonesInput | paymentsescrowUpdateManyWithWhereWithoutMilestonesInput[]
    deleteMany?: paymentsescrowScalarWhereInput | paymentsescrowScalarWhereInput[]
  }

  export type disputesUncheckedUpdateManyWithoutMilestonesNestedInput = {
    create?: XOR<disputesCreateWithoutMilestonesInput, disputesUncheckedCreateWithoutMilestonesInput> | disputesCreateWithoutMilestonesInput[] | disputesUncheckedCreateWithoutMilestonesInput[]
    connectOrCreate?: disputesCreateOrConnectWithoutMilestonesInput | disputesCreateOrConnectWithoutMilestonesInput[]
    upsert?: disputesUpsertWithWhereUniqueWithoutMilestonesInput | disputesUpsertWithWhereUniqueWithoutMilestonesInput[]
    createMany?: disputesCreateManyMilestonesInputEnvelope
    set?: disputesWhereUniqueInput | disputesWhereUniqueInput[]
    disconnect?: disputesWhereUniqueInput | disputesWhereUniqueInput[]
    delete?: disputesWhereUniqueInput | disputesWhereUniqueInput[]
    connect?: disputesWhereUniqueInput | disputesWhereUniqueInput[]
    update?: disputesUpdateWithWhereUniqueWithoutMilestonesInput | disputesUpdateWithWhereUniqueWithoutMilestonesInput[]
    updateMany?: disputesUpdateManyWithWhereWithoutMilestonesInput | disputesUpdateManyWithWhereWithoutMilestonesInput[]
    deleteMany?: disputesScalarWhereInput | disputesScalarWhereInput[]
  }

  export type paymentsescrowUncheckedUpdateManyWithoutMilestonesNestedInput = {
    create?: XOR<paymentsescrowCreateWithoutMilestonesInput, paymentsescrowUncheckedCreateWithoutMilestonesInput> | paymentsescrowCreateWithoutMilestonesInput[] | paymentsescrowUncheckedCreateWithoutMilestonesInput[]
    connectOrCreate?: paymentsescrowCreateOrConnectWithoutMilestonesInput | paymentsescrowCreateOrConnectWithoutMilestonesInput[]
    upsert?: paymentsescrowUpsertWithWhereUniqueWithoutMilestonesInput | paymentsescrowUpsertWithWhereUniqueWithoutMilestonesInput[]
    createMany?: paymentsescrowCreateManyMilestonesInputEnvelope
    set?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
    disconnect?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
    delete?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
    connect?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
    update?: paymentsescrowUpdateWithWhereUniqueWithoutMilestonesInput | paymentsescrowUpdateWithWhereUniqueWithoutMilestonesInput[]
    updateMany?: paymentsescrowUpdateManyWithWhereWithoutMilestonesInput | paymentsescrowUpdateManyWithWhereWithoutMilestonesInput[]
    deleteMany?: paymentsescrowScalarWhereInput | paymentsescrowScalarWhereInput[]
  }

  export type freelancerCreateNestedOneWithoutNftcredentialInput = {
    create?: XOR<freelancerCreateWithoutNftcredentialInput, freelancerUncheckedCreateWithoutNftcredentialInput>
    connectOrCreate?: freelancerCreateOrConnectWithoutNftcredentialInput
    connect?: freelancerWhereUniqueInput
  }

  export type jobpostedCreateNestedOneWithoutNftcredentialInput = {
    create?: XOR<jobpostedCreateWithoutNftcredentialInput, jobpostedUncheckedCreateWithoutNftcredentialInput>
    connectOrCreate?: jobpostedCreateOrConnectWithoutNftcredentialInput
    connect?: jobpostedWhereUniqueInput
  }

  export type freelancerUpdateOneWithoutNftcredentialNestedInput = {
    create?: XOR<freelancerCreateWithoutNftcredentialInput, freelancerUncheckedCreateWithoutNftcredentialInput>
    connectOrCreate?: freelancerCreateOrConnectWithoutNftcredentialInput
    upsert?: freelancerUpsertWithoutNftcredentialInput
    disconnect?: freelancerWhereInput | boolean
    delete?: freelancerWhereInput | boolean
    connect?: freelancerWhereUniqueInput
    update?: XOR<XOR<freelancerUpdateToOneWithWhereWithoutNftcredentialInput, freelancerUpdateWithoutNftcredentialInput>, freelancerUncheckedUpdateWithoutNftcredentialInput>
  }

  export type jobpostedUpdateOneWithoutNftcredentialNestedInput = {
    create?: XOR<jobpostedCreateWithoutNftcredentialInput, jobpostedUncheckedCreateWithoutNftcredentialInput>
    connectOrCreate?: jobpostedCreateOrConnectWithoutNftcredentialInput
    upsert?: jobpostedUpsertWithoutNftcredentialInput
    disconnect?: jobpostedWhereInput | boolean
    delete?: jobpostedWhereInput | boolean
    connect?: jobpostedWhereUniqueInput
    update?: XOR<XOR<jobpostedUpdateToOneWithWhereWithoutNftcredentialInput, jobpostedUpdateWithoutNftcredentialInput>, jobpostedUncheckedUpdateWithoutNftcredentialInput>
  }

  export type smartcontractCreateNestedOneWithoutPaymentsescrowInput = {
    create?: XOR<smartcontractCreateWithoutPaymentsescrowInput, smartcontractUncheckedCreateWithoutPaymentsescrowInput>
    connectOrCreate?: smartcontractCreateOrConnectWithoutPaymentsescrowInput
    connect?: smartcontractWhereUniqueInput
  }

  export type milestonesCreateNestedOneWithoutPaymentsescrowInput = {
    create?: XOR<milestonesCreateWithoutPaymentsescrowInput, milestonesUncheckedCreateWithoutPaymentsescrowInput>
    connectOrCreate?: milestonesCreateOrConnectWithoutPaymentsescrowInput
    connect?: milestonesWhereUniqueInput
  }

  export type freelancerCreateNestedOneWithoutPaymentsescrowInput = {
    create?: XOR<freelancerCreateWithoutPaymentsescrowInput, freelancerUncheckedCreateWithoutPaymentsescrowInput>
    connectOrCreate?: freelancerCreateOrConnectWithoutPaymentsescrowInput
    connect?: freelancerWhereUniqueInput
  }

  export type Enumpayment_typeFieldUpdateOperationsInput = {
    set?: $Enums.payment_type
  }

  export type NullableEnumpayment_statusFieldUpdateOperationsInput = {
    set?: $Enums.payment_status | null
  }

  export type NullableEnumpayment_methodFieldUpdateOperationsInput = {
    set?: $Enums.payment_method | null
  }

  export type smartcontractUpdateOneWithoutPaymentsescrowNestedInput = {
    create?: XOR<smartcontractCreateWithoutPaymentsescrowInput, smartcontractUncheckedCreateWithoutPaymentsescrowInput>
    connectOrCreate?: smartcontractCreateOrConnectWithoutPaymentsescrowInput
    upsert?: smartcontractUpsertWithoutPaymentsescrowInput
    disconnect?: smartcontractWhereInput | boolean
    delete?: smartcontractWhereInput | boolean
    connect?: smartcontractWhereUniqueInput
    update?: XOR<XOR<smartcontractUpdateToOneWithWhereWithoutPaymentsescrowInput, smartcontractUpdateWithoutPaymentsescrowInput>, smartcontractUncheckedUpdateWithoutPaymentsescrowInput>
  }

  export type milestonesUpdateOneWithoutPaymentsescrowNestedInput = {
    create?: XOR<milestonesCreateWithoutPaymentsescrowInput, milestonesUncheckedCreateWithoutPaymentsescrowInput>
    connectOrCreate?: milestonesCreateOrConnectWithoutPaymentsescrowInput
    upsert?: milestonesUpsertWithoutPaymentsescrowInput
    disconnect?: milestonesWhereInput | boolean
    delete?: milestonesWhereInput | boolean
    connect?: milestonesWhereUniqueInput
    update?: XOR<XOR<milestonesUpdateToOneWithWhereWithoutPaymentsescrowInput, milestonesUpdateWithoutPaymentsescrowInput>, milestonesUncheckedUpdateWithoutPaymentsescrowInput>
  }

  export type freelancerUpdateOneWithoutPaymentsescrowNestedInput = {
    create?: XOR<freelancerCreateWithoutPaymentsescrowInput, freelancerUncheckedCreateWithoutPaymentsescrowInput>
    connectOrCreate?: freelancerCreateOrConnectWithoutPaymentsescrowInput
    upsert?: freelancerUpsertWithoutPaymentsescrowInput
    disconnect?: freelancerWhereInput | boolean
    delete?: freelancerWhereInput | boolean
    connect?: freelancerWhereUniqueInput
    update?: XOR<XOR<freelancerUpdateToOneWithWhereWithoutPaymentsescrowInput, freelancerUpdateWithoutPaymentsescrowInput>, freelancerUncheckedUpdateWithoutPaymentsescrowInput>
  }

  export type freelancerCreateNestedOneWithoutProposalsInput = {
    create?: XOR<freelancerCreateWithoutProposalsInput, freelancerUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: freelancerCreateOrConnectWithoutProposalsInput
    connect?: freelancerWhereUniqueInput
  }

  export type jobpostedCreateNestedOneWithoutProposalsInput = {
    create?: XOR<jobpostedCreateWithoutProposalsInput, jobpostedUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: jobpostedCreateOrConnectWithoutProposalsInput
    connect?: jobpostedWhereUniqueInput
  }

  export type NullableEnumproposal_statusFieldUpdateOperationsInput = {
    set?: $Enums.proposal_status | null
  }

  export type freelancerUpdateOneWithoutProposalsNestedInput = {
    create?: XOR<freelancerCreateWithoutProposalsInput, freelancerUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: freelancerCreateOrConnectWithoutProposalsInput
    upsert?: freelancerUpsertWithoutProposalsInput
    disconnect?: freelancerWhereInput | boolean
    delete?: freelancerWhereInput | boolean
    connect?: freelancerWhereUniqueInput
    update?: XOR<XOR<freelancerUpdateToOneWithWhereWithoutProposalsInput, freelancerUpdateWithoutProposalsInput>, freelancerUncheckedUpdateWithoutProposalsInput>
  }

  export type jobpostedUpdateOneWithoutProposalsNestedInput = {
    create?: XOR<jobpostedCreateWithoutProposalsInput, jobpostedUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: jobpostedCreateOrConnectWithoutProposalsInput
    upsert?: jobpostedUpsertWithoutProposalsInput
    disconnect?: jobpostedWhereInput | boolean
    delete?: jobpostedWhereInput | boolean
    connect?: jobpostedWhereUniqueInput
    update?: XOR<XOR<jobpostedUpdateToOneWithWhereWithoutProposalsInput, jobpostedUpdateWithoutProposalsInput>, jobpostedUncheckedUpdateWithoutProposalsInput>
  }

  export type disputesCreateNestedManyWithoutSmartcontractInput = {
    create?: XOR<disputesCreateWithoutSmartcontractInput, disputesUncheckedCreateWithoutSmartcontractInput> | disputesCreateWithoutSmartcontractInput[] | disputesUncheckedCreateWithoutSmartcontractInput[]
    connectOrCreate?: disputesCreateOrConnectWithoutSmartcontractInput | disputesCreateOrConnectWithoutSmartcontractInput[]
    createMany?: disputesCreateManySmartcontractInputEnvelope
    connect?: disputesWhereUniqueInput | disputesWhereUniqueInput[]
  }

  export type paymentsescrowCreateNestedManyWithoutSmartcontractInput = {
    create?: XOR<paymentsescrowCreateWithoutSmartcontractInput, paymentsescrowUncheckedCreateWithoutSmartcontractInput> | paymentsescrowCreateWithoutSmartcontractInput[] | paymentsescrowUncheckedCreateWithoutSmartcontractInput[]
    connectOrCreate?: paymentsescrowCreateOrConnectWithoutSmartcontractInput | paymentsescrowCreateOrConnectWithoutSmartcontractInput[]
    createMany?: paymentsescrowCreateManySmartcontractInputEnvelope
    connect?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
  }

  export type clientCreateNestedOneWithoutSmartcontractInput = {
    create?: XOR<clientCreateWithoutSmartcontractInput, clientUncheckedCreateWithoutSmartcontractInput>
    connectOrCreate?: clientCreateOrConnectWithoutSmartcontractInput
    connect?: clientWhereUniqueInput
  }

  export type freelancerCreateNestedOneWithoutSmartcontractInput = {
    create?: XOR<freelancerCreateWithoutSmartcontractInput, freelancerUncheckedCreateWithoutSmartcontractInput>
    connectOrCreate?: freelancerCreateOrConnectWithoutSmartcontractInput
    connect?: freelancerWhereUniqueInput
  }

  export type jobpostedCreateNestedOneWithoutSmartcontractInput = {
    create?: XOR<jobpostedCreateWithoutSmartcontractInput, jobpostedUncheckedCreateWithoutSmartcontractInput>
    connectOrCreate?: jobpostedCreateOrConnectWithoutSmartcontractInput
    connect?: jobpostedWhereUniqueInput
  }

  export type disputesUncheckedCreateNestedManyWithoutSmartcontractInput = {
    create?: XOR<disputesCreateWithoutSmartcontractInput, disputesUncheckedCreateWithoutSmartcontractInput> | disputesCreateWithoutSmartcontractInput[] | disputesUncheckedCreateWithoutSmartcontractInput[]
    connectOrCreate?: disputesCreateOrConnectWithoutSmartcontractInput | disputesCreateOrConnectWithoutSmartcontractInput[]
    createMany?: disputesCreateManySmartcontractInputEnvelope
    connect?: disputesWhereUniqueInput | disputesWhereUniqueInput[]
  }

  export type paymentsescrowUncheckedCreateNestedManyWithoutSmartcontractInput = {
    create?: XOR<paymentsescrowCreateWithoutSmartcontractInput, paymentsescrowUncheckedCreateWithoutSmartcontractInput> | paymentsescrowCreateWithoutSmartcontractInput[] | paymentsescrowUncheckedCreateWithoutSmartcontractInput[]
    connectOrCreate?: paymentsescrowCreateOrConnectWithoutSmartcontractInput | paymentsescrowCreateOrConnectWithoutSmartcontractInput[]
    createMany?: paymentsescrowCreateManySmartcontractInputEnvelope
    connect?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type disputesUpdateManyWithoutSmartcontractNestedInput = {
    create?: XOR<disputesCreateWithoutSmartcontractInput, disputesUncheckedCreateWithoutSmartcontractInput> | disputesCreateWithoutSmartcontractInput[] | disputesUncheckedCreateWithoutSmartcontractInput[]
    connectOrCreate?: disputesCreateOrConnectWithoutSmartcontractInput | disputesCreateOrConnectWithoutSmartcontractInput[]
    upsert?: disputesUpsertWithWhereUniqueWithoutSmartcontractInput | disputesUpsertWithWhereUniqueWithoutSmartcontractInput[]
    createMany?: disputesCreateManySmartcontractInputEnvelope
    set?: disputesWhereUniqueInput | disputesWhereUniqueInput[]
    disconnect?: disputesWhereUniqueInput | disputesWhereUniqueInput[]
    delete?: disputesWhereUniqueInput | disputesWhereUniqueInput[]
    connect?: disputesWhereUniqueInput | disputesWhereUniqueInput[]
    update?: disputesUpdateWithWhereUniqueWithoutSmartcontractInput | disputesUpdateWithWhereUniqueWithoutSmartcontractInput[]
    updateMany?: disputesUpdateManyWithWhereWithoutSmartcontractInput | disputesUpdateManyWithWhereWithoutSmartcontractInput[]
    deleteMany?: disputesScalarWhereInput | disputesScalarWhereInput[]
  }

  export type paymentsescrowUpdateManyWithoutSmartcontractNestedInput = {
    create?: XOR<paymentsescrowCreateWithoutSmartcontractInput, paymentsescrowUncheckedCreateWithoutSmartcontractInput> | paymentsescrowCreateWithoutSmartcontractInput[] | paymentsescrowUncheckedCreateWithoutSmartcontractInput[]
    connectOrCreate?: paymentsescrowCreateOrConnectWithoutSmartcontractInput | paymentsescrowCreateOrConnectWithoutSmartcontractInput[]
    upsert?: paymentsescrowUpsertWithWhereUniqueWithoutSmartcontractInput | paymentsescrowUpsertWithWhereUniqueWithoutSmartcontractInput[]
    createMany?: paymentsescrowCreateManySmartcontractInputEnvelope
    set?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
    disconnect?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
    delete?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
    connect?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
    update?: paymentsescrowUpdateWithWhereUniqueWithoutSmartcontractInput | paymentsescrowUpdateWithWhereUniqueWithoutSmartcontractInput[]
    updateMany?: paymentsescrowUpdateManyWithWhereWithoutSmartcontractInput | paymentsescrowUpdateManyWithWhereWithoutSmartcontractInput[]
    deleteMany?: paymentsescrowScalarWhereInput | paymentsescrowScalarWhereInput[]
  }

  export type clientUpdateOneWithoutSmartcontractNestedInput = {
    create?: XOR<clientCreateWithoutSmartcontractInput, clientUncheckedCreateWithoutSmartcontractInput>
    connectOrCreate?: clientCreateOrConnectWithoutSmartcontractInput
    upsert?: clientUpsertWithoutSmartcontractInput
    disconnect?: clientWhereInput | boolean
    delete?: clientWhereInput | boolean
    connect?: clientWhereUniqueInput
    update?: XOR<XOR<clientUpdateToOneWithWhereWithoutSmartcontractInput, clientUpdateWithoutSmartcontractInput>, clientUncheckedUpdateWithoutSmartcontractInput>
  }

  export type freelancerUpdateOneWithoutSmartcontractNestedInput = {
    create?: XOR<freelancerCreateWithoutSmartcontractInput, freelancerUncheckedCreateWithoutSmartcontractInput>
    connectOrCreate?: freelancerCreateOrConnectWithoutSmartcontractInput
    upsert?: freelancerUpsertWithoutSmartcontractInput
    disconnect?: freelancerWhereInput | boolean
    delete?: freelancerWhereInput | boolean
    connect?: freelancerWhereUniqueInput
    update?: XOR<XOR<freelancerUpdateToOneWithWhereWithoutSmartcontractInput, freelancerUpdateWithoutSmartcontractInput>, freelancerUncheckedUpdateWithoutSmartcontractInput>
  }

  export type jobpostedUpdateOneWithoutSmartcontractNestedInput = {
    create?: XOR<jobpostedCreateWithoutSmartcontractInput, jobpostedUncheckedCreateWithoutSmartcontractInput>
    connectOrCreate?: jobpostedCreateOrConnectWithoutSmartcontractInput
    upsert?: jobpostedUpsertWithoutSmartcontractInput
    disconnect?: jobpostedWhereInput | boolean
    delete?: jobpostedWhereInput | boolean
    connect?: jobpostedWhereUniqueInput
    update?: XOR<XOR<jobpostedUpdateToOneWithWhereWithoutSmartcontractInput, jobpostedUpdateWithoutSmartcontractInput>, jobpostedUncheckedUpdateWithoutSmartcontractInput>
  }

  export type disputesUncheckedUpdateManyWithoutSmartcontractNestedInput = {
    create?: XOR<disputesCreateWithoutSmartcontractInput, disputesUncheckedCreateWithoutSmartcontractInput> | disputesCreateWithoutSmartcontractInput[] | disputesUncheckedCreateWithoutSmartcontractInput[]
    connectOrCreate?: disputesCreateOrConnectWithoutSmartcontractInput | disputesCreateOrConnectWithoutSmartcontractInput[]
    upsert?: disputesUpsertWithWhereUniqueWithoutSmartcontractInput | disputesUpsertWithWhereUniqueWithoutSmartcontractInput[]
    createMany?: disputesCreateManySmartcontractInputEnvelope
    set?: disputesWhereUniqueInput | disputesWhereUniqueInput[]
    disconnect?: disputesWhereUniqueInput | disputesWhereUniqueInput[]
    delete?: disputesWhereUniqueInput | disputesWhereUniqueInput[]
    connect?: disputesWhereUniqueInput | disputesWhereUniqueInput[]
    update?: disputesUpdateWithWhereUniqueWithoutSmartcontractInput | disputesUpdateWithWhereUniqueWithoutSmartcontractInput[]
    updateMany?: disputesUpdateManyWithWhereWithoutSmartcontractInput | disputesUpdateManyWithWhereWithoutSmartcontractInput[]
    deleteMany?: disputesScalarWhereInput | disputesScalarWhereInput[]
  }

  export type paymentsescrowUncheckedUpdateManyWithoutSmartcontractNestedInput = {
    create?: XOR<paymentsescrowCreateWithoutSmartcontractInput, paymentsescrowUncheckedCreateWithoutSmartcontractInput> | paymentsescrowCreateWithoutSmartcontractInput[] | paymentsescrowUncheckedCreateWithoutSmartcontractInput[]
    connectOrCreate?: paymentsescrowCreateOrConnectWithoutSmartcontractInput | paymentsescrowCreateOrConnectWithoutSmartcontractInput[]
    upsert?: paymentsescrowUpsertWithWhereUniqueWithoutSmartcontractInput | paymentsescrowUpsertWithWhereUniqueWithoutSmartcontractInput[]
    createMany?: paymentsescrowCreateManySmartcontractInputEnvelope
    set?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
    disconnect?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
    delete?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
    connect?: paymentsescrowWhereUniqueInput | paymentsescrowWhereUniqueInput[]
    update?: paymentsescrowUpdateWithWhereUniqueWithoutSmartcontractInput | paymentsescrowUpdateWithWhereUniqueWithoutSmartcontractInput[]
    updateMany?: paymentsescrowUpdateManyWithWhereWithoutSmartcontractInput | paymentsescrowUpdateManyWithWhereWithoutSmartcontractInput[]
    deleteMany?: paymentsescrowScalarWhereInput | paymentsescrowScalarWhereInput[]
  }

  export type NullableEnumstake_purposeFieldUpdateOperationsInput = {
    set?: $Enums.stake_purpose | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedEnumdispute_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.dispute_status | Enumdispute_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.dispute_status[] | ListEnumdispute_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.dispute_status[] | ListEnumdispute_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumdispute_statusNullableFilter<$PrismaModel> | $Enums.dispute_status | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumdispute_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.dispute_status | Enumdispute_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.dispute_status[] | ListEnumdispute_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.dispute_status[] | ListEnumdispute_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumdispute_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.dispute_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumdispute_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumdispute_statusNullableFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnummessage_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.message_type | Enummessage_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.message_type[] | ListEnummessage_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.message_type[] | ListEnummessage_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnummessage_typeNullableFilter<$PrismaModel> | $Enums.message_type | null
  }

  export type NestedEnummessage_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.message_type | Enummessage_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.message_type[] | ListEnummessage_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.message_type[] | ListEnummessage_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnummessage_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.message_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnummessage_typeNullableFilter<$PrismaModel>
    _max?: NestedEnummessage_typeNullableFilter<$PrismaModel>
  }

  export type NestedEnummilestone_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.milestone_status | Enummilestone_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.milestone_status[] | ListEnummilestone_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.milestone_status[] | ListEnummilestone_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnummilestone_statusNullableFilter<$PrismaModel> | $Enums.milestone_status | null
  }

  export type NestedEnummilestone_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.milestone_status | Enummilestone_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.milestone_status[] | ListEnummilestone_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.milestone_status[] | ListEnummilestone_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnummilestone_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.milestone_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnummilestone_statusNullableFilter<$PrismaModel>
    _max?: NestedEnummilestone_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnumpayment_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_type | Enumpayment_typeFieldRefInput<$PrismaModel>
    in?: $Enums.payment_type[] | ListEnumpayment_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_type[] | ListEnumpayment_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_typeFilter<$PrismaModel> | $Enums.payment_type
  }

  export type NestedEnumpayment_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpayment_statusNullableFilter<$PrismaModel> | $Enums.payment_status | null
  }

  export type NestedEnumpayment_methodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpayment_methodNullableFilter<$PrismaModel> | $Enums.payment_method | null
  }

  export type NestedEnumpayment_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_type | Enumpayment_typeFieldRefInput<$PrismaModel>
    in?: $Enums.payment_type[] | ListEnumpayment_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_type[] | ListEnumpayment_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_typeWithAggregatesFilter<$PrismaModel> | $Enums.payment_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_typeFilter<$PrismaModel>
    _max?: NestedEnumpayment_typeFilter<$PrismaModel>
  }

  export type NestedEnumpayment_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpayment_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.payment_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpayment_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumpayment_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnumpayment_methodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpayment_methodNullableWithAggregatesFilter<$PrismaModel> | $Enums.payment_method | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpayment_methodNullableFilter<$PrismaModel>
    _max?: NestedEnumpayment_methodNullableFilter<$PrismaModel>
  }

  export type NestedEnumproposal_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.proposal_status | Enumproposal_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.proposal_status[] | ListEnumproposal_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.proposal_status[] | ListEnumproposal_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumproposal_statusNullableFilter<$PrismaModel> | $Enums.proposal_status | null
  }

  export type NestedEnumproposal_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.proposal_status | Enumproposal_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.proposal_status[] | ListEnumproposal_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.proposal_status[] | ListEnumproposal_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumproposal_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.proposal_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumproposal_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumproposal_statusNullableFilter<$PrismaModel>
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

  export type NestedEnumstake_purposeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.stake_purpose | Enumstake_purposeFieldRefInput<$PrismaModel> | null
    in?: $Enums.stake_purpose[] | ListEnumstake_purposeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.stake_purpose[] | ListEnumstake_purposeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstake_purposeNullableFilter<$PrismaModel> | $Enums.stake_purpose | null
  }

  export type NestedEnumstake_purposeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.stake_purpose | Enumstake_purposeFieldRefInput<$PrismaModel> | null
    in?: $Enums.stake_purpose[] | ListEnumstake_purposeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.stake_purpose[] | ListEnumstake_purposeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstake_purposeNullableWithAggregatesFilter<$PrismaModel> | $Enums.stake_purpose | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumstake_purposeNullableFilter<$PrismaModel>
    _max?: NestedEnumstake_purposeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type jobpostedCreateWithoutClientInput = {
    name: string
    description: string
    tags?: jobpostedCreatetagsInput | string[]
    location?: string | null
    joblevel?: string | null
    budget?: number | null
    contracttohire?: boolean | null
    qualificationspreferred?: string | null
    postingtime?: Date | string | null
    postingdate?: Date | string | null
    validtill?: Date | string | null
    companyname?: string | null
    customizable?: boolean | null
    photourls?: jobpostedCreatephotourlsInput | string[]
    message?: messageCreateNestedManyWithoutJobpostedInput
    milestones?: milestonesCreateNestedManyWithoutJobpostedInput
    nftcredential?: nftcredentialCreateNestedManyWithoutJobpostedInput
    proposals?: proposalsCreateNestedManyWithoutJobpostedInput
    smartcontract?: smartcontractCreateNestedManyWithoutJobpostedInput
  }

  export type jobpostedUncheckedCreateWithoutClientInput = {
    id?: number
    name: string
    description: string
    tags?: jobpostedCreatetagsInput | string[]
    location?: string | null
    joblevel?: string | null
    budget?: number | null
    contracttohire?: boolean | null
    qualificationspreferred?: string | null
    postingtime?: Date | string | null
    postingdate?: Date | string | null
    validtill?: Date | string | null
    companyname?: string | null
    customizable?: boolean | null
    photourls?: jobpostedCreatephotourlsInput | string[]
    message?: messageUncheckedCreateNestedManyWithoutJobpostedInput
    milestones?: milestonesUncheckedCreateNestedManyWithoutJobpostedInput
    nftcredential?: nftcredentialUncheckedCreateNestedManyWithoutJobpostedInput
    proposals?: proposalsUncheckedCreateNestedManyWithoutJobpostedInput
    smartcontract?: smartcontractUncheckedCreateNestedManyWithoutJobpostedInput
  }

  export type jobpostedCreateOrConnectWithoutClientInput = {
    where: jobpostedWhereUniqueInput
    create: XOR<jobpostedCreateWithoutClientInput, jobpostedUncheckedCreateWithoutClientInput>
  }

  export type jobpostedCreateManyClientInputEnvelope = {
    data: jobpostedCreateManyClientInput | jobpostedCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type smartcontractCreateWithoutClientInput = {
    startdate: Date | string
    enddate?: Date | string | null
    escrowamount: number
    smartcontractaddress?: string | null
    isactive?: boolean | null
    iscompleted?: boolean | null
    isdisputed?: boolean | null
    platformfee?: number | null
    paymentmethod?: string | null
    terminationreason?: string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
    disputes?: disputesCreateNestedManyWithoutSmartcontractInput
    paymentsescrow?: paymentsescrowCreateNestedManyWithoutSmartcontractInput
    freelancer?: freelancerCreateNestedOneWithoutSmartcontractInput
    jobposted?: jobpostedCreateNestedOneWithoutSmartcontractInput
  }

  export type smartcontractUncheckedCreateWithoutClientInput = {
    id?: number
    jobid?: number | null
    freelancerid?: number | null
    startdate: Date | string
    enddate?: Date | string | null
    escrowamount: number
    smartcontractaddress?: string | null
    isactive?: boolean | null
    iscompleted?: boolean | null
    isdisputed?: boolean | null
    platformfee?: number | null
    paymentmethod?: string | null
    terminationreason?: string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
    disputes?: disputesUncheckedCreateNestedManyWithoutSmartcontractInput
    paymentsescrow?: paymentsescrowUncheckedCreateNestedManyWithoutSmartcontractInput
  }

  export type smartcontractCreateOrConnectWithoutClientInput = {
    where: smartcontractWhereUniqueInput
    create: XOR<smartcontractCreateWithoutClientInput, smartcontractUncheckedCreateWithoutClientInput>
  }

  export type smartcontractCreateManyClientInputEnvelope = {
    data: smartcontractCreateManyClientInput | smartcontractCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type jobpostedUpsertWithWhereUniqueWithoutClientInput = {
    where: jobpostedWhereUniqueInput
    update: XOR<jobpostedUpdateWithoutClientInput, jobpostedUncheckedUpdateWithoutClientInput>
    create: XOR<jobpostedCreateWithoutClientInput, jobpostedUncheckedCreateWithoutClientInput>
  }

  export type jobpostedUpdateWithWhereUniqueWithoutClientInput = {
    where: jobpostedWhereUniqueInput
    data: XOR<jobpostedUpdateWithoutClientInput, jobpostedUncheckedUpdateWithoutClientInput>
  }

  export type jobpostedUpdateManyWithWhereWithoutClientInput = {
    where: jobpostedScalarWhereInput
    data: XOR<jobpostedUpdateManyMutationInput, jobpostedUncheckedUpdateManyWithoutClientInput>
  }

  export type jobpostedScalarWhereInput = {
    AND?: jobpostedScalarWhereInput | jobpostedScalarWhereInput[]
    OR?: jobpostedScalarWhereInput[]
    NOT?: jobpostedScalarWhereInput | jobpostedScalarWhereInput[]
    id?: IntFilter<"jobposted"> | number
    clientid?: IntNullableFilter<"jobposted"> | number | null
    name?: StringFilter<"jobposted"> | string
    description?: StringFilter<"jobposted"> | string
    tags?: StringNullableListFilter<"jobposted">
    location?: StringNullableFilter<"jobposted"> | string | null
    joblevel?: StringNullableFilter<"jobposted"> | string | null
    budget?: IntNullableFilter<"jobposted"> | number | null
    contracttohire?: BoolNullableFilter<"jobposted"> | boolean | null
    qualificationspreferred?: StringNullableFilter<"jobposted"> | string | null
    postingtime?: DateTimeNullableFilter<"jobposted"> | Date | string | null
    postingdate?: DateTimeNullableFilter<"jobposted"> | Date | string | null
    validtill?: DateTimeNullableFilter<"jobposted"> | Date | string | null
    companyname?: StringNullableFilter<"jobposted"> | string | null
    customizable?: BoolNullableFilter<"jobposted"> | boolean | null
    photourls?: StringNullableListFilter<"jobposted">
  }

  export type smartcontractUpsertWithWhereUniqueWithoutClientInput = {
    where: smartcontractWhereUniqueInput
    update: XOR<smartcontractUpdateWithoutClientInput, smartcontractUncheckedUpdateWithoutClientInput>
    create: XOR<smartcontractCreateWithoutClientInput, smartcontractUncheckedCreateWithoutClientInput>
  }

  export type smartcontractUpdateWithWhereUniqueWithoutClientInput = {
    where: smartcontractWhereUniqueInput
    data: XOR<smartcontractUpdateWithoutClientInput, smartcontractUncheckedUpdateWithoutClientInput>
  }

  export type smartcontractUpdateManyWithWhereWithoutClientInput = {
    where: smartcontractScalarWhereInput
    data: XOR<smartcontractUpdateManyMutationInput, smartcontractUncheckedUpdateManyWithoutClientInput>
  }

  export type smartcontractScalarWhereInput = {
    AND?: smartcontractScalarWhereInput | smartcontractScalarWhereInput[]
    OR?: smartcontractScalarWhereInput[]
    NOT?: smartcontractScalarWhereInput | smartcontractScalarWhereInput[]
    id?: IntFilter<"smartcontract"> | number
    jobid?: IntNullableFilter<"smartcontract"> | number | null
    freelancerid?: IntNullableFilter<"smartcontract"> | number | null
    clientid?: IntNullableFilter<"smartcontract"> | number | null
    startdate?: DateTimeFilter<"smartcontract"> | Date | string
    enddate?: DateTimeNullableFilter<"smartcontract"> | Date | string | null
    escrowamount?: IntFilter<"smartcontract"> | number
    smartcontractaddress?: StringNullableFilter<"smartcontract"> | string | null
    isactive?: BoolNullableFilter<"smartcontract"> | boolean | null
    iscompleted?: BoolNullableFilter<"smartcontract"> | boolean | null
    isdisputed?: BoolNullableFilter<"smartcontract"> | boolean | null
    platformfee?: IntNullableFilter<"smartcontract"> | number | null
    paymentmethod?: StringNullableFilter<"smartcontract"> | string | null
    terminationreason?: StringNullableFilter<"smartcontract"> | string | null
    createdat?: DateTimeNullableFilter<"smartcontract"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"smartcontract"> | Date | string | null
  }

  export type smartcontractCreateWithoutDisputesInput = {
    startdate: Date | string
    enddate?: Date | string | null
    escrowamount: number
    smartcontractaddress?: string | null
    isactive?: boolean | null
    iscompleted?: boolean | null
    isdisputed?: boolean | null
    platformfee?: number | null
    paymentmethod?: string | null
    terminationreason?: string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
    paymentsescrow?: paymentsescrowCreateNestedManyWithoutSmartcontractInput
    client?: clientCreateNestedOneWithoutSmartcontractInput
    freelancer?: freelancerCreateNestedOneWithoutSmartcontractInput
    jobposted?: jobpostedCreateNestedOneWithoutSmartcontractInput
  }

  export type smartcontractUncheckedCreateWithoutDisputesInput = {
    id?: number
    jobid?: number | null
    freelancerid?: number | null
    clientid?: number | null
    startdate: Date | string
    enddate?: Date | string | null
    escrowamount: number
    smartcontractaddress?: string | null
    isactive?: boolean | null
    iscompleted?: boolean | null
    isdisputed?: boolean | null
    platformfee?: number | null
    paymentmethod?: string | null
    terminationreason?: string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
    paymentsescrow?: paymentsescrowUncheckedCreateNestedManyWithoutSmartcontractInput
  }

  export type smartcontractCreateOrConnectWithoutDisputesInput = {
    where: smartcontractWhereUniqueInput
    create: XOR<smartcontractCreateWithoutDisputesInput, smartcontractUncheckedCreateWithoutDisputesInput>
  }

  export type milestonesCreateWithoutDisputesInput = {
    title: string
    description?: string | null
    duedate?: Date | string | null
    amount: number
    status?: $Enums.milestone_status | null
    freelancer?: freelancerCreateNestedOneWithoutMilestonesInput
    jobposted?: jobpostedCreateNestedOneWithoutMilestonesInput
    paymentsescrow?: paymentsescrowCreateNestedManyWithoutMilestonesInput
  }

  export type milestonesUncheckedCreateWithoutDisputesInput = {
    id?: number
    jobid?: number | null
    freelancerid?: number | null
    title: string
    description?: string | null
    duedate?: Date | string | null
    amount: number
    status?: $Enums.milestone_status | null
    paymentsescrow?: paymentsescrowUncheckedCreateNestedManyWithoutMilestonesInput
  }

  export type milestonesCreateOrConnectWithoutDisputesInput = {
    where: milestonesWhereUniqueInput
    create: XOR<milestonesCreateWithoutDisputesInput, milestonesUncheckedCreateWithoutDisputesInput>
  }

  export type smartcontractUpsertWithoutDisputesInput = {
    update: XOR<smartcontractUpdateWithoutDisputesInput, smartcontractUncheckedUpdateWithoutDisputesInput>
    create: XOR<smartcontractCreateWithoutDisputesInput, smartcontractUncheckedCreateWithoutDisputesInput>
    where?: smartcontractWhereInput
  }

  export type smartcontractUpdateToOneWithWhereWithoutDisputesInput = {
    where?: smartcontractWhereInput
    data: XOR<smartcontractUpdateWithoutDisputesInput, smartcontractUncheckedUpdateWithoutDisputesInput>
  }

  export type smartcontractUpdateWithoutDisputesInput = {
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escrowamount?: IntFieldUpdateOperationsInput | number
    smartcontractaddress?: NullableStringFieldUpdateOperationsInput | string | null
    isactive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    iscompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isdisputed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    platformfee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentmethod?: NullableStringFieldUpdateOperationsInput | string | null
    terminationreason?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentsescrow?: paymentsescrowUpdateManyWithoutSmartcontractNestedInput
    client?: clientUpdateOneWithoutSmartcontractNestedInput
    freelancer?: freelancerUpdateOneWithoutSmartcontractNestedInput
    jobposted?: jobpostedUpdateOneWithoutSmartcontractNestedInput
  }

  export type smartcontractUncheckedUpdateWithoutDisputesInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobid?: NullableIntFieldUpdateOperationsInput | number | null
    freelancerid?: NullableIntFieldUpdateOperationsInput | number | null
    clientid?: NullableIntFieldUpdateOperationsInput | number | null
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escrowamount?: IntFieldUpdateOperationsInput | number
    smartcontractaddress?: NullableStringFieldUpdateOperationsInput | string | null
    isactive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    iscompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isdisputed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    platformfee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentmethod?: NullableStringFieldUpdateOperationsInput | string | null
    terminationreason?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentsescrow?: paymentsescrowUncheckedUpdateManyWithoutSmartcontractNestedInput
  }

  export type milestonesUpsertWithoutDisputesInput = {
    update: XOR<milestonesUpdateWithoutDisputesInput, milestonesUncheckedUpdateWithoutDisputesInput>
    create: XOR<milestonesCreateWithoutDisputesInput, milestonesUncheckedCreateWithoutDisputesInput>
    where?: milestonesWhereInput
  }

  export type milestonesUpdateToOneWithWhereWithoutDisputesInput = {
    where?: milestonesWhereInput
    data: XOR<milestonesUpdateWithoutDisputesInput, milestonesUncheckedUpdateWithoutDisputesInput>
  }

  export type milestonesUpdateWithoutDisputesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duedate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: NullableEnummilestone_statusFieldUpdateOperationsInput | $Enums.milestone_status | null
    freelancer?: freelancerUpdateOneWithoutMilestonesNestedInput
    jobposted?: jobpostedUpdateOneWithoutMilestonesNestedInput
    paymentsescrow?: paymentsescrowUpdateManyWithoutMilestonesNestedInput
  }

  export type milestonesUncheckedUpdateWithoutDisputesInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobid?: NullableIntFieldUpdateOperationsInput | number | null
    freelancerid?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duedate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: NullableEnummilestone_statusFieldUpdateOperationsInput | $Enums.milestone_status | null
    paymentsescrow?: paymentsescrowUncheckedUpdateManyWithoutMilestonesNestedInput
  }

  export type milestonesCreateWithoutFreelancerInput = {
    title: string
    description?: string | null
    duedate?: Date | string | null
    amount: number
    status?: $Enums.milestone_status | null
    disputes?: disputesCreateNestedManyWithoutMilestonesInput
    jobposted?: jobpostedCreateNestedOneWithoutMilestonesInput
    paymentsescrow?: paymentsescrowCreateNestedManyWithoutMilestonesInput
  }

  export type milestonesUncheckedCreateWithoutFreelancerInput = {
    id?: number
    jobid?: number | null
    title: string
    description?: string | null
    duedate?: Date | string | null
    amount: number
    status?: $Enums.milestone_status | null
    disputes?: disputesUncheckedCreateNestedManyWithoutMilestonesInput
    paymentsescrow?: paymentsescrowUncheckedCreateNestedManyWithoutMilestonesInput
  }

  export type milestonesCreateOrConnectWithoutFreelancerInput = {
    where: milestonesWhereUniqueInput
    create: XOR<milestonesCreateWithoutFreelancerInput, milestonesUncheckedCreateWithoutFreelancerInput>
  }

  export type milestonesCreateManyFreelancerInputEnvelope = {
    data: milestonesCreateManyFreelancerInput | milestonesCreateManyFreelancerInput[]
    skipDuplicates?: boolean
  }

  export type nftcredentialCreateWithoutFreelancerInput = {
    tokenid?: number | null
    rating?: number | null
    testimonial?: string | null
    isminted?: boolean | null
    txhash?: string | null
    createdat?: Date | string | null
    jobposted?: jobpostedCreateNestedOneWithoutNftcredentialInput
  }

  export type nftcredentialUncheckedCreateWithoutFreelancerInput = {
    id?: number
    jobid?: number | null
    tokenid?: number | null
    rating?: number | null
    testimonial?: string | null
    isminted?: boolean | null
    txhash?: string | null
    createdat?: Date | string | null
  }

  export type nftcredentialCreateOrConnectWithoutFreelancerInput = {
    where: nftcredentialWhereUniqueInput
    create: XOR<nftcredentialCreateWithoutFreelancerInput, nftcredentialUncheckedCreateWithoutFreelancerInput>
  }

  export type nftcredentialCreateManyFreelancerInputEnvelope = {
    data: nftcredentialCreateManyFreelancerInput | nftcredentialCreateManyFreelancerInput[]
    skipDuplicates?: boolean
  }

  export type paymentsescrowCreateWithoutFreelancerInput = {
    type: $Enums.payment_type
    status?: $Enums.payment_status | null
    paymentmethod?: $Enums.payment_method | null
    txhash?: string | null
    amount: number
    initiatedby?: number | null
    notes?: string | null
    timestamp?: Date | string | null
    confirmedat?: Date | string | null
    smartcontract?: smartcontractCreateNestedOneWithoutPaymentsescrowInput
    milestones?: milestonesCreateNestedOneWithoutPaymentsescrowInput
  }

  export type paymentsescrowUncheckedCreateWithoutFreelancerInput = {
    id?: number
    contractid?: number | null
    milestoneid?: number | null
    type: $Enums.payment_type
    status?: $Enums.payment_status | null
    paymentmethod?: $Enums.payment_method | null
    txhash?: string | null
    amount: number
    initiatedby?: number | null
    notes?: string | null
    timestamp?: Date | string | null
    confirmedat?: Date | string | null
  }

  export type paymentsescrowCreateOrConnectWithoutFreelancerInput = {
    where: paymentsescrowWhereUniqueInput
    create: XOR<paymentsescrowCreateWithoutFreelancerInput, paymentsescrowUncheckedCreateWithoutFreelancerInput>
  }

  export type paymentsescrowCreateManyFreelancerInputEnvelope = {
    data: paymentsescrowCreateManyFreelancerInput | paymentsescrowCreateManyFreelancerInput[]
    skipDuplicates?: boolean
  }

  export type proposalsCreateWithoutFreelancerInput = {
    coverletter?: string | null
    budgetquoted?: number | null
    proposedtimeline?: string | null
    status?: $Enums.proposal_status | null
    submittedat?: Date | string | null
    jobposted?: jobpostedCreateNestedOneWithoutProposalsInput
  }

  export type proposalsUncheckedCreateWithoutFreelancerInput = {
    id?: number
    jobid?: number | null
    coverletter?: string | null
    budgetquoted?: number | null
    proposedtimeline?: string | null
    status?: $Enums.proposal_status | null
    submittedat?: Date | string | null
  }

  export type proposalsCreateOrConnectWithoutFreelancerInput = {
    where: proposalsWhereUniqueInput
    create: XOR<proposalsCreateWithoutFreelancerInput, proposalsUncheckedCreateWithoutFreelancerInput>
  }

  export type proposalsCreateManyFreelancerInputEnvelope = {
    data: proposalsCreateManyFreelancerInput | proposalsCreateManyFreelancerInput[]
    skipDuplicates?: boolean
  }

  export type smartcontractCreateWithoutFreelancerInput = {
    startdate: Date | string
    enddate?: Date | string | null
    escrowamount: number
    smartcontractaddress?: string | null
    isactive?: boolean | null
    iscompleted?: boolean | null
    isdisputed?: boolean | null
    platformfee?: number | null
    paymentmethod?: string | null
    terminationreason?: string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
    disputes?: disputesCreateNestedManyWithoutSmartcontractInput
    paymentsescrow?: paymentsescrowCreateNestedManyWithoutSmartcontractInput
    client?: clientCreateNestedOneWithoutSmartcontractInput
    jobposted?: jobpostedCreateNestedOneWithoutSmartcontractInput
  }

  export type smartcontractUncheckedCreateWithoutFreelancerInput = {
    id?: number
    jobid?: number | null
    clientid?: number | null
    startdate: Date | string
    enddate?: Date | string | null
    escrowamount: number
    smartcontractaddress?: string | null
    isactive?: boolean | null
    iscompleted?: boolean | null
    isdisputed?: boolean | null
    platformfee?: number | null
    paymentmethod?: string | null
    terminationreason?: string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
    disputes?: disputesUncheckedCreateNestedManyWithoutSmartcontractInput
    paymentsescrow?: paymentsescrowUncheckedCreateNestedManyWithoutSmartcontractInput
  }

  export type smartcontractCreateOrConnectWithoutFreelancerInput = {
    where: smartcontractWhereUniqueInput
    create: XOR<smartcontractCreateWithoutFreelancerInput, smartcontractUncheckedCreateWithoutFreelancerInput>
  }

  export type smartcontractCreateManyFreelancerInputEnvelope = {
    data: smartcontractCreateManyFreelancerInput | smartcontractCreateManyFreelancerInput[]
    skipDuplicates?: boolean
  }

  export type milestonesUpsertWithWhereUniqueWithoutFreelancerInput = {
    where: milestonesWhereUniqueInput
    update: XOR<milestonesUpdateWithoutFreelancerInput, milestonesUncheckedUpdateWithoutFreelancerInput>
    create: XOR<milestonesCreateWithoutFreelancerInput, milestonesUncheckedCreateWithoutFreelancerInput>
  }

  export type milestonesUpdateWithWhereUniqueWithoutFreelancerInput = {
    where: milestonesWhereUniqueInput
    data: XOR<milestonesUpdateWithoutFreelancerInput, milestonesUncheckedUpdateWithoutFreelancerInput>
  }

  export type milestonesUpdateManyWithWhereWithoutFreelancerInput = {
    where: milestonesScalarWhereInput
    data: XOR<milestonesUpdateManyMutationInput, milestonesUncheckedUpdateManyWithoutFreelancerInput>
  }

  export type milestonesScalarWhereInput = {
    AND?: milestonesScalarWhereInput | milestonesScalarWhereInput[]
    OR?: milestonesScalarWhereInput[]
    NOT?: milestonesScalarWhereInput | milestonesScalarWhereInput[]
    id?: IntFilter<"milestones"> | number
    jobid?: IntNullableFilter<"milestones"> | number | null
    freelancerid?: IntNullableFilter<"milestones"> | number | null
    title?: StringFilter<"milestones"> | string
    description?: StringNullableFilter<"milestones"> | string | null
    duedate?: DateTimeNullableFilter<"milestones"> | Date | string | null
    amount?: IntFilter<"milestones"> | number
    status?: Enummilestone_statusNullableFilter<"milestones"> | $Enums.milestone_status | null
  }

  export type nftcredentialUpsertWithWhereUniqueWithoutFreelancerInput = {
    where: nftcredentialWhereUniqueInput
    update: XOR<nftcredentialUpdateWithoutFreelancerInput, nftcredentialUncheckedUpdateWithoutFreelancerInput>
    create: XOR<nftcredentialCreateWithoutFreelancerInput, nftcredentialUncheckedCreateWithoutFreelancerInput>
  }

  export type nftcredentialUpdateWithWhereUniqueWithoutFreelancerInput = {
    where: nftcredentialWhereUniqueInput
    data: XOR<nftcredentialUpdateWithoutFreelancerInput, nftcredentialUncheckedUpdateWithoutFreelancerInput>
  }

  export type nftcredentialUpdateManyWithWhereWithoutFreelancerInput = {
    where: nftcredentialScalarWhereInput
    data: XOR<nftcredentialUpdateManyMutationInput, nftcredentialUncheckedUpdateManyWithoutFreelancerInput>
  }

  export type nftcredentialScalarWhereInput = {
    AND?: nftcredentialScalarWhereInput | nftcredentialScalarWhereInput[]
    OR?: nftcredentialScalarWhereInput[]
    NOT?: nftcredentialScalarWhereInput | nftcredentialScalarWhereInput[]
    id?: IntFilter<"nftcredential"> | number
    freelancerid?: IntNullableFilter<"nftcredential"> | number | null
    jobid?: IntNullableFilter<"nftcredential"> | number | null
    tokenid?: IntNullableFilter<"nftcredential"> | number | null
    rating?: IntNullableFilter<"nftcredential"> | number | null
    testimonial?: StringNullableFilter<"nftcredential"> | string | null
    isminted?: BoolNullableFilter<"nftcredential"> | boolean | null
    txhash?: StringNullableFilter<"nftcredential"> | string | null
    createdat?: DateTimeNullableFilter<"nftcredential"> | Date | string | null
  }

  export type paymentsescrowUpsertWithWhereUniqueWithoutFreelancerInput = {
    where: paymentsescrowWhereUniqueInput
    update: XOR<paymentsescrowUpdateWithoutFreelancerInput, paymentsescrowUncheckedUpdateWithoutFreelancerInput>
    create: XOR<paymentsescrowCreateWithoutFreelancerInput, paymentsescrowUncheckedCreateWithoutFreelancerInput>
  }

  export type paymentsescrowUpdateWithWhereUniqueWithoutFreelancerInput = {
    where: paymentsescrowWhereUniqueInput
    data: XOR<paymentsescrowUpdateWithoutFreelancerInput, paymentsescrowUncheckedUpdateWithoutFreelancerInput>
  }

  export type paymentsescrowUpdateManyWithWhereWithoutFreelancerInput = {
    where: paymentsescrowScalarWhereInput
    data: XOR<paymentsescrowUpdateManyMutationInput, paymentsescrowUncheckedUpdateManyWithoutFreelancerInput>
  }

  export type paymentsescrowScalarWhereInput = {
    AND?: paymentsescrowScalarWhereInput | paymentsescrowScalarWhereInput[]
    OR?: paymentsescrowScalarWhereInput[]
    NOT?: paymentsescrowScalarWhereInput | paymentsescrowScalarWhereInput[]
    id?: IntFilter<"paymentsescrow"> | number
    contractid?: IntNullableFilter<"paymentsescrow"> | number | null
    milestoneid?: IntNullableFilter<"paymentsescrow"> | number | null
    type?: Enumpayment_typeFilter<"paymentsescrow"> | $Enums.payment_type
    status?: Enumpayment_statusNullableFilter<"paymentsescrow"> | $Enums.payment_status | null
    paymentmethod?: Enumpayment_methodNullableFilter<"paymentsescrow"> | $Enums.payment_method | null
    txhash?: StringNullableFilter<"paymentsescrow"> | string | null
    amount?: IntFilter<"paymentsescrow"> | number
    initiatedby?: IntNullableFilter<"paymentsescrow"> | number | null
    receiverid?: IntNullableFilter<"paymentsescrow"> | number | null
    notes?: StringNullableFilter<"paymentsescrow"> | string | null
    timestamp?: DateTimeNullableFilter<"paymentsescrow"> | Date | string | null
    confirmedat?: DateTimeNullableFilter<"paymentsescrow"> | Date | string | null
  }

  export type proposalsUpsertWithWhereUniqueWithoutFreelancerInput = {
    where: proposalsWhereUniqueInput
    update: XOR<proposalsUpdateWithoutFreelancerInput, proposalsUncheckedUpdateWithoutFreelancerInput>
    create: XOR<proposalsCreateWithoutFreelancerInput, proposalsUncheckedCreateWithoutFreelancerInput>
  }

  export type proposalsUpdateWithWhereUniqueWithoutFreelancerInput = {
    where: proposalsWhereUniqueInput
    data: XOR<proposalsUpdateWithoutFreelancerInput, proposalsUncheckedUpdateWithoutFreelancerInput>
  }

  export type proposalsUpdateManyWithWhereWithoutFreelancerInput = {
    where: proposalsScalarWhereInput
    data: XOR<proposalsUpdateManyMutationInput, proposalsUncheckedUpdateManyWithoutFreelancerInput>
  }

  export type proposalsScalarWhereInput = {
    AND?: proposalsScalarWhereInput | proposalsScalarWhereInput[]
    OR?: proposalsScalarWhereInput[]
    NOT?: proposalsScalarWhereInput | proposalsScalarWhereInput[]
    id?: IntFilter<"proposals"> | number
    jobid?: IntNullableFilter<"proposals"> | number | null
    freelancerid?: IntNullableFilter<"proposals"> | number | null
    coverletter?: StringNullableFilter<"proposals"> | string | null
    budgetquoted?: IntNullableFilter<"proposals"> | number | null
    proposedtimeline?: StringNullableFilter<"proposals"> | string | null
    status?: Enumproposal_statusNullableFilter<"proposals"> | $Enums.proposal_status | null
    submittedat?: DateTimeNullableFilter<"proposals"> | Date | string | null
  }

  export type smartcontractUpsertWithWhereUniqueWithoutFreelancerInput = {
    where: smartcontractWhereUniqueInput
    update: XOR<smartcontractUpdateWithoutFreelancerInput, smartcontractUncheckedUpdateWithoutFreelancerInput>
    create: XOR<smartcontractCreateWithoutFreelancerInput, smartcontractUncheckedCreateWithoutFreelancerInput>
  }

  export type smartcontractUpdateWithWhereUniqueWithoutFreelancerInput = {
    where: smartcontractWhereUniqueInput
    data: XOR<smartcontractUpdateWithoutFreelancerInput, smartcontractUncheckedUpdateWithoutFreelancerInput>
  }

  export type smartcontractUpdateManyWithWhereWithoutFreelancerInput = {
    where: smartcontractScalarWhereInput
    data: XOR<smartcontractUpdateManyMutationInput, smartcontractUncheckedUpdateManyWithoutFreelancerInput>
  }

  export type clientCreateWithoutJobpostedInput = {
    cognitoid: string
    name: string
    email: string
    password?: string | null
    metamaskid?: string | null
    smartcontract?: smartcontractCreateNestedManyWithoutClientInput
  }

  export type clientUncheckedCreateWithoutJobpostedInput = {
    id?: number
    cognitoid: string
    name: string
    email: string
    password?: string | null
    metamaskid?: string | null
    smartcontract?: smartcontractUncheckedCreateNestedManyWithoutClientInput
  }

  export type clientCreateOrConnectWithoutJobpostedInput = {
    where: clientWhereUniqueInput
    create: XOR<clientCreateWithoutJobpostedInput, clientUncheckedCreateWithoutJobpostedInput>
  }

  export type messageCreateWithoutJobpostedInput = {
    senderid: number
    receiverid: number
    messagetext?: string | null
    messagetype?: $Enums.message_type | null
    attachmenturl?: string | null
    timestamp?: Date | string | null
    isread?: boolean | null
    issystem?: boolean | null
  }

  export type messageUncheckedCreateWithoutJobpostedInput = {
    id?: number
    senderid: number
    receiverid: number
    messagetext?: string | null
    messagetype?: $Enums.message_type | null
    attachmenturl?: string | null
    timestamp?: Date | string | null
    isread?: boolean | null
    issystem?: boolean | null
  }

  export type messageCreateOrConnectWithoutJobpostedInput = {
    where: messageWhereUniqueInput
    create: XOR<messageCreateWithoutJobpostedInput, messageUncheckedCreateWithoutJobpostedInput>
  }

  export type messageCreateManyJobpostedInputEnvelope = {
    data: messageCreateManyJobpostedInput | messageCreateManyJobpostedInput[]
    skipDuplicates?: boolean
  }

  export type milestonesCreateWithoutJobpostedInput = {
    title: string
    description?: string | null
    duedate?: Date | string | null
    amount: number
    status?: $Enums.milestone_status | null
    disputes?: disputesCreateNestedManyWithoutMilestonesInput
    freelancer?: freelancerCreateNestedOneWithoutMilestonesInput
    paymentsescrow?: paymentsescrowCreateNestedManyWithoutMilestonesInput
  }

  export type milestonesUncheckedCreateWithoutJobpostedInput = {
    id?: number
    freelancerid?: number | null
    title: string
    description?: string | null
    duedate?: Date | string | null
    amount: number
    status?: $Enums.milestone_status | null
    disputes?: disputesUncheckedCreateNestedManyWithoutMilestonesInput
    paymentsescrow?: paymentsescrowUncheckedCreateNestedManyWithoutMilestonesInput
  }

  export type milestonesCreateOrConnectWithoutJobpostedInput = {
    where: milestonesWhereUniqueInput
    create: XOR<milestonesCreateWithoutJobpostedInput, milestonesUncheckedCreateWithoutJobpostedInput>
  }

  export type milestonesCreateManyJobpostedInputEnvelope = {
    data: milestonesCreateManyJobpostedInput | milestonesCreateManyJobpostedInput[]
    skipDuplicates?: boolean
  }

  export type nftcredentialCreateWithoutJobpostedInput = {
    tokenid?: number | null
    rating?: number | null
    testimonial?: string | null
    isminted?: boolean | null
    txhash?: string | null
    createdat?: Date | string | null
    freelancer?: freelancerCreateNestedOneWithoutNftcredentialInput
  }

  export type nftcredentialUncheckedCreateWithoutJobpostedInput = {
    id?: number
    freelancerid?: number | null
    tokenid?: number | null
    rating?: number | null
    testimonial?: string | null
    isminted?: boolean | null
    txhash?: string | null
    createdat?: Date | string | null
  }

  export type nftcredentialCreateOrConnectWithoutJobpostedInput = {
    where: nftcredentialWhereUniqueInput
    create: XOR<nftcredentialCreateWithoutJobpostedInput, nftcredentialUncheckedCreateWithoutJobpostedInput>
  }

  export type nftcredentialCreateManyJobpostedInputEnvelope = {
    data: nftcredentialCreateManyJobpostedInput | nftcredentialCreateManyJobpostedInput[]
    skipDuplicates?: boolean
  }

  export type proposalsCreateWithoutJobpostedInput = {
    coverletter?: string | null
    budgetquoted?: number | null
    proposedtimeline?: string | null
    status?: $Enums.proposal_status | null
    submittedat?: Date | string | null
    freelancer?: freelancerCreateNestedOneWithoutProposalsInput
  }

  export type proposalsUncheckedCreateWithoutJobpostedInput = {
    id?: number
    freelancerid?: number | null
    coverletter?: string | null
    budgetquoted?: number | null
    proposedtimeline?: string | null
    status?: $Enums.proposal_status | null
    submittedat?: Date | string | null
  }

  export type proposalsCreateOrConnectWithoutJobpostedInput = {
    where: proposalsWhereUniqueInput
    create: XOR<proposalsCreateWithoutJobpostedInput, proposalsUncheckedCreateWithoutJobpostedInput>
  }

  export type proposalsCreateManyJobpostedInputEnvelope = {
    data: proposalsCreateManyJobpostedInput | proposalsCreateManyJobpostedInput[]
    skipDuplicates?: boolean
  }

  export type smartcontractCreateWithoutJobpostedInput = {
    startdate: Date | string
    enddate?: Date | string | null
    escrowamount: number
    smartcontractaddress?: string | null
    isactive?: boolean | null
    iscompleted?: boolean | null
    isdisputed?: boolean | null
    platformfee?: number | null
    paymentmethod?: string | null
    terminationreason?: string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
    disputes?: disputesCreateNestedManyWithoutSmartcontractInput
    paymentsescrow?: paymentsescrowCreateNestedManyWithoutSmartcontractInput
    client?: clientCreateNestedOneWithoutSmartcontractInput
    freelancer?: freelancerCreateNestedOneWithoutSmartcontractInput
  }

  export type smartcontractUncheckedCreateWithoutJobpostedInput = {
    id?: number
    freelancerid?: number | null
    clientid?: number | null
    startdate: Date | string
    enddate?: Date | string | null
    escrowamount: number
    smartcontractaddress?: string | null
    isactive?: boolean | null
    iscompleted?: boolean | null
    isdisputed?: boolean | null
    platformfee?: number | null
    paymentmethod?: string | null
    terminationreason?: string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
    disputes?: disputesUncheckedCreateNestedManyWithoutSmartcontractInput
    paymentsescrow?: paymentsescrowUncheckedCreateNestedManyWithoutSmartcontractInput
  }

  export type smartcontractCreateOrConnectWithoutJobpostedInput = {
    where: smartcontractWhereUniqueInput
    create: XOR<smartcontractCreateWithoutJobpostedInput, smartcontractUncheckedCreateWithoutJobpostedInput>
  }

  export type smartcontractCreateManyJobpostedInputEnvelope = {
    data: smartcontractCreateManyJobpostedInput | smartcontractCreateManyJobpostedInput[]
    skipDuplicates?: boolean
  }

  export type clientUpsertWithoutJobpostedInput = {
    update: XOR<clientUpdateWithoutJobpostedInput, clientUncheckedUpdateWithoutJobpostedInput>
    create: XOR<clientCreateWithoutJobpostedInput, clientUncheckedCreateWithoutJobpostedInput>
    where?: clientWhereInput
  }

  export type clientUpdateToOneWithWhereWithoutJobpostedInput = {
    where?: clientWhereInput
    data: XOR<clientUpdateWithoutJobpostedInput, clientUncheckedUpdateWithoutJobpostedInput>
  }

  export type clientUpdateWithoutJobpostedInput = {
    cognitoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    metamaskid?: NullableStringFieldUpdateOperationsInput | string | null
    smartcontract?: smartcontractUpdateManyWithoutClientNestedInput
  }

  export type clientUncheckedUpdateWithoutJobpostedInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    metamaskid?: NullableStringFieldUpdateOperationsInput | string | null
    smartcontract?: smartcontractUncheckedUpdateManyWithoutClientNestedInput
  }

  export type messageUpsertWithWhereUniqueWithoutJobpostedInput = {
    where: messageWhereUniqueInput
    update: XOR<messageUpdateWithoutJobpostedInput, messageUncheckedUpdateWithoutJobpostedInput>
    create: XOR<messageCreateWithoutJobpostedInput, messageUncheckedCreateWithoutJobpostedInput>
  }

  export type messageUpdateWithWhereUniqueWithoutJobpostedInput = {
    where: messageWhereUniqueInput
    data: XOR<messageUpdateWithoutJobpostedInput, messageUncheckedUpdateWithoutJobpostedInput>
  }

  export type messageUpdateManyWithWhereWithoutJobpostedInput = {
    where: messageScalarWhereInput
    data: XOR<messageUpdateManyMutationInput, messageUncheckedUpdateManyWithoutJobpostedInput>
  }

  export type messageScalarWhereInput = {
    AND?: messageScalarWhereInput | messageScalarWhereInput[]
    OR?: messageScalarWhereInput[]
    NOT?: messageScalarWhereInput | messageScalarWhereInput[]
    id?: IntFilter<"message"> | number
    senderid?: IntFilter<"message"> | number
    receiverid?: IntFilter<"message"> | number
    jobid?: IntNullableFilter<"message"> | number | null
    messagetext?: StringNullableFilter<"message"> | string | null
    messagetype?: Enummessage_typeNullableFilter<"message"> | $Enums.message_type | null
    attachmenturl?: StringNullableFilter<"message"> | string | null
    timestamp?: DateTimeNullableFilter<"message"> | Date | string | null
    isread?: BoolNullableFilter<"message"> | boolean | null
    issystem?: BoolNullableFilter<"message"> | boolean | null
  }

  export type milestonesUpsertWithWhereUniqueWithoutJobpostedInput = {
    where: milestonesWhereUniqueInput
    update: XOR<milestonesUpdateWithoutJobpostedInput, milestonesUncheckedUpdateWithoutJobpostedInput>
    create: XOR<milestonesCreateWithoutJobpostedInput, milestonesUncheckedCreateWithoutJobpostedInput>
  }

  export type milestonesUpdateWithWhereUniqueWithoutJobpostedInput = {
    where: milestonesWhereUniqueInput
    data: XOR<milestonesUpdateWithoutJobpostedInput, milestonesUncheckedUpdateWithoutJobpostedInput>
  }

  export type milestonesUpdateManyWithWhereWithoutJobpostedInput = {
    where: milestonesScalarWhereInput
    data: XOR<milestonesUpdateManyMutationInput, milestonesUncheckedUpdateManyWithoutJobpostedInput>
  }

  export type nftcredentialUpsertWithWhereUniqueWithoutJobpostedInput = {
    where: nftcredentialWhereUniqueInput
    update: XOR<nftcredentialUpdateWithoutJobpostedInput, nftcredentialUncheckedUpdateWithoutJobpostedInput>
    create: XOR<nftcredentialCreateWithoutJobpostedInput, nftcredentialUncheckedCreateWithoutJobpostedInput>
  }

  export type nftcredentialUpdateWithWhereUniqueWithoutJobpostedInput = {
    where: nftcredentialWhereUniqueInput
    data: XOR<nftcredentialUpdateWithoutJobpostedInput, nftcredentialUncheckedUpdateWithoutJobpostedInput>
  }

  export type nftcredentialUpdateManyWithWhereWithoutJobpostedInput = {
    where: nftcredentialScalarWhereInput
    data: XOR<nftcredentialUpdateManyMutationInput, nftcredentialUncheckedUpdateManyWithoutJobpostedInput>
  }

  export type proposalsUpsertWithWhereUniqueWithoutJobpostedInput = {
    where: proposalsWhereUniqueInput
    update: XOR<proposalsUpdateWithoutJobpostedInput, proposalsUncheckedUpdateWithoutJobpostedInput>
    create: XOR<proposalsCreateWithoutJobpostedInput, proposalsUncheckedCreateWithoutJobpostedInput>
  }

  export type proposalsUpdateWithWhereUniqueWithoutJobpostedInput = {
    where: proposalsWhereUniqueInput
    data: XOR<proposalsUpdateWithoutJobpostedInput, proposalsUncheckedUpdateWithoutJobpostedInput>
  }

  export type proposalsUpdateManyWithWhereWithoutJobpostedInput = {
    where: proposalsScalarWhereInput
    data: XOR<proposalsUpdateManyMutationInput, proposalsUncheckedUpdateManyWithoutJobpostedInput>
  }

  export type smartcontractUpsertWithWhereUniqueWithoutJobpostedInput = {
    where: smartcontractWhereUniqueInput
    update: XOR<smartcontractUpdateWithoutJobpostedInput, smartcontractUncheckedUpdateWithoutJobpostedInput>
    create: XOR<smartcontractCreateWithoutJobpostedInput, smartcontractUncheckedCreateWithoutJobpostedInput>
  }

  export type smartcontractUpdateWithWhereUniqueWithoutJobpostedInput = {
    where: smartcontractWhereUniqueInput
    data: XOR<smartcontractUpdateWithoutJobpostedInput, smartcontractUncheckedUpdateWithoutJobpostedInput>
  }

  export type smartcontractUpdateManyWithWhereWithoutJobpostedInput = {
    where: smartcontractScalarWhereInput
    data: XOR<smartcontractUpdateManyMutationInput, smartcontractUncheckedUpdateManyWithoutJobpostedInput>
  }

  export type jobpostedCreateWithoutMessageInput = {
    name: string
    description: string
    tags?: jobpostedCreatetagsInput | string[]
    location?: string | null
    joblevel?: string | null
    budget?: number | null
    contracttohire?: boolean | null
    qualificationspreferred?: string | null
    postingtime?: Date | string | null
    postingdate?: Date | string | null
    validtill?: Date | string | null
    companyname?: string | null
    customizable?: boolean | null
    photourls?: jobpostedCreatephotourlsInput | string[]
    client?: clientCreateNestedOneWithoutJobpostedInput
    milestones?: milestonesCreateNestedManyWithoutJobpostedInput
    nftcredential?: nftcredentialCreateNestedManyWithoutJobpostedInput
    proposals?: proposalsCreateNestedManyWithoutJobpostedInput
    smartcontract?: smartcontractCreateNestedManyWithoutJobpostedInput
  }

  export type jobpostedUncheckedCreateWithoutMessageInput = {
    id?: number
    clientid?: number | null
    name: string
    description: string
    tags?: jobpostedCreatetagsInput | string[]
    location?: string | null
    joblevel?: string | null
    budget?: number | null
    contracttohire?: boolean | null
    qualificationspreferred?: string | null
    postingtime?: Date | string | null
    postingdate?: Date | string | null
    validtill?: Date | string | null
    companyname?: string | null
    customizable?: boolean | null
    photourls?: jobpostedCreatephotourlsInput | string[]
    milestones?: milestonesUncheckedCreateNestedManyWithoutJobpostedInput
    nftcredential?: nftcredentialUncheckedCreateNestedManyWithoutJobpostedInput
    proposals?: proposalsUncheckedCreateNestedManyWithoutJobpostedInput
    smartcontract?: smartcontractUncheckedCreateNestedManyWithoutJobpostedInput
  }

  export type jobpostedCreateOrConnectWithoutMessageInput = {
    where: jobpostedWhereUniqueInput
    create: XOR<jobpostedCreateWithoutMessageInput, jobpostedUncheckedCreateWithoutMessageInput>
  }

  export type jobpostedUpsertWithoutMessageInput = {
    update: XOR<jobpostedUpdateWithoutMessageInput, jobpostedUncheckedUpdateWithoutMessageInput>
    create: XOR<jobpostedCreateWithoutMessageInput, jobpostedUncheckedCreateWithoutMessageInput>
    where?: jobpostedWhereInput
  }

  export type jobpostedUpdateToOneWithWhereWithoutMessageInput = {
    where?: jobpostedWhereInput
    data: XOR<jobpostedUpdateWithoutMessageInput, jobpostedUncheckedUpdateWithoutMessageInput>
  }

  export type jobpostedUpdateWithoutMessageInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: jobpostedUpdatetagsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joblevel?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    contracttohire?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qualificationspreferred?: NullableStringFieldUpdateOperationsInput | string | null
    postingtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postingdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validtill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyname?: NullableStringFieldUpdateOperationsInput | string | null
    customizable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    photourls?: jobpostedUpdatephotourlsInput | string[]
    client?: clientUpdateOneWithoutJobpostedNestedInput
    milestones?: milestonesUpdateManyWithoutJobpostedNestedInput
    nftcredential?: nftcredentialUpdateManyWithoutJobpostedNestedInput
    proposals?: proposalsUpdateManyWithoutJobpostedNestedInput
    smartcontract?: smartcontractUpdateManyWithoutJobpostedNestedInput
  }

  export type jobpostedUncheckedUpdateWithoutMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientid?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: jobpostedUpdatetagsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joblevel?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    contracttohire?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qualificationspreferred?: NullableStringFieldUpdateOperationsInput | string | null
    postingtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postingdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validtill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyname?: NullableStringFieldUpdateOperationsInput | string | null
    customizable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    photourls?: jobpostedUpdatephotourlsInput | string[]
    milestones?: milestonesUncheckedUpdateManyWithoutJobpostedNestedInput
    nftcredential?: nftcredentialUncheckedUpdateManyWithoutJobpostedNestedInput
    proposals?: proposalsUncheckedUpdateManyWithoutJobpostedNestedInput
    smartcontract?: smartcontractUncheckedUpdateManyWithoutJobpostedNestedInput
  }

  export type disputesCreateWithoutMilestonesInput = {
    raisedby: number
    againstuserid: number
    description?: string | null
    status?: $Enums.dispute_status | null
    resolution?: string | null
    resolutionby?: number | null
    evidenceurls?: disputesCreateevidenceurlsInput | string[]
    createdat?: Date | string | null
    resolvedat?: Date | string | null
    smartcontract?: smartcontractCreateNestedOneWithoutDisputesInput
  }

  export type disputesUncheckedCreateWithoutMilestonesInput = {
    id?: number
    contractid?: number | null
    raisedby: number
    againstuserid: number
    description?: string | null
    status?: $Enums.dispute_status | null
    resolution?: string | null
    resolutionby?: number | null
    evidenceurls?: disputesCreateevidenceurlsInput | string[]
    createdat?: Date | string | null
    resolvedat?: Date | string | null
  }

  export type disputesCreateOrConnectWithoutMilestonesInput = {
    where: disputesWhereUniqueInput
    create: XOR<disputesCreateWithoutMilestonesInput, disputesUncheckedCreateWithoutMilestonesInput>
  }

  export type disputesCreateManyMilestonesInputEnvelope = {
    data: disputesCreateManyMilestonesInput | disputesCreateManyMilestonesInput[]
    skipDuplicates?: boolean
  }

  export type freelancerCreateWithoutMilestonesInput = {
    cognitoid: string
    name: string
    email: string
    password: string
    metamaskid?: string | null
    nftcredential?: nftcredentialCreateNestedManyWithoutFreelancerInput
    paymentsescrow?: paymentsescrowCreateNestedManyWithoutFreelancerInput
    proposals?: proposalsCreateNestedManyWithoutFreelancerInput
    smartcontract?: smartcontractCreateNestedManyWithoutFreelancerInput
  }

  export type freelancerUncheckedCreateWithoutMilestonesInput = {
    id?: number
    cognitoid: string
    name: string
    email: string
    password: string
    metamaskid?: string | null
    nftcredential?: nftcredentialUncheckedCreateNestedManyWithoutFreelancerInput
    paymentsescrow?: paymentsescrowUncheckedCreateNestedManyWithoutFreelancerInput
    proposals?: proposalsUncheckedCreateNestedManyWithoutFreelancerInput
    smartcontract?: smartcontractUncheckedCreateNestedManyWithoutFreelancerInput
  }

  export type freelancerCreateOrConnectWithoutMilestonesInput = {
    where: freelancerWhereUniqueInput
    create: XOR<freelancerCreateWithoutMilestonesInput, freelancerUncheckedCreateWithoutMilestonesInput>
  }

  export type jobpostedCreateWithoutMilestonesInput = {
    name: string
    description: string
    tags?: jobpostedCreatetagsInput | string[]
    location?: string | null
    joblevel?: string | null
    budget?: number | null
    contracttohire?: boolean | null
    qualificationspreferred?: string | null
    postingtime?: Date | string | null
    postingdate?: Date | string | null
    validtill?: Date | string | null
    companyname?: string | null
    customizable?: boolean | null
    photourls?: jobpostedCreatephotourlsInput | string[]
    client?: clientCreateNestedOneWithoutJobpostedInput
    message?: messageCreateNestedManyWithoutJobpostedInput
    nftcredential?: nftcredentialCreateNestedManyWithoutJobpostedInput
    proposals?: proposalsCreateNestedManyWithoutJobpostedInput
    smartcontract?: smartcontractCreateNestedManyWithoutJobpostedInput
  }

  export type jobpostedUncheckedCreateWithoutMilestonesInput = {
    id?: number
    clientid?: number | null
    name: string
    description: string
    tags?: jobpostedCreatetagsInput | string[]
    location?: string | null
    joblevel?: string | null
    budget?: number | null
    contracttohire?: boolean | null
    qualificationspreferred?: string | null
    postingtime?: Date | string | null
    postingdate?: Date | string | null
    validtill?: Date | string | null
    companyname?: string | null
    customizable?: boolean | null
    photourls?: jobpostedCreatephotourlsInput | string[]
    message?: messageUncheckedCreateNestedManyWithoutJobpostedInput
    nftcredential?: nftcredentialUncheckedCreateNestedManyWithoutJobpostedInput
    proposals?: proposalsUncheckedCreateNestedManyWithoutJobpostedInput
    smartcontract?: smartcontractUncheckedCreateNestedManyWithoutJobpostedInput
  }

  export type jobpostedCreateOrConnectWithoutMilestonesInput = {
    where: jobpostedWhereUniqueInput
    create: XOR<jobpostedCreateWithoutMilestonesInput, jobpostedUncheckedCreateWithoutMilestonesInput>
  }

  export type paymentsescrowCreateWithoutMilestonesInput = {
    type: $Enums.payment_type
    status?: $Enums.payment_status | null
    paymentmethod?: $Enums.payment_method | null
    txhash?: string | null
    amount: number
    initiatedby?: number | null
    notes?: string | null
    timestamp?: Date | string | null
    confirmedat?: Date | string | null
    smartcontract?: smartcontractCreateNestedOneWithoutPaymentsescrowInput
    freelancer?: freelancerCreateNestedOneWithoutPaymentsescrowInput
  }

  export type paymentsescrowUncheckedCreateWithoutMilestonesInput = {
    id?: number
    contractid?: number | null
    type: $Enums.payment_type
    status?: $Enums.payment_status | null
    paymentmethod?: $Enums.payment_method | null
    txhash?: string | null
    amount: number
    initiatedby?: number | null
    receiverid?: number | null
    notes?: string | null
    timestamp?: Date | string | null
    confirmedat?: Date | string | null
  }

  export type paymentsescrowCreateOrConnectWithoutMilestonesInput = {
    where: paymentsescrowWhereUniqueInput
    create: XOR<paymentsescrowCreateWithoutMilestonesInput, paymentsescrowUncheckedCreateWithoutMilestonesInput>
  }

  export type paymentsescrowCreateManyMilestonesInputEnvelope = {
    data: paymentsescrowCreateManyMilestonesInput | paymentsescrowCreateManyMilestonesInput[]
    skipDuplicates?: boolean
  }

  export type disputesUpsertWithWhereUniqueWithoutMilestonesInput = {
    where: disputesWhereUniqueInput
    update: XOR<disputesUpdateWithoutMilestonesInput, disputesUncheckedUpdateWithoutMilestonesInput>
    create: XOR<disputesCreateWithoutMilestonesInput, disputesUncheckedCreateWithoutMilestonesInput>
  }

  export type disputesUpdateWithWhereUniqueWithoutMilestonesInput = {
    where: disputesWhereUniqueInput
    data: XOR<disputesUpdateWithoutMilestonesInput, disputesUncheckedUpdateWithoutMilestonesInput>
  }

  export type disputesUpdateManyWithWhereWithoutMilestonesInput = {
    where: disputesScalarWhereInput
    data: XOR<disputesUpdateManyMutationInput, disputesUncheckedUpdateManyWithoutMilestonesInput>
  }

  export type disputesScalarWhereInput = {
    AND?: disputesScalarWhereInput | disputesScalarWhereInput[]
    OR?: disputesScalarWhereInput[]
    NOT?: disputesScalarWhereInput | disputesScalarWhereInput[]
    id?: IntFilter<"disputes"> | number
    contractid?: IntNullableFilter<"disputes"> | number | null
    milestoneid?: IntNullableFilter<"disputes"> | number | null
    raisedby?: IntFilter<"disputes"> | number
    againstuserid?: IntFilter<"disputes"> | number
    description?: StringNullableFilter<"disputes"> | string | null
    status?: Enumdispute_statusNullableFilter<"disputes"> | $Enums.dispute_status | null
    resolution?: StringNullableFilter<"disputes"> | string | null
    resolutionby?: IntNullableFilter<"disputes"> | number | null
    evidenceurls?: StringNullableListFilter<"disputes">
    createdat?: DateTimeNullableFilter<"disputes"> | Date | string | null
    resolvedat?: DateTimeNullableFilter<"disputes"> | Date | string | null
  }

  export type freelancerUpsertWithoutMilestonesInput = {
    update: XOR<freelancerUpdateWithoutMilestonesInput, freelancerUncheckedUpdateWithoutMilestonesInput>
    create: XOR<freelancerCreateWithoutMilestonesInput, freelancerUncheckedCreateWithoutMilestonesInput>
    where?: freelancerWhereInput
  }

  export type freelancerUpdateToOneWithWhereWithoutMilestonesInput = {
    where?: freelancerWhereInput
    data: XOR<freelancerUpdateWithoutMilestonesInput, freelancerUncheckedUpdateWithoutMilestonesInput>
  }

  export type freelancerUpdateWithoutMilestonesInput = {
    cognitoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    metamaskid?: NullableStringFieldUpdateOperationsInput | string | null
    nftcredential?: nftcredentialUpdateManyWithoutFreelancerNestedInput
    paymentsescrow?: paymentsescrowUpdateManyWithoutFreelancerNestedInput
    proposals?: proposalsUpdateManyWithoutFreelancerNestedInput
    smartcontract?: smartcontractUpdateManyWithoutFreelancerNestedInput
  }

  export type freelancerUncheckedUpdateWithoutMilestonesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    metamaskid?: NullableStringFieldUpdateOperationsInput | string | null
    nftcredential?: nftcredentialUncheckedUpdateManyWithoutFreelancerNestedInput
    paymentsescrow?: paymentsescrowUncheckedUpdateManyWithoutFreelancerNestedInput
    proposals?: proposalsUncheckedUpdateManyWithoutFreelancerNestedInput
    smartcontract?: smartcontractUncheckedUpdateManyWithoutFreelancerNestedInput
  }

  export type jobpostedUpsertWithoutMilestonesInput = {
    update: XOR<jobpostedUpdateWithoutMilestonesInput, jobpostedUncheckedUpdateWithoutMilestonesInput>
    create: XOR<jobpostedCreateWithoutMilestonesInput, jobpostedUncheckedCreateWithoutMilestonesInput>
    where?: jobpostedWhereInput
  }

  export type jobpostedUpdateToOneWithWhereWithoutMilestonesInput = {
    where?: jobpostedWhereInput
    data: XOR<jobpostedUpdateWithoutMilestonesInput, jobpostedUncheckedUpdateWithoutMilestonesInput>
  }

  export type jobpostedUpdateWithoutMilestonesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: jobpostedUpdatetagsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joblevel?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    contracttohire?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qualificationspreferred?: NullableStringFieldUpdateOperationsInput | string | null
    postingtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postingdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validtill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyname?: NullableStringFieldUpdateOperationsInput | string | null
    customizable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    photourls?: jobpostedUpdatephotourlsInput | string[]
    client?: clientUpdateOneWithoutJobpostedNestedInput
    message?: messageUpdateManyWithoutJobpostedNestedInput
    nftcredential?: nftcredentialUpdateManyWithoutJobpostedNestedInput
    proposals?: proposalsUpdateManyWithoutJobpostedNestedInput
    smartcontract?: smartcontractUpdateManyWithoutJobpostedNestedInput
  }

  export type jobpostedUncheckedUpdateWithoutMilestonesInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientid?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: jobpostedUpdatetagsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joblevel?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    contracttohire?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qualificationspreferred?: NullableStringFieldUpdateOperationsInput | string | null
    postingtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postingdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validtill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyname?: NullableStringFieldUpdateOperationsInput | string | null
    customizable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    photourls?: jobpostedUpdatephotourlsInput | string[]
    message?: messageUncheckedUpdateManyWithoutJobpostedNestedInput
    nftcredential?: nftcredentialUncheckedUpdateManyWithoutJobpostedNestedInput
    proposals?: proposalsUncheckedUpdateManyWithoutJobpostedNestedInput
    smartcontract?: smartcontractUncheckedUpdateManyWithoutJobpostedNestedInput
  }

  export type paymentsescrowUpsertWithWhereUniqueWithoutMilestonesInput = {
    where: paymentsescrowWhereUniqueInput
    update: XOR<paymentsescrowUpdateWithoutMilestonesInput, paymentsescrowUncheckedUpdateWithoutMilestonesInput>
    create: XOR<paymentsescrowCreateWithoutMilestonesInput, paymentsescrowUncheckedCreateWithoutMilestonesInput>
  }

  export type paymentsescrowUpdateWithWhereUniqueWithoutMilestonesInput = {
    where: paymentsescrowWhereUniqueInput
    data: XOR<paymentsescrowUpdateWithoutMilestonesInput, paymentsescrowUncheckedUpdateWithoutMilestonesInput>
  }

  export type paymentsescrowUpdateManyWithWhereWithoutMilestonesInput = {
    where: paymentsescrowScalarWhereInput
    data: XOR<paymentsescrowUpdateManyMutationInput, paymentsescrowUncheckedUpdateManyWithoutMilestonesInput>
  }

  export type freelancerCreateWithoutNftcredentialInput = {
    cognitoid: string
    name: string
    email: string
    password: string
    metamaskid?: string | null
    milestones?: milestonesCreateNestedManyWithoutFreelancerInput
    paymentsescrow?: paymentsescrowCreateNestedManyWithoutFreelancerInput
    proposals?: proposalsCreateNestedManyWithoutFreelancerInput
    smartcontract?: smartcontractCreateNestedManyWithoutFreelancerInput
  }

  export type freelancerUncheckedCreateWithoutNftcredentialInput = {
    id?: number
    cognitoid: string
    name: string
    email: string
    password: string
    metamaskid?: string | null
    milestones?: milestonesUncheckedCreateNestedManyWithoutFreelancerInput
    paymentsescrow?: paymentsescrowUncheckedCreateNestedManyWithoutFreelancerInput
    proposals?: proposalsUncheckedCreateNestedManyWithoutFreelancerInput
    smartcontract?: smartcontractUncheckedCreateNestedManyWithoutFreelancerInput
  }

  export type freelancerCreateOrConnectWithoutNftcredentialInput = {
    where: freelancerWhereUniqueInput
    create: XOR<freelancerCreateWithoutNftcredentialInput, freelancerUncheckedCreateWithoutNftcredentialInput>
  }

  export type jobpostedCreateWithoutNftcredentialInput = {
    name: string
    description: string
    tags?: jobpostedCreatetagsInput | string[]
    location?: string | null
    joblevel?: string | null
    budget?: number | null
    contracttohire?: boolean | null
    qualificationspreferred?: string | null
    postingtime?: Date | string | null
    postingdate?: Date | string | null
    validtill?: Date | string | null
    companyname?: string | null
    customizable?: boolean | null
    photourls?: jobpostedCreatephotourlsInput | string[]
    client?: clientCreateNestedOneWithoutJobpostedInput
    message?: messageCreateNestedManyWithoutJobpostedInput
    milestones?: milestonesCreateNestedManyWithoutJobpostedInput
    proposals?: proposalsCreateNestedManyWithoutJobpostedInput
    smartcontract?: smartcontractCreateNestedManyWithoutJobpostedInput
  }

  export type jobpostedUncheckedCreateWithoutNftcredentialInput = {
    id?: number
    clientid?: number | null
    name: string
    description: string
    tags?: jobpostedCreatetagsInput | string[]
    location?: string | null
    joblevel?: string | null
    budget?: number | null
    contracttohire?: boolean | null
    qualificationspreferred?: string | null
    postingtime?: Date | string | null
    postingdate?: Date | string | null
    validtill?: Date | string | null
    companyname?: string | null
    customizable?: boolean | null
    photourls?: jobpostedCreatephotourlsInput | string[]
    message?: messageUncheckedCreateNestedManyWithoutJobpostedInput
    milestones?: milestonesUncheckedCreateNestedManyWithoutJobpostedInput
    proposals?: proposalsUncheckedCreateNestedManyWithoutJobpostedInput
    smartcontract?: smartcontractUncheckedCreateNestedManyWithoutJobpostedInput
  }

  export type jobpostedCreateOrConnectWithoutNftcredentialInput = {
    where: jobpostedWhereUniqueInput
    create: XOR<jobpostedCreateWithoutNftcredentialInput, jobpostedUncheckedCreateWithoutNftcredentialInput>
  }

  export type freelancerUpsertWithoutNftcredentialInput = {
    update: XOR<freelancerUpdateWithoutNftcredentialInput, freelancerUncheckedUpdateWithoutNftcredentialInput>
    create: XOR<freelancerCreateWithoutNftcredentialInput, freelancerUncheckedCreateWithoutNftcredentialInput>
    where?: freelancerWhereInput
  }

  export type freelancerUpdateToOneWithWhereWithoutNftcredentialInput = {
    where?: freelancerWhereInput
    data: XOR<freelancerUpdateWithoutNftcredentialInput, freelancerUncheckedUpdateWithoutNftcredentialInput>
  }

  export type freelancerUpdateWithoutNftcredentialInput = {
    cognitoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    metamaskid?: NullableStringFieldUpdateOperationsInput | string | null
    milestones?: milestonesUpdateManyWithoutFreelancerNestedInput
    paymentsescrow?: paymentsescrowUpdateManyWithoutFreelancerNestedInput
    proposals?: proposalsUpdateManyWithoutFreelancerNestedInput
    smartcontract?: smartcontractUpdateManyWithoutFreelancerNestedInput
  }

  export type freelancerUncheckedUpdateWithoutNftcredentialInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    metamaskid?: NullableStringFieldUpdateOperationsInput | string | null
    milestones?: milestonesUncheckedUpdateManyWithoutFreelancerNestedInput
    paymentsescrow?: paymentsescrowUncheckedUpdateManyWithoutFreelancerNestedInput
    proposals?: proposalsUncheckedUpdateManyWithoutFreelancerNestedInput
    smartcontract?: smartcontractUncheckedUpdateManyWithoutFreelancerNestedInput
  }

  export type jobpostedUpsertWithoutNftcredentialInput = {
    update: XOR<jobpostedUpdateWithoutNftcredentialInput, jobpostedUncheckedUpdateWithoutNftcredentialInput>
    create: XOR<jobpostedCreateWithoutNftcredentialInput, jobpostedUncheckedCreateWithoutNftcredentialInput>
    where?: jobpostedWhereInput
  }

  export type jobpostedUpdateToOneWithWhereWithoutNftcredentialInput = {
    where?: jobpostedWhereInput
    data: XOR<jobpostedUpdateWithoutNftcredentialInput, jobpostedUncheckedUpdateWithoutNftcredentialInput>
  }

  export type jobpostedUpdateWithoutNftcredentialInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: jobpostedUpdatetagsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joblevel?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    contracttohire?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qualificationspreferred?: NullableStringFieldUpdateOperationsInput | string | null
    postingtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postingdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validtill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyname?: NullableStringFieldUpdateOperationsInput | string | null
    customizable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    photourls?: jobpostedUpdatephotourlsInput | string[]
    client?: clientUpdateOneWithoutJobpostedNestedInput
    message?: messageUpdateManyWithoutJobpostedNestedInput
    milestones?: milestonesUpdateManyWithoutJobpostedNestedInput
    proposals?: proposalsUpdateManyWithoutJobpostedNestedInput
    smartcontract?: smartcontractUpdateManyWithoutJobpostedNestedInput
  }

  export type jobpostedUncheckedUpdateWithoutNftcredentialInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientid?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: jobpostedUpdatetagsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joblevel?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    contracttohire?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qualificationspreferred?: NullableStringFieldUpdateOperationsInput | string | null
    postingtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postingdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validtill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyname?: NullableStringFieldUpdateOperationsInput | string | null
    customizable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    photourls?: jobpostedUpdatephotourlsInput | string[]
    message?: messageUncheckedUpdateManyWithoutJobpostedNestedInput
    milestones?: milestonesUncheckedUpdateManyWithoutJobpostedNestedInput
    proposals?: proposalsUncheckedUpdateManyWithoutJobpostedNestedInput
    smartcontract?: smartcontractUncheckedUpdateManyWithoutJobpostedNestedInput
  }

  export type smartcontractCreateWithoutPaymentsescrowInput = {
    startdate: Date | string
    enddate?: Date | string | null
    escrowamount: number
    smartcontractaddress?: string | null
    isactive?: boolean | null
    iscompleted?: boolean | null
    isdisputed?: boolean | null
    platformfee?: number | null
    paymentmethod?: string | null
    terminationreason?: string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
    disputes?: disputesCreateNestedManyWithoutSmartcontractInput
    client?: clientCreateNestedOneWithoutSmartcontractInput
    freelancer?: freelancerCreateNestedOneWithoutSmartcontractInput
    jobposted?: jobpostedCreateNestedOneWithoutSmartcontractInput
  }

  export type smartcontractUncheckedCreateWithoutPaymentsescrowInput = {
    id?: number
    jobid?: number | null
    freelancerid?: number | null
    clientid?: number | null
    startdate: Date | string
    enddate?: Date | string | null
    escrowamount: number
    smartcontractaddress?: string | null
    isactive?: boolean | null
    iscompleted?: boolean | null
    isdisputed?: boolean | null
    platformfee?: number | null
    paymentmethod?: string | null
    terminationreason?: string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
    disputes?: disputesUncheckedCreateNestedManyWithoutSmartcontractInput
  }

  export type smartcontractCreateOrConnectWithoutPaymentsescrowInput = {
    where: smartcontractWhereUniqueInput
    create: XOR<smartcontractCreateWithoutPaymentsescrowInput, smartcontractUncheckedCreateWithoutPaymentsescrowInput>
  }

  export type milestonesCreateWithoutPaymentsescrowInput = {
    title: string
    description?: string | null
    duedate?: Date | string | null
    amount: number
    status?: $Enums.milestone_status | null
    disputes?: disputesCreateNestedManyWithoutMilestonesInput
    freelancer?: freelancerCreateNestedOneWithoutMilestonesInput
    jobposted?: jobpostedCreateNestedOneWithoutMilestonesInput
  }

  export type milestonesUncheckedCreateWithoutPaymentsescrowInput = {
    id?: number
    jobid?: number | null
    freelancerid?: number | null
    title: string
    description?: string | null
    duedate?: Date | string | null
    amount: number
    status?: $Enums.milestone_status | null
    disputes?: disputesUncheckedCreateNestedManyWithoutMilestonesInput
  }

  export type milestonesCreateOrConnectWithoutPaymentsescrowInput = {
    where: milestonesWhereUniqueInput
    create: XOR<milestonesCreateWithoutPaymentsescrowInput, milestonesUncheckedCreateWithoutPaymentsescrowInput>
  }

  export type freelancerCreateWithoutPaymentsescrowInput = {
    cognitoid: string
    name: string
    email: string
    password: string
    metamaskid?: string | null
    milestones?: milestonesCreateNestedManyWithoutFreelancerInput
    nftcredential?: nftcredentialCreateNestedManyWithoutFreelancerInput
    proposals?: proposalsCreateNestedManyWithoutFreelancerInput
    smartcontract?: smartcontractCreateNestedManyWithoutFreelancerInput
  }

  export type freelancerUncheckedCreateWithoutPaymentsescrowInput = {
    id?: number
    cognitoid: string
    name: string
    email: string
    password: string
    metamaskid?: string | null
    milestones?: milestonesUncheckedCreateNestedManyWithoutFreelancerInput
    nftcredential?: nftcredentialUncheckedCreateNestedManyWithoutFreelancerInput
    proposals?: proposalsUncheckedCreateNestedManyWithoutFreelancerInput
    smartcontract?: smartcontractUncheckedCreateNestedManyWithoutFreelancerInput
  }

  export type freelancerCreateOrConnectWithoutPaymentsescrowInput = {
    where: freelancerWhereUniqueInput
    create: XOR<freelancerCreateWithoutPaymentsescrowInput, freelancerUncheckedCreateWithoutPaymentsescrowInput>
  }

  export type smartcontractUpsertWithoutPaymentsescrowInput = {
    update: XOR<smartcontractUpdateWithoutPaymentsescrowInput, smartcontractUncheckedUpdateWithoutPaymentsescrowInput>
    create: XOR<smartcontractCreateWithoutPaymentsescrowInput, smartcontractUncheckedCreateWithoutPaymentsescrowInput>
    where?: smartcontractWhereInput
  }

  export type smartcontractUpdateToOneWithWhereWithoutPaymentsescrowInput = {
    where?: smartcontractWhereInput
    data: XOR<smartcontractUpdateWithoutPaymentsescrowInput, smartcontractUncheckedUpdateWithoutPaymentsescrowInput>
  }

  export type smartcontractUpdateWithoutPaymentsescrowInput = {
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escrowamount?: IntFieldUpdateOperationsInput | number
    smartcontractaddress?: NullableStringFieldUpdateOperationsInput | string | null
    isactive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    iscompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isdisputed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    platformfee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentmethod?: NullableStringFieldUpdateOperationsInput | string | null
    terminationreason?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disputes?: disputesUpdateManyWithoutSmartcontractNestedInput
    client?: clientUpdateOneWithoutSmartcontractNestedInput
    freelancer?: freelancerUpdateOneWithoutSmartcontractNestedInput
    jobposted?: jobpostedUpdateOneWithoutSmartcontractNestedInput
  }

  export type smartcontractUncheckedUpdateWithoutPaymentsescrowInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobid?: NullableIntFieldUpdateOperationsInput | number | null
    freelancerid?: NullableIntFieldUpdateOperationsInput | number | null
    clientid?: NullableIntFieldUpdateOperationsInput | number | null
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escrowamount?: IntFieldUpdateOperationsInput | number
    smartcontractaddress?: NullableStringFieldUpdateOperationsInput | string | null
    isactive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    iscompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isdisputed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    platformfee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentmethod?: NullableStringFieldUpdateOperationsInput | string | null
    terminationreason?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disputes?: disputesUncheckedUpdateManyWithoutSmartcontractNestedInput
  }

  export type milestonesUpsertWithoutPaymentsescrowInput = {
    update: XOR<milestonesUpdateWithoutPaymentsescrowInput, milestonesUncheckedUpdateWithoutPaymentsescrowInput>
    create: XOR<milestonesCreateWithoutPaymentsescrowInput, milestonesUncheckedCreateWithoutPaymentsescrowInput>
    where?: milestonesWhereInput
  }

  export type milestonesUpdateToOneWithWhereWithoutPaymentsescrowInput = {
    where?: milestonesWhereInput
    data: XOR<milestonesUpdateWithoutPaymentsescrowInput, milestonesUncheckedUpdateWithoutPaymentsescrowInput>
  }

  export type milestonesUpdateWithoutPaymentsescrowInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duedate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: NullableEnummilestone_statusFieldUpdateOperationsInput | $Enums.milestone_status | null
    disputes?: disputesUpdateManyWithoutMilestonesNestedInput
    freelancer?: freelancerUpdateOneWithoutMilestonesNestedInput
    jobposted?: jobpostedUpdateOneWithoutMilestonesNestedInput
  }

  export type milestonesUncheckedUpdateWithoutPaymentsescrowInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobid?: NullableIntFieldUpdateOperationsInput | number | null
    freelancerid?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duedate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: NullableEnummilestone_statusFieldUpdateOperationsInput | $Enums.milestone_status | null
    disputes?: disputesUncheckedUpdateManyWithoutMilestonesNestedInput
  }

  export type freelancerUpsertWithoutPaymentsescrowInput = {
    update: XOR<freelancerUpdateWithoutPaymentsescrowInput, freelancerUncheckedUpdateWithoutPaymentsescrowInput>
    create: XOR<freelancerCreateWithoutPaymentsescrowInput, freelancerUncheckedCreateWithoutPaymentsescrowInput>
    where?: freelancerWhereInput
  }

  export type freelancerUpdateToOneWithWhereWithoutPaymentsescrowInput = {
    where?: freelancerWhereInput
    data: XOR<freelancerUpdateWithoutPaymentsescrowInput, freelancerUncheckedUpdateWithoutPaymentsescrowInput>
  }

  export type freelancerUpdateWithoutPaymentsescrowInput = {
    cognitoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    metamaskid?: NullableStringFieldUpdateOperationsInput | string | null
    milestones?: milestonesUpdateManyWithoutFreelancerNestedInput
    nftcredential?: nftcredentialUpdateManyWithoutFreelancerNestedInput
    proposals?: proposalsUpdateManyWithoutFreelancerNestedInput
    smartcontract?: smartcontractUpdateManyWithoutFreelancerNestedInput
  }

  export type freelancerUncheckedUpdateWithoutPaymentsescrowInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    metamaskid?: NullableStringFieldUpdateOperationsInput | string | null
    milestones?: milestonesUncheckedUpdateManyWithoutFreelancerNestedInput
    nftcredential?: nftcredentialUncheckedUpdateManyWithoutFreelancerNestedInput
    proposals?: proposalsUncheckedUpdateManyWithoutFreelancerNestedInput
    smartcontract?: smartcontractUncheckedUpdateManyWithoutFreelancerNestedInput
  }

  export type freelancerCreateWithoutProposalsInput = {
    cognitoid: string
    name: string
    email: string
    password: string
    metamaskid?: string | null
    milestones?: milestonesCreateNestedManyWithoutFreelancerInput
    nftcredential?: nftcredentialCreateNestedManyWithoutFreelancerInput
    paymentsescrow?: paymentsescrowCreateNestedManyWithoutFreelancerInput
    smartcontract?: smartcontractCreateNestedManyWithoutFreelancerInput
  }

  export type freelancerUncheckedCreateWithoutProposalsInput = {
    id?: number
    cognitoid: string
    name: string
    email: string
    password: string
    metamaskid?: string | null
    milestones?: milestonesUncheckedCreateNestedManyWithoutFreelancerInput
    nftcredential?: nftcredentialUncheckedCreateNestedManyWithoutFreelancerInput
    paymentsescrow?: paymentsescrowUncheckedCreateNestedManyWithoutFreelancerInput
    smartcontract?: smartcontractUncheckedCreateNestedManyWithoutFreelancerInput
  }

  export type freelancerCreateOrConnectWithoutProposalsInput = {
    where: freelancerWhereUniqueInput
    create: XOR<freelancerCreateWithoutProposalsInput, freelancerUncheckedCreateWithoutProposalsInput>
  }

  export type jobpostedCreateWithoutProposalsInput = {
    name: string
    description: string
    tags?: jobpostedCreatetagsInput | string[]
    location?: string | null
    joblevel?: string | null
    budget?: number | null
    contracttohire?: boolean | null
    qualificationspreferred?: string | null
    postingtime?: Date | string | null
    postingdate?: Date | string | null
    validtill?: Date | string | null
    companyname?: string | null
    customizable?: boolean | null
    photourls?: jobpostedCreatephotourlsInput | string[]
    client?: clientCreateNestedOneWithoutJobpostedInput
    message?: messageCreateNestedManyWithoutJobpostedInput
    milestones?: milestonesCreateNestedManyWithoutJobpostedInput
    nftcredential?: nftcredentialCreateNestedManyWithoutJobpostedInput
    smartcontract?: smartcontractCreateNestedManyWithoutJobpostedInput
  }

  export type jobpostedUncheckedCreateWithoutProposalsInput = {
    id?: number
    clientid?: number | null
    name: string
    description: string
    tags?: jobpostedCreatetagsInput | string[]
    location?: string | null
    joblevel?: string | null
    budget?: number | null
    contracttohire?: boolean | null
    qualificationspreferred?: string | null
    postingtime?: Date | string | null
    postingdate?: Date | string | null
    validtill?: Date | string | null
    companyname?: string | null
    customizable?: boolean | null
    photourls?: jobpostedCreatephotourlsInput | string[]
    message?: messageUncheckedCreateNestedManyWithoutJobpostedInput
    milestones?: milestonesUncheckedCreateNestedManyWithoutJobpostedInput
    nftcredential?: nftcredentialUncheckedCreateNestedManyWithoutJobpostedInput
    smartcontract?: smartcontractUncheckedCreateNestedManyWithoutJobpostedInput
  }

  export type jobpostedCreateOrConnectWithoutProposalsInput = {
    where: jobpostedWhereUniqueInput
    create: XOR<jobpostedCreateWithoutProposalsInput, jobpostedUncheckedCreateWithoutProposalsInput>
  }

  export type freelancerUpsertWithoutProposalsInput = {
    update: XOR<freelancerUpdateWithoutProposalsInput, freelancerUncheckedUpdateWithoutProposalsInput>
    create: XOR<freelancerCreateWithoutProposalsInput, freelancerUncheckedCreateWithoutProposalsInput>
    where?: freelancerWhereInput
  }

  export type freelancerUpdateToOneWithWhereWithoutProposalsInput = {
    where?: freelancerWhereInput
    data: XOR<freelancerUpdateWithoutProposalsInput, freelancerUncheckedUpdateWithoutProposalsInput>
  }

  export type freelancerUpdateWithoutProposalsInput = {
    cognitoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    metamaskid?: NullableStringFieldUpdateOperationsInput | string | null
    milestones?: milestonesUpdateManyWithoutFreelancerNestedInput
    nftcredential?: nftcredentialUpdateManyWithoutFreelancerNestedInput
    paymentsescrow?: paymentsescrowUpdateManyWithoutFreelancerNestedInput
    smartcontract?: smartcontractUpdateManyWithoutFreelancerNestedInput
  }

  export type freelancerUncheckedUpdateWithoutProposalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    metamaskid?: NullableStringFieldUpdateOperationsInput | string | null
    milestones?: milestonesUncheckedUpdateManyWithoutFreelancerNestedInput
    nftcredential?: nftcredentialUncheckedUpdateManyWithoutFreelancerNestedInput
    paymentsescrow?: paymentsescrowUncheckedUpdateManyWithoutFreelancerNestedInput
    smartcontract?: smartcontractUncheckedUpdateManyWithoutFreelancerNestedInput
  }

  export type jobpostedUpsertWithoutProposalsInput = {
    update: XOR<jobpostedUpdateWithoutProposalsInput, jobpostedUncheckedUpdateWithoutProposalsInput>
    create: XOR<jobpostedCreateWithoutProposalsInput, jobpostedUncheckedCreateWithoutProposalsInput>
    where?: jobpostedWhereInput
  }

  export type jobpostedUpdateToOneWithWhereWithoutProposalsInput = {
    where?: jobpostedWhereInput
    data: XOR<jobpostedUpdateWithoutProposalsInput, jobpostedUncheckedUpdateWithoutProposalsInput>
  }

  export type jobpostedUpdateWithoutProposalsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: jobpostedUpdatetagsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joblevel?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    contracttohire?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qualificationspreferred?: NullableStringFieldUpdateOperationsInput | string | null
    postingtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postingdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validtill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyname?: NullableStringFieldUpdateOperationsInput | string | null
    customizable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    photourls?: jobpostedUpdatephotourlsInput | string[]
    client?: clientUpdateOneWithoutJobpostedNestedInput
    message?: messageUpdateManyWithoutJobpostedNestedInput
    milestones?: milestonesUpdateManyWithoutJobpostedNestedInput
    nftcredential?: nftcredentialUpdateManyWithoutJobpostedNestedInput
    smartcontract?: smartcontractUpdateManyWithoutJobpostedNestedInput
  }

  export type jobpostedUncheckedUpdateWithoutProposalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientid?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: jobpostedUpdatetagsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joblevel?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    contracttohire?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qualificationspreferred?: NullableStringFieldUpdateOperationsInput | string | null
    postingtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postingdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validtill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyname?: NullableStringFieldUpdateOperationsInput | string | null
    customizable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    photourls?: jobpostedUpdatephotourlsInput | string[]
    message?: messageUncheckedUpdateManyWithoutJobpostedNestedInput
    milestones?: milestonesUncheckedUpdateManyWithoutJobpostedNestedInput
    nftcredential?: nftcredentialUncheckedUpdateManyWithoutJobpostedNestedInput
    smartcontract?: smartcontractUncheckedUpdateManyWithoutJobpostedNestedInput
  }

  export type disputesCreateWithoutSmartcontractInput = {
    raisedby: number
    againstuserid: number
    description?: string | null
    status?: $Enums.dispute_status | null
    resolution?: string | null
    resolutionby?: number | null
    evidenceurls?: disputesCreateevidenceurlsInput | string[]
    createdat?: Date | string | null
    resolvedat?: Date | string | null
    milestones?: milestonesCreateNestedOneWithoutDisputesInput
  }

  export type disputesUncheckedCreateWithoutSmartcontractInput = {
    id?: number
    milestoneid?: number | null
    raisedby: number
    againstuserid: number
    description?: string | null
    status?: $Enums.dispute_status | null
    resolution?: string | null
    resolutionby?: number | null
    evidenceurls?: disputesCreateevidenceurlsInput | string[]
    createdat?: Date | string | null
    resolvedat?: Date | string | null
  }

  export type disputesCreateOrConnectWithoutSmartcontractInput = {
    where: disputesWhereUniqueInput
    create: XOR<disputesCreateWithoutSmartcontractInput, disputesUncheckedCreateWithoutSmartcontractInput>
  }

  export type disputesCreateManySmartcontractInputEnvelope = {
    data: disputesCreateManySmartcontractInput | disputesCreateManySmartcontractInput[]
    skipDuplicates?: boolean
  }

  export type paymentsescrowCreateWithoutSmartcontractInput = {
    type: $Enums.payment_type
    status?: $Enums.payment_status | null
    paymentmethod?: $Enums.payment_method | null
    txhash?: string | null
    amount: number
    initiatedby?: number | null
    notes?: string | null
    timestamp?: Date | string | null
    confirmedat?: Date | string | null
    milestones?: milestonesCreateNestedOneWithoutPaymentsescrowInput
    freelancer?: freelancerCreateNestedOneWithoutPaymentsescrowInput
  }

  export type paymentsescrowUncheckedCreateWithoutSmartcontractInput = {
    id?: number
    milestoneid?: number | null
    type: $Enums.payment_type
    status?: $Enums.payment_status | null
    paymentmethod?: $Enums.payment_method | null
    txhash?: string | null
    amount: number
    initiatedby?: number | null
    receiverid?: number | null
    notes?: string | null
    timestamp?: Date | string | null
    confirmedat?: Date | string | null
  }

  export type paymentsescrowCreateOrConnectWithoutSmartcontractInput = {
    where: paymentsescrowWhereUniqueInput
    create: XOR<paymentsescrowCreateWithoutSmartcontractInput, paymentsescrowUncheckedCreateWithoutSmartcontractInput>
  }

  export type paymentsescrowCreateManySmartcontractInputEnvelope = {
    data: paymentsescrowCreateManySmartcontractInput | paymentsescrowCreateManySmartcontractInput[]
    skipDuplicates?: boolean
  }

  export type clientCreateWithoutSmartcontractInput = {
    cognitoid: string
    name: string
    email: string
    password?: string | null
    metamaskid?: string | null
    jobposted?: jobpostedCreateNestedManyWithoutClientInput
  }

  export type clientUncheckedCreateWithoutSmartcontractInput = {
    id?: number
    cognitoid: string
    name: string
    email: string
    password?: string | null
    metamaskid?: string | null
    jobposted?: jobpostedUncheckedCreateNestedManyWithoutClientInput
  }

  export type clientCreateOrConnectWithoutSmartcontractInput = {
    where: clientWhereUniqueInput
    create: XOR<clientCreateWithoutSmartcontractInput, clientUncheckedCreateWithoutSmartcontractInput>
  }

  export type freelancerCreateWithoutSmartcontractInput = {
    cognitoid: string
    name: string
    email: string
    password: string
    metamaskid?: string | null
    milestones?: milestonesCreateNestedManyWithoutFreelancerInput
    nftcredential?: nftcredentialCreateNestedManyWithoutFreelancerInput
    paymentsescrow?: paymentsescrowCreateNestedManyWithoutFreelancerInput
    proposals?: proposalsCreateNestedManyWithoutFreelancerInput
  }

  export type freelancerUncheckedCreateWithoutSmartcontractInput = {
    id?: number
    cognitoid: string
    name: string
    email: string
    password: string
    metamaskid?: string | null
    milestones?: milestonesUncheckedCreateNestedManyWithoutFreelancerInput
    nftcredential?: nftcredentialUncheckedCreateNestedManyWithoutFreelancerInput
    paymentsescrow?: paymentsescrowUncheckedCreateNestedManyWithoutFreelancerInput
    proposals?: proposalsUncheckedCreateNestedManyWithoutFreelancerInput
  }

  export type freelancerCreateOrConnectWithoutSmartcontractInput = {
    where: freelancerWhereUniqueInput
    create: XOR<freelancerCreateWithoutSmartcontractInput, freelancerUncheckedCreateWithoutSmartcontractInput>
  }

  export type jobpostedCreateWithoutSmartcontractInput = {
    name: string
    description: string
    tags?: jobpostedCreatetagsInput | string[]
    location?: string | null
    joblevel?: string | null
    budget?: number | null
    contracttohire?: boolean | null
    qualificationspreferred?: string | null
    postingtime?: Date | string | null
    postingdate?: Date | string | null
    validtill?: Date | string | null
    companyname?: string | null
    customizable?: boolean | null
    photourls?: jobpostedCreatephotourlsInput | string[]
    client?: clientCreateNestedOneWithoutJobpostedInput
    message?: messageCreateNestedManyWithoutJobpostedInput
    milestones?: milestonesCreateNestedManyWithoutJobpostedInput
    nftcredential?: nftcredentialCreateNestedManyWithoutJobpostedInput
    proposals?: proposalsCreateNestedManyWithoutJobpostedInput
  }

  export type jobpostedUncheckedCreateWithoutSmartcontractInput = {
    id?: number
    clientid?: number | null
    name: string
    description: string
    tags?: jobpostedCreatetagsInput | string[]
    location?: string | null
    joblevel?: string | null
    budget?: number | null
    contracttohire?: boolean | null
    qualificationspreferred?: string | null
    postingtime?: Date | string | null
    postingdate?: Date | string | null
    validtill?: Date | string | null
    companyname?: string | null
    customizable?: boolean | null
    photourls?: jobpostedCreatephotourlsInput | string[]
    message?: messageUncheckedCreateNestedManyWithoutJobpostedInput
    milestones?: milestonesUncheckedCreateNestedManyWithoutJobpostedInput
    nftcredential?: nftcredentialUncheckedCreateNestedManyWithoutJobpostedInput
    proposals?: proposalsUncheckedCreateNestedManyWithoutJobpostedInput
  }

  export type jobpostedCreateOrConnectWithoutSmartcontractInput = {
    where: jobpostedWhereUniqueInput
    create: XOR<jobpostedCreateWithoutSmartcontractInput, jobpostedUncheckedCreateWithoutSmartcontractInput>
  }

  export type disputesUpsertWithWhereUniqueWithoutSmartcontractInput = {
    where: disputesWhereUniqueInput
    update: XOR<disputesUpdateWithoutSmartcontractInput, disputesUncheckedUpdateWithoutSmartcontractInput>
    create: XOR<disputesCreateWithoutSmartcontractInput, disputesUncheckedCreateWithoutSmartcontractInput>
  }

  export type disputesUpdateWithWhereUniqueWithoutSmartcontractInput = {
    where: disputesWhereUniqueInput
    data: XOR<disputesUpdateWithoutSmartcontractInput, disputesUncheckedUpdateWithoutSmartcontractInput>
  }

  export type disputesUpdateManyWithWhereWithoutSmartcontractInput = {
    where: disputesScalarWhereInput
    data: XOR<disputesUpdateManyMutationInput, disputesUncheckedUpdateManyWithoutSmartcontractInput>
  }

  export type paymentsescrowUpsertWithWhereUniqueWithoutSmartcontractInput = {
    where: paymentsescrowWhereUniqueInput
    update: XOR<paymentsescrowUpdateWithoutSmartcontractInput, paymentsescrowUncheckedUpdateWithoutSmartcontractInput>
    create: XOR<paymentsescrowCreateWithoutSmartcontractInput, paymentsescrowUncheckedCreateWithoutSmartcontractInput>
  }

  export type paymentsescrowUpdateWithWhereUniqueWithoutSmartcontractInput = {
    where: paymentsescrowWhereUniqueInput
    data: XOR<paymentsescrowUpdateWithoutSmartcontractInput, paymentsescrowUncheckedUpdateWithoutSmartcontractInput>
  }

  export type paymentsescrowUpdateManyWithWhereWithoutSmartcontractInput = {
    where: paymentsescrowScalarWhereInput
    data: XOR<paymentsescrowUpdateManyMutationInput, paymentsescrowUncheckedUpdateManyWithoutSmartcontractInput>
  }

  export type clientUpsertWithoutSmartcontractInput = {
    update: XOR<clientUpdateWithoutSmartcontractInput, clientUncheckedUpdateWithoutSmartcontractInput>
    create: XOR<clientCreateWithoutSmartcontractInput, clientUncheckedCreateWithoutSmartcontractInput>
    where?: clientWhereInput
  }

  export type clientUpdateToOneWithWhereWithoutSmartcontractInput = {
    where?: clientWhereInput
    data: XOR<clientUpdateWithoutSmartcontractInput, clientUncheckedUpdateWithoutSmartcontractInput>
  }

  export type clientUpdateWithoutSmartcontractInput = {
    cognitoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    metamaskid?: NullableStringFieldUpdateOperationsInput | string | null
    jobposted?: jobpostedUpdateManyWithoutClientNestedInput
  }

  export type clientUncheckedUpdateWithoutSmartcontractInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    metamaskid?: NullableStringFieldUpdateOperationsInput | string | null
    jobposted?: jobpostedUncheckedUpdateManyWithoutClientNestedInput
  }

  export type freelancerUpsertWithoutSmartcontractInput = {
    update: XOR<freelancerUpdateWithoutSmartcontractInput, freelancerUncheckedUpdateWithoutSmartcontractInput>
    create: XOR<freelancerCreateWithoutSmartcontractInput, freelancerUncheckedCreateWithoutSmartcontractInput>
    where?: freelancerWhereInput
  }

  export type freelancerUpdateToOneWithWhereWithoutSmartcontractInput = {
    where?: freelancerWhereInput
    data: XOR<freelancerUpdateWithoutSmartcontractInput, freelancerUncheckedUpdateWithoutSmartcontractInput>
  }

  export type freelancerUpdateWithoutSmartcontractInput = {
    cognitoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    metamaskid?: NullableStringFieldUpdateOperationsInput | string | null
    milestones?: milestonesUpdateManyWithoutFreelancerNestedInput
    nftcredential?: nftcredentialUpdateManyWithoutFreelancerNestedInput
    paymentsescrow?: paymentsescrowUpdateManyWithoutFreelancerNestedInput
    proposals?: proposalsUpdateManyWithoutFreelancerNestedInput
  }

  export type freelancerUncheckedUpdateWithoutSmartcontractInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    metamaskid?: NullableStringFieldUpdateOperationsInput | string | null
    milestones?: milestonesUncheckedUpdateManyWithoutFreelancerNestedInput
    nftcredential?: nftcredentialUncheckedUpdateManyWithoutFreelancerNestedInput
    paymentsescrow?: paymentsescrowUncheckedUpdateManyWithoutFreelancerNestedInput
    proposals?: proposalsUncheckedUpdateManyWithoutFreelancerNestedInput
  }

  export type jobpostedUpsertWithoutSmartcontractInput = {
    update: XOR<jobpostedUpdateWithoutSmartcontractInput, jobpostedUncheckedUpdateWithoutSmartcontractInput>
    create: XOR<jobpostedCreateWithoutSmartcontractInput, jobpostedUncheckedCreateWithoutSmartcontractInput>
    where?: jobpostedWhereInput
  }

  export type jobpostedUpdateToOneWithWhereWithoutSmartcontractInput = {
    where?: jobpostedWhereInput
    data: XOR<jobpostedUpdateWithoutSmartcontractInput, jobpostedUncheckedUpdateWithoutSmartcontractInput>
  }

  export type jobpostedUpdateWithoutSmartcontractInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: jobpostedUpdatetagsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joblevel?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    contracttohire?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qualificationspreferred?: NullableStringFieldUpdateOperationsInput | string | null
    postingtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postingdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validtill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyname?: NullableStringFieldUpdateOperationsInput | string | null
    customizable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    photourls?: jobpostedUpdatephotourlsInput | string[]
    client?: clientUpdateOneWithoutJobpostedNestedInput
    message?: messageUpdateManyWithoutJobpostedNestedInput
    milestones?: milestonesUpdateManyWithoutJobpostedNestedInput
    nftcredential?: nftcredentialUpdateManyWithoutJobpostedNestedInput
    proposals?: proposalsUpdateManyWithoutJobpostedNestedInput
  }

  export type jobpostedUncheckedUpdateWithoutSmartcontractInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientid?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: jobpostedUpdatetagsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joblevel?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    contracttohire?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qualificationspreferred?: NullableStringFieldUpdateOperationsInput | string | null
    postingtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postingdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validtill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyname?: NullableStringFieldUpdateOperationsInput | string | null
    customizable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    photourls?: jobpostedUpdatephotourlsInput | string[]
    message?: messageUncheckedUpdateManyWithoutJobpostedNestedInput
    milestones?: milestonesUncheckedUpdateManyWithoutJobpostedNestedInput
    nftcredential?: nftcredentialUncheckedUpdateManyWithoutJobpostedNestedInput
    proposals?: proposalsUncheckedUpdateManyWithoutJobpostedNestedInput
  }

  export type jobpostedCreateManyClientInput = {
    id?: number
    name: string
    description: string
    tags?: jobpostedCreatetagsInput | string[]
    location?: string | null
    joblevel?: string | null
    budget?: number | null
    contracttohire?: boolean | null
    qualificationspreferred?: string | null
    postingtime?: Date | string | null
    postingdate?: Date | string | null
    validtill?: Date | string | null
    companyname?: string | null
    customizable?: boolean | null
    photourls?: jobpostedCreatephotourlsInput | string[]
  }

  export type smartcontractCreateManyClientInput = {
    id?: number
    jobid?: number | null
    freelancerid?: number | null
    startdate: Date | string
    enddate?: Date | string | null
    escrowamount: number
    smartcontractaddress?: string | null
    isactive?: boolean | null
    iscompleted?: boolean | null
    isdisputed?: boolean | null
    platformfee?: number | null
    paymentmethod?: string | null
    terminationreason?: string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
  }

  export type jobpostedUpdateWithoutClientInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: jobpostedUpdatetagsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joblevel?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    contracttohire?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qualificationspreferred?: NullableStringFieldUpdateOperationsInput | string | null
    postingtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postingdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validtill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyname?: NullableStringFieldUpdateOperationsInput | string | null
    customizable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    photourls?: jobpostedUpdatephotourlsInput | string[]
    message?: messageUpdateManyWithoutJobpostedNestedInput
    milestones?: milestonesUpdateManyWithoutJobpostedNestedInput
    nftcredential?: nftcredentialUpdateManyWithoutJobpostedNestedInput
    proposals?: proposalsUpdateManyWithoutJobpostedNestedInput
    smartcontract?: smartcontractUpdateManyWithoutJobpostedNestedInput
  }

  export type jobpostedUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: jobpostedUpdatetagsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joblevel?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    contracttohire?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qualificationspreferred?: NullableStringFieldUpdateOperationsInput | string | null
    postingtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postingdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validtill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyname?: NullableStringFieldUpdateOperationsInput | string | null
    customizable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    photourls?: jobpostedUpdatephotourlsInput | string[]
    message?: messageUncheckedUpdateManyWithoutJobpostedNestedInput
    milestones?: milestonesUncheckedUpdateManyWithoutJobpostedNestedInput
    nftcredential?: nftcredentialUncheckedUpdateManyWithoutJobpostedNestedInput
    proposals?: proposalsUncheckedUpdateManyWithoutJobpostedNestedInput
    smartcontract?: smartcontractUncheckedUpdateManyWithoutJobpostedNestedInput
  }

  export type jobpostedUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: jobpostedUpdatetagsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joblevel?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    contracttohire?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qualificationspreferred?: NullableStringFieldUpdateOperationsInput | string | null
    postingtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postingdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validtill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyname?: NullableStringFieldUpdateOperationsInput | string | null
    customizable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    photourls?: jobpostedUpdatephotourlsInput | string[]
  }

  export type smartcontractUpdateWithoutClientInput = {
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escrowamount?: IntFieldUpdateOperationsInput | number
    smartcontractaddress?: NullableStringFieldUpdateOperationsInput | string | null
    isactive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    iscompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isdisputed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    platformfee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentmethod?: NullableStringFieldUpdateOperationsInput | string | null
    terminationreason?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disputes?: disputesUpdateManyWithoutSmartcontractNestedInput
    paymentsescrow?: paymentsescrowUpdateManyWithoutSmartcontractNestedInput
    freelancer?: freelancerUpdateOneWithoutSmartcontractNestedInput
    jobposted?: jobpostedUpdateOneWithoutSmartcontractNestedInput
  }

  export type smartcontractUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobid?: NullableIntFieldUpdateOperationsInput | number | null
    freelancerid?: NullableIntFieldUpdateOperationsInput | number | null
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escrowamount?: IntFieldUpdateOperationsInput | number
    smartcontractaddress?: NullableStringFieldUpdateOperationsInput | string | null
    isactive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    iscompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isdisputed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    platformfee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentmethod?: NullableStringFieldUpdateOperationsInput | string | null
    terminationreason?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disputes?: disputesUncheckedUpdateManyWithoutSmartcontractNestedInput
    paymentsescrow?: paymentsescrowUncheckedUpdateManyWithoutSmartcontractNestedInput
  }

  export type smartcontractUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobid?: NullableIntFieldUpdateOperationsInput | number | null
    freelancerid?: NullableIntFieldUpdateOperationsInput | number | null
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escrowamount?: IntFieldUpdateOperationsInput | number
    smartcontractaddress?: NullableStringFieldUpdateOperationsInput | string | null
    isactive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    iscompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isdisputed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    platformfee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentmethod?: NullableStringFieldUpdateOperationsInput | string | null
    terminationreason?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type milestonesCreateManyFreelancerInput = {
    id?: number
    jobid?: number | null
    title: string
    description?: string | null
    duedate?: Date | string | null
    amount: number
    status?: $Enums.milestone_status | null
  }

  export type nftcredentialCreateManyFreelancerInput = {
    id?: number
    jobid?: number | null
    tokenid?: number | null
    rating?: number | null
    testimonial?: string | null
    isminted?: boolean | null
    txhash?: string | null
    createdat?: Date | string | null
  }

  export type paymentsescrowCreateManyFreelancerInput = {
    id?: number
    contractid?: number | null
    milestoneid?: number | null
    type: $Enums.payment_type
    status?: $Enums.payment_status | null
    paymentmethod?: $Enums.payment_method | null
    txhash?: string | null
    amount: number
    initiatedby?: number | null
    notes?: string | null
    timestamp?: Date | string | null
    confirmedat?: Date | string | null
  }

  export type proposalsCreateManyFreelancerInput = {
    id?: number
    jobid?: number | null
    coverletter?: string | null
    budgetquoted?: number | null
    proposedtimeline?: string | null
    status?: $Enums.proposal_status | null
    submittedat?: Date | string | null
  }

  export type smartcontractCreateManyFreelancerInput = {
    id?: number
    jobid?: number | null
    clientid?: number | null
    startdate: Date | string
    enddate?: Date | string | null
    escrowamount: number
    smartcontractaddress?: string | null
    isactive?: boolean | null
    iscompleted?: boolean | null
    isdisputed?: boolean | null
    platformfee?: number | null
    paymentmethod?: string | null
    terminationreason?: string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
  }

  export type milestonesUpdateWithoutFreelancerInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duedate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: NullableEnummilestone_statusFieldUpdateOperationsInput | $Enums.milestone_status | null
    disputes?: disputesUpdateManyWithoutMilestonesNestedInput
    jobposted?: jobpostedUpdateOneWithoutMilestonesNestedInput
    paymentsescrow?: paymentsescrowUpdateManyWithoutMilestonesNestedInput
  }

  export type milestonesUncheckedUpdateWithoutFreelancerInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobid?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duedate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: NullableEnummilestone_statusFieldUpdateOperationsInput | $Enums.milestone_status | null
    disputes?: disputesUncheckedUpdateManyWithoutMilestonesNestedInput
    paymentsescrow?: paymentsescrowUncheckedUpdateManyWithoutMilestonesNestedInput
  }

  export type milestonesUncheckedUpdateManyWithoutFreelancerInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobid?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duedate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: NullableEnummilestone_statusFieldUpdateOperationsInput | $Enums.milestone_status | null
  }

  export type nftcredentialUpdateWithoutFreelancerInput = {
    tokenid?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    testimonial?: NullableStringFieldUpdateOperationsInput | string | null
    isminted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    txhash?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobposted?: jobpostedUpdateOneWithoutNftcredentialNestedInput
  }

  export type nftcredentialUncheckedUpdateWithoutFreelancerInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobid?: NullableIntFieldUpdateOperationsInput | number | null
    tokenid?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    testimonial?: NullableStringFieldUpdateOperationsInput | string | null
    isminted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    txhash?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type nftcredentialUncheckedUpdateManyWithoutFreelancerInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobid?: NullableIntFieldUpdateOperationsInput | number | null
    tokenid?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    testimonial?: NullableStringFieldUpdateOperationsInput | string | null
    isminted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    txhash?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsescrowUpdateWithoutFreelancerInput = {
    type?: Enumpayment_typeFieldUpdateOperationsInput | $Enums.payment_type
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    paymentmethod?: NullableEnumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method | null
    txhash?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    initiatedby?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    smartcontract?: smartcontractUpdateOneWithoutPaymentsescrowNestedInput
    milestones?: milestonesUpdateOneWithoutPaymentsescrowNestedInput
  }

  export type paymentsescrowUncheckedUpdateWithoutFreelancerInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractid?: NullableIntFieldUpdateOperationsInput | number | null
    milestoneid?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumpayment_typeFieldUpdateOperationsInput | $Enums.payment_type
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    paymentmethod?: NullableEnumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method | null
    txhash?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    initiatedby?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsescrowUncheckedUpdateManyWithoutFreelancerInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractid?: NullableIntFieldUpdateOperationsInput | number | null
    milestoneid?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumpayment_typeFieldUpdateOperationsInput | $Enums.payment_type
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    paymentmethod?: NullableEnumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method | null
    txhash?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    initiatedby?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type proposalsUpdateWithoutFreelancerInput = {
    coverletter?: NullableStringFieldUpdateOperationsInput | string | null
    budgetquoted?: NullableIntFieldUpdateOperationsInput | number | null
    proposedtimeline?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumproposal_statusFieldUpdateOperationsInput | $Enums.proposal_status | null
    submittedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobposted?: jobpostedUpdateOneWithoutProposalsNestedInput
  }

  export type proposalsUncheckedUpdateWithoutFreelancerInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobid?: NullableIntFieldUpdateOperationsInput | number | null
    coverletter?: NullableStringFieldUpdateOperationsInput | string | null
    budgetquoted?: NullableIntFieldUpdateOperationsInput | number | null
    proposedtimeline?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumproposal_statusFieldUpdateOperationsInput | $Enums.proposal_status | null
    submittedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type proposalsUncheckedUpdateManyWithoutFreelancerInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobid?: NullableIntFieldUpdateOperationsInput | number | null
    coverletter?: NullableStringFieldUpdateOperationsInput | string | null
    budgetquoted?: NullableIntFieldUpdateOperationsInput | number | null
    proposedtimeline?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumproposal_statusFieldUpdateOperationsInput | $Enums.proposal_status | null
    submittedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type smartcontractUpdateWithoutFreelancerInput = {
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escrowamount?: IntFieldUpdateOperationsInput | number
    smartcontractaddress?: NullableStringFieldUpdateOperationsInput | string | null
    isactive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    iscompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isdisputed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    platformfee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentmethod?: NullableStringFieldUpdateOperationsInput | string | null
    terminationreason?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disputes?: disputesUpdateManyWithoutSmartcontractNestedInput
    paymentsescrow?: paymentsescrowUpdateManyWithoutSmartcontractNestedInput
    client?: clientUpdateOneWithoutSmartcontractNestedInput
    jobposted?: jobpostedUpdateOneWithoutSmartcontractNestedInput
  }

  export type smartcontractUncheckedUpdateWithoutFreelancerInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobid?: NullableIntFieldUpdateOperationsInput | number | null
    clientid?: NullableIntFieldUpdateOperationsInput | number | null
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escrowamount?: IntFieldUpdateOperationsInput | number
    smartcontractaddress?: NullableStringFieldUpdateOperationsInput | string | null
    isactive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    iscompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isdisputed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    platformfee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentmethod?: NullableStringFieldUpdateOperationsInput | string | null
    terminationreason?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disputes?: disputesUncheckedUpdateManyWithoutSmartcontractNestedInput
    paymentsescrow?: paymentsescrowUncheckedUpdateManyWithoutSmartcontractNestedInput
  }

  export type smartcontractUncheckedUpdateManyWithoutFreelancerInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobid?: NullableIntFieldUpdateOperationsInput | number | null
    clientid?: NullableIntFieldUpdateOperationsInput | number | null
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escrowamount?: IntFieldUpdateOperationsInput | number
    smartcontractaddress?: NullableStringFieldUpdateOperationsInput | string | null
    isactive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    iscompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isdisputed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    platformfee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentmethod?: NullableStringFieldUpdateOperationsInput | string | null
    terminationreason?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messageCreateManyJobpostedInput = {
    id?: number
    senderid: number
    receiverid: number
    messagetext?: string | null
    messagetype?: $Enums.message_type | null
    attachmenturl?: string | null
    timestamp?: Date | string | null
    isread?: boolean | null
    issystem?: boolean | null
  }

  export type milestonesCreateManyJobpostedInput = {
    id?: number
    freelancerid?: number | null
    title: string
    description?: string | null
    duedate?: Date | string | null
    amount: number
    status?: $Enums.milestone_status | null
  }

  export type nftcredentialCreateManyJobpostedInput = {
    id?: number
    freelancerid?: number | null
    tokenid?: number | null
    rating?: number | null
    testimonial?: string | null
    isminted?: boolean | null
    txhash?: string | null
    createdat?: Date | string | null
  }

  export type proposalsCreateManyJobpostedInput = {
    id?: number
    freelancerid?: number | null
    coverletter?: string | null
    budgetquoted?: number | null
    proposedtimeline?: string | null
    status?: $Enums.proposal_status | null
    submittedat?: Date | string | null
  }

  export type smartcontractCreateManyJobpostedInput = {
    id?: number
    freelancerid?: number | null
    clientid?: number | null
    startdate: Date | string
    enddate?: Date | string | null
    escrowamount: number
    smartcontractaddress?: string | null
    isactive?: boolean | null
    iscompleted?: boolean | null
    isdisputed?: boolean | null
    platformfee?: number | null
    paymentmethod?: string | null
    terminationreason?: string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
  }

  export type messageUpdateWithoutJobpostedInput = {
    senderid?: IntFieldUpdateOperationsInput | number
    receiverid?: IntFieldUpdateOperationsInput | number
    messagetext?: NullableStringFieldUpdateOperationsInput | string | null
    messagetype?: NullableEnummessage_typeFieldUpdateOperationsInput | $Enums.message_type | null
    attachmenturl?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isread?: NullableBoolFieldUpdateOperationsInput | boolean | null
    issystem?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type messageUncheckedUpdateWithoutJobpostedInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderid?: IntFieldUpdateOperationsInput | number
    receiverid?: IntFieldUpdateOperationsInput | number
    messagetext?: NullableStringFieldUpdateOperationsInput | string | null
    messagetype?: NullableEnummessage_typeFieldUpdateOperationsInput | $Enums.message_type | null
    attachmenturl?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isread?: NullableBoolFieldUpdateOperationsInput | boolean | null
    issystem?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type messageUncheckedUpdateManyWithoutJobpostedInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderid?: IntFieldUpdateOperationsInput | number
    receiverid?: IntFieldUpdateOperationsInput | number
    messagetext?: NullableStringFieldUpdateOperationsInput | string | null
    messagetype?: NullableEnummessage_typeFieldUpdateOperationsInput | $Enums.message_type | null
    attachmenturl?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isread?: NullableBoolFieldUpdateOperationsInput | boolean | null
    issystem?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type milestonesUpdateWithoutJobpostedInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duedate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: NullableEnummilestone_statusFieldUpdateOperationsInput | $Enums.milestone_status | null
    disputes?: disputesUpdateManyWithoutMilestonesNestedInput
    freelancer?: freelancerUpdateOneWithoutMilestonesNestedInput
    paymentsescrow?: paymentsescrowUpdateManyWithoutMilestonesNestedInput
  }

  export type milestonesUncheckedUpdateWithoutJobpostedInput = {
    id?: IntFieldUpdateOperationsInput | number
    freelancerid?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duedate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: NullableEnummilestone_statusFieldUpdateOperationsInput | $Enums.milestone_status | null
    disputes?: disputesUncheckedUpdateManyWithoutMilestonesNestedInput
    paymentsescrow?: paymentsescrowUncheckedUpdateManyWithoutMilestonesNestedInput
  }

  export type milestonesUncheckedUpdateManyWithoutJobpostedInput = {
    id?: IntFieldUpdateOperationsInput | number
    freelancerid?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duedate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: NullableEnummilestone_statusFieldUpdateOperationsInput | $Enums.milestone_status | null
  }

  export type nftcredentialUpdateWithoutJobpostedInput = {
    tokenid?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    testimonial?: NullableStringFieldUpdateOperationsInput | string | null
    isminted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    txhash?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    freelancer?: freelancerUpdateOneWithoutNftcredentialNestedInput
  }

  export type nftcredentialUncheckedUpdateWithoutJobpostedInput = {
    id?: IntFieldUpdateOperationsInput | number
    freelancerid?: NullableIntFieldUpdateOperationsInput | number | null
    tokenid?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    testimonial?: NullableStringFieldUpdateOperationsInput | string | null
    isminted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    txhash?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type nftcredentialUncheckedUpdateManyWithoutJobpostedInput = {
    id?: IntFieldUpdateOperationsInput | number
    freelancerid?: NullableIntFieldUpdateOperationsInput | number | null
    tokenid?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    testimonial?: NullableStringFieldUpdateOperationsInput | string | null
    isminted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    txhash?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type proposalsUpdateWithoutJobpostedInput = {
    coverletter?: NullableStringFieldUpdateOperationsInput | string | null
    budgetquoted?: NullableIntFieldUpdateOperationsInput | number | null
    proposedtimeline?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumproposal_statusFieldUpdateOperationsInput | $Enums.proposal_status | null
    submittedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    freelancer?: freelancerUpdateOneWithoutProposalsNestedInput
  }

  export type proposalsUncheckedUpdateWithoutJobpostedInput = {
    id?: IntFieldUpdateOperationsInput | number
    freelancerid?: NullableIntFieldUpdateOperationsInput | number | null
    coverletter?: NullableStringFieldUpdateOperationsInput | string | null
    budgetquoted?: NullableIntFieldUpdateOperationsInput | number | null
    proposedtimeline?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumproposal_statusFieldUpdateOperationsInput | $Enums.proposal_status | null
    submittedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type proposalsUncheckedUpdateManyWithoutJobpostedInput = {
    id?: IntFieldUpdateOperationsInput | number
    freelancerid?: NullableIntFieldUpdateOperationsInput | number | null
    coverletter?: NullableStringFieldUpdateOperationsInput | string | null
    budgetquoted?: NullableIntFieldUpdateOperationsInput | number | null
    proposedtimeline?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumproposal_statusFieldUpdateOperationsInput | $Enums.proposal_status | null
    submittedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type smartcontractUpdateWithoutJobpostedInput = {
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escrowamount?: IntFieldUpdateOperationsInput | number
    smartcontractaddress?: NullableStringFieldUpdateOperationsInput | string | null
    isactive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    iscompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isdisputed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    platformfee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentmethod?: NullableStringFieldUpdateOperationsInput | string | null
    terminationreason?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disputes?: disputesUpdateManyWithoutSmartcontractNestedInput
    paymentsescrow?: paymentsescrowUpdateManyWithoutSmartcontractNestedInput
    client?: clientUpdateOneWithoutSmartcontractNestedInput
    freelancer?: freelancerUpdateOneWithoutSmartcontractNestedInput
  }

  export type smartcontractUncheckedUpdateWithoutJobpostedInput = {
    id?: IntFieldUpdateOperationsInput | number
    freelancerid?: NullableIntFieldUpdateOperationsInput | number | null
    clientid?: NullableIntFieldUpdateOperationsInput | number | null
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escrowamount?: IntFieldUpdateOperationsInput | number
    smartcontractaddress?: NullableStringFieldUpdateOperationsInput | string | null
    isactive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    iscompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isdisputed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    platformfee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentmethod?: NullableStringFieldUpdateOperationsInput | string | null
    terminationreason?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disputes?: disputesUncheckedUpdateManyWithoutSmartcontractNestedInput
    paymentsescrow?: paymentsescrowUncheckedUpdateManyWithoutSmartcontractNestedInput
  }

  export type smartcontractUncheckedUpdateManyWithoutJobpostedInput = {
    id?: IntFieldUpdateOperationsInput | number
    freelancerid?: NullableIntFieldUpdateOperationsInput | number | null
    clientid?: NullableIntFieldUpdateOperationsInput | number | null
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escrowamount?: IntFieldUpdateOperationsInput | number
    smartcontractaddress?: NullableStringFieldUpdateOperationsInput | string | null
    isactive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    iscompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isdisputed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    platformfee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentmethod?: NullableStringFieldUpdateOperationsInput | string | null
    terminationreason?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type disputesCreateManyMilestonesInput = {
    id?: number
    contractid?: number | null
    raisedby: number
    againstuserid: number
    description?: string | null
    status?: $Enums.dispute_status | null
    resolution?: string | null
    resolutionby?: number | null
    evidenceurls?: disputesCreateevidenceurlsInput | string[]
    createdat?: Date | string | null
    resolvedat?: Date | string | null
  }

  export type paymentsescrowCreateManyMilestonesInput = {
    id?: number
    contractid?: number | null
    type: $Enums.payment_type
    status?: $Enums.payment_status | null
    paymentmethod?: $Enums.payment_method | null
    txhash?: string | null
    amount: number
    initiatedby?: number | null
    receiverid?: number | null
    notes?: string | null
    timestamp?: Date | string | null
    confirmedat?: Date | string | null
  }

  export type disputesUpdateWithoutMilestonesInput = {
    raisedby?: IntFieldUpdateOperationsInput | number
    againstuserid?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumdispute_statusFieldUpdateOperationsInput | $Enums.dispute_status | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionby?: NullableIntFieldUpdateOperationsInput | number | null
    evidenceurls?: disputesUpdateevidenceurlsInput | string[]
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    smartcontract?: smartcontractUpdateOneWithoutDisputesNestedInput
  }

  export type disputesUncheckedUpdateWithoutMilestonesInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractid?: NullableIntFieldUpdateOperationsInput | number | null
    raisedby?: IntFieldUpdateOperationsInput | number
    againstuserid?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumdispute_statusFieldUpdateOperationsInput | $Enums.dispute_status | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionby?: NullableIntFieldUpdateOperationsInput | number | null
    evidenceurls?: disputesUpdateevidenceurlsInput | string[]
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type disputesUncheckedUpdateManyWithoutMilestonesInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractid?: NullableIntFieldUpdateOperationsInput | number | null
    raisedby?: IntFieldUpdateOperationsInput | number
    againstuserid?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumdispute_statusFieldUpdateOperationsInput | $Enums.dispute_status | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionby?: NullableIntFieldUpdateOperationsInput | number | null
    evidenceurls?: disputesUpdateevidenceurlsInput | string[]
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsescrowUpdateWithoutMilestonesInput = {
    type?: Enumpayment_typeFieldUpdateOperationsInput | $Enums.payment_type
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    paymentmethod?: NullableEnumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method | null
    txhash?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    initiatedby?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    smartcontract?: smartcontractUpdateOneWithoutPaymentsescrowNestedInput
    freelancer?: freelancerUpdateOneWithoutPaymentsescrowNestedInput
  }

  export type paymentsescrowUncheckedUpdateWithoutMilestonesInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractid?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumpayment_typeFieldUpdateOperationsInput | $Enums.payment_type
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    paymentmethod?: NullableEnumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method | null
    txhash?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    initiatedby?: NullableIntFieldUpdateOperationsInput | number | null
    receiverid?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsescrowUncheckedUpdateManyWithoutMilestonesInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractid?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumpayment_typeFieldUpdateOperationsInput | $Enums.payment_type
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    paymentmethod?: NullableEnumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method | null
    txhash?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    initiatedby?: NullableIntFieldUpdateOperationsInput | number | null
    receiverid?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type disputesCreateManySmartcontractInput = {
    id?: number
    milestoneid?: number | null
    raisedby: number
    againstuserid: number
    description?: string | null
    status?: $Enums.dispute_status | null
    resolution?: string | null
    resolutionby?: number | null
    evidenceurls?: disputesCreateevidenceurlsInput | string[]
    createdat?: Date | string | null
    resolvedat?: Date | string | null
  }

  export type paymentsescrowCreateManySmartcontractInput = {
    id?: number
    milestoneid?: number | null
    type: $Enums.payment_type
    status?: $Enums.payment_status | null
    paymentmethod?: $Enums.payment_method | null
    txhash?: string | null
    amount: number
    initiatedby?: number | null
    receiverid?: number | null
    notes?: string | null
    timestamp?: Date | string | null
    confirmedat?: Date | string | null
  }

  export type disputesUpdateWithoutSmartcontractInput = {
    raisedby?: IntFieldUpdateOperationsInput | number
    againstuserid?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumdispute_statusFieldUpdateOperationsInput | $Enums.dispute_status | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionby?: NullableIntFieldUpdateOperationsInput | number | null
    evidenceurls?: disputesUpdateevidenceurlsInput | string[]
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    milestones?: milestonesUpdateOneWithoutDisputesNestedInput
  }

  export type disputesUncheckedUpdateWithoutSmartcontractInput = {
    id?: IntFieldUpdateOperationsInput | number
    milestoneid?: NullableIntFieldUpdateOperationsInput | number | null
    raisedby?: IntFieldUpdateOperationsInput | number
    againstuserid?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumdispute_statusFieldUpdateOperationsInput | $Enums.dispute_status | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionby?: NullableIntFieldUpdateOperationsInput | number | null
    evidenceurls?: disputesUpdateevidenceurlsInput | string[]
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type disputesUncheckedUpdateManyWithoutSmartcontractInput = {
    id?: IntFieldUpdateOperationsInput | number
    milestoneid?: NullableIntFieldUpdateOperationsInput | number | null
    raisedby?: IntFieldUpdateOperationsInput | number
    againstuserid?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumdispute_statusFieldUpdateOperationsInput | $Enums.dispute_status | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionby?: NullableIntFieldUpdateOperationsInput | number | null
    evidenceurls?: disputesUpdateevidenceurlsInput | string[]
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsescrowUpdateWithoutSmartcontractInput = {
    type?: Enumpayment_typeFieldUpdateOperationsInput | $Enums.payment_type
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    paymentmethod?: NullableEnumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method | null
    txhash?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    initiatedby?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    milestones?: milestonesUpdateOneWithoutPaymentsescrowNestedInput
    freelancer?: freelancerUpdateOneWithoutPaymentsescrowNestedInput
  }

  export type paymentsescrowUncheckedUpdateWithoutSmartcontractInput = {
    id?: IntFieldUpdateOperationsInput | number
    milestoneid?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumpayment_typeFieldUpdateOperationsInput | $Enums.payment_type
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    paymentmethod?: NullableEnumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method | null
    txhash?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    initiatedby?: NullableIntFieldUpdateOperationsInput | number | null
    receiverid?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsescrowUncheckedUpdateManyWithoutSmartcontractInput = {
    id?: IntFieldUpdateOperationsInput | number
    milestoneid?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumpayment_typeFieldUpdateOperationsInput | $Enums.payment_type
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    paymentmethod?: NullableEnumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method | null
    txhash?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    initiatedby?: NullableIntFieldUpdateOperationsInput | number | null
    receiverid?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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