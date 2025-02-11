import test, { expect } from '@playwright/test'

// các test case sẽ chạy song song
test.describe.parallel('Testing API', () => {
  const basURL = 'https://reqres.in'

  test('Assert response status', async ({ request }) => {
    const response = await request.get(`${basURL}/api/users/2`)
    expect(response.status()).toBe(200)

    const resBody = JSON.parse(await response.text()) //lấy ra data
    // console.log('🚀 ~ test ~ resBody:', resBody)
  })

  test('Assert invalid Endpoint', async ({ request }) => {
    const response = await request.get(`${basURL}/api/users/non-user-existent`)
    expect(response.status()).toBe(404)
  })

  test('GET detail user', async ({ request }) => {
    const response = await request.get(`${basURL}/api/users/2`)
    const resBody = JSON.parse(await response.text())

    expect(response.status()).toBe(200)
    expect(resBody.data.id).toBe(2)
    expect(resBody.data.email).toBeTruthy()
  })

  test('POST create new user', async ({ request }) => {
    const response = await request.post(`${basURL}/api/users`, {
      data: {
        id: 1000,
        name: 'Chi sau dam boc',
        job: 'automation tester',
      },
    })
    const resBody = JSON.parse(await response.text())
    // console.log('🚀 ~ test ~ resBody:', resBody)
    expect(resBody.id).toBe(1000)
    expect(resBody.name).toBe('Chi sau dam boc')
    expect(resBody.job).toBe('automation tester')
  })

  test('POST login', async ({ request }) => {
    const response = await request.post(`${basURL}/api/login`, {
      data: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      },
    })
    const resBody = JSON.parse(await response.text())
    // console.log('🚀 ~ test ~ resBody:', resBody)

    expect(response.status()).toBe(200)
    expect(resBody.token).toBeTruthy()
  })

  test('POST login fail', async ({ request }) => {
    const response = await request.post(`${basURL}/api/login`, {
      data: {
        email: 'peter@klaven',
      },
    })
    const resBody = JSON.parse(await response.text())
    // console.log('🚀 ~ test ~ resBody:', resBody)

    expect(response.status()).toBe(400)
    expect(resBody.error).toBeTruthy()
  })

  test('PUT Update user success', async ({ request }) => {
    const response = await request.put(`${basURL}/api/users/2`, {
      data: {
        name: 'morpheus',
        job: 'zion resident',
      },
    })
    const resBody = JSON.parse(await response.text())
    // console.log('🚀 ~ test.only ~ resBody:', resBody)

    expect(response.status()).toBe(200)
    expect(resBody.name).toBe('morpheus')
    expect(resBody.job).toBe('zion resident')
    expect(resBody.updatedAt).toBeTruthy()
  })

  test('DELETE user success', async ({ request }) => {
    const response = await request.delete(`${basURL}/api/users/2`)
    expect(response.status()).toBe(204)
  })
})
