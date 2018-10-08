const RankModel = require('./model');

const getRank = () => {
  const rank = new RankModel(1, 'test', 'test description', 0);
  const rank1 = new RankModel(1, 'test', 'ss description', 1);
  const rank2 = new RankModel(1, 'test', 'aa description', 2);
  const listRanks = [rank, rank1, rank2];

  return listRanks;
}

module.exports = getRank;
