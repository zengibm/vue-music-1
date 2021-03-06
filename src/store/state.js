import {playMode} from 'common/js/config'
import {loadSearch} from 'common/js/cache'

// 只存放最基础的数据
const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [], // 真实播放列表
  sequenceList: [], // 播放清单
  mode: playMode.sequence, // 语义化
  currentIndex: -1, // 当前索引
  disc: {},
  rankItem: {},
  searchHistory: loadSearch()
}

export default state