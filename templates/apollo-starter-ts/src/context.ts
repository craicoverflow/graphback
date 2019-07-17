import express from 'express'
import { RedisPubSub } from 'graphql-redis-subscriptions';
import knex from 'knex'

export interface Context {
  pubsub: RedisPubSub
  req: express.Request
  db: knex<any, unknown[]>
}
