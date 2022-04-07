import { getFirestore } from 'firebase-admin/firestore'
import { initializeApp, getApps, cert } from 'firebase-admin/app'

export const apps = getApps()

if (!apps.length) {
    initializeApp({
        credential: cert({
          projectId: process.env.FBA_PROJECTID, //"quadrangle-161a5",
          clientEmail: process.env.FBA_CLIENTEMAIL, // "firebase-adminsdk-vlvhh@quadrangle-161a5.iam.gserviceaccount.com",
          // replace `\` and `n` character pairs w/ single `\n` character
          privateKey: process.env.FBA_PRIVATEKEY?.replace(/\\n/g, '\n'), //"-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCzhUeiJRx/SkbG\n2mKa6nTOWybnaSs+F5g/xvi7bi9uJ9JiAUaJCZUJnSzJMmfQISdHJqTnSesFs/SX\nm6hWygoVj2C1qbHEbotlU3hAiucpS+IjHj3YbYDT97lycA4x/aNQWbLwl4+wZxJx\naJl02vtU7IOLfuZwa1B5RWX+RV5XOFU8OWDlfTJIXs4j2Byn56Daw7UMM0FN25TX\n841DYd4UBV81Gs1Y5nkW4b+JbALx6VIt+XmRPOfnEWeuQur/+w1VJEot5K47U4by\neHC4CAhfsaPtZzluVqSUygJaL3FQAgST3j49pKf6QOpa2HUt0IWVXqzM4Y+9Dhoc\nGE4QrY5/AgMBAAECggEAUm3EMoNvzlLApNXpqNA2yfm4p1D29g/HbKFj3Ev/o0jN\npQqI5Kttr3hn9Aoc+MgATP9FgJ3EOF4k1Og4J4Gll7i54zAD2/oWL3RgJuKguamK\nMC3Wn+XH3YxFrnIdUn7v2hkVvLsa0xjAsyogLDPQa3IeBJNEJCJiVQy0hEg9xTXl\nazX1iHu7phd2L361rT70LlTz8hEH9MikQZaEDw4MRYEc4ZYri+vRrJQcm3pOJbMX\n4Myy8gd0Hdf4BP2+SqX37jvE6dnUN++QLDH0UHWRu7nX0d6VcYx6zKy5NkYP9Y9j\npPEvDuPaZYsXfRwI6sV5g1lvrNYaeyftYw0/8vPq4QKBgQD5cV6uvpO4oH1WSl6j\nlb+4wX4FQfmh1nGtwC/85RypnenupblG4Sk98exgaq/4mdpjqpL56D0qZMTC6i7D\nMjyK4pfjsUCj/rD9te8doze53SnAHMEYHwE58H4y5nWGiX1/vRq6nc6csuEb3rC4\nOk3gC3WENdjedv49I7X0JlTkNQKBgQC4PV35Lwi/KVWkByr1Ru3xchy6/mrPxazc\n5jGzpJceT/LsxuPqJ6PvFhKXpUtbTIMPJeJDpNO4+NsJ/nUcMkwvLUSbQIWz2zY4\njko7AJWfP+fbAQSIR8wBLRjANzHiX56b36waKv1nlmkwlrxkuWcL9Xw9duU9dlzV\nBCLCc2HWYwKBgEvjA60h6YsHuFniMjyOOE+a/h3XXnyv4tG7YF4NzdSEaEDkRiOc\nKJHh4cnLa1G0bM5ZfHFvB/y3v2yVFjjoNacDHLZ2nHXH7EyjZuWbXD69XBBILy6J\ncDQSSDJwDl0pwvZzr4gKrmrZuMZjz1uc0UhR9CSOxTWY+evby2VFrBnpAoGAXC4o\nFILZ53sw5C7J6YqhhopHoa+llWscADIUcANLsNjjfGBOrFtFBFyQ1NrZB0cS08Nq\nn9maLRQl06xCv+bSg1As4Vi5DLIDQOzAayDxu4nn4YVy1RTHF1eO6K01AkRBQU/5\n9eXIf8mbu7nPbL3utucOUFpqfAP6koHNOmksbG0CgYBpX1pR8a2G8Qhicgeg8f7f\nsK3wKQKFITJZYlYVVYCEz7IB4rLJT560dd2FFSmV3j4IjPbEdTf8wwGHIIL4LQ/7\n5KloeGG30upj9hko/8yZlonHvogjMi+st6/fS+MiV0kq3ZuUvvIUnRC9O5suY89B\nF/30Nyw8bXFC0pUaLCN+lg==\n-----END PRIVATE KEY-----\n".replace(/\\n/g, '\n'),
        })
    })
}

export const db = getFirestore()