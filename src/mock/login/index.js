import Mock from 'mockjs'

Mock.mock(/\/user\/login/, /post/i, { 'code': 20000, 'data': { 'token': 'admin' }})
Mock.mock(/\/user\/logout/, /post/i, { 'code': 20000, 'data': { 'token': 'admin' }})
Mock.mock(/\/user\/info/, /get/i, { 'code': 20000, 'data': { 'roles': ['admin'], 'name': 'admin', 'avatar': '' }})
