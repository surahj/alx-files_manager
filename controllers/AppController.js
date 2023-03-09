import redisClient from '../utils/redis';
import dbClient from '../utils/db';

exports.getStatus = (_req, res) => {
  const json = {
    redis: redisClient.isAlive(),
    db: dbClient.isAlive(),
  };
  res.status(200).send(json);
};

exports.getStats = async (_req, res) => {
  const json = {
    users: await dbClient.nbUsers(),
    files: await dbClient.nbFiles(),
  };
  res.status(200).send(json);
};
