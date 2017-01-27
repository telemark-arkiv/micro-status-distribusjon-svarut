'use strict'

module.exports = (data) => {
  let status = []
  status.push({name: 'jobs', status: data.jobs || 0})
  status.push({name: 'errors', status: data.errors || 0})
  status.push({name: 'done', status: data.done || 0})
  status.push({name: 'retries', status: data.retries || 0})

  return status
}
