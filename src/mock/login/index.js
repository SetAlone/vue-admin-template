import Mock from 'mockjs'

Mock.mock(/\/user\/login/, /post/i, { 'code': 20000, 'data': { 'token': 'admin' }})
Mock.mock(/\/user\/loginout/, /post/i, { 'code': 20000, 'data': { 'token': 'admin' }})