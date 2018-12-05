const ERRORS = {
  '400': 'Bad Request. The request was unacceptable, often due to a missing or misconfigured parameter.',
  '401': 'Unauthorized. Your API key was missing from the request, or wasn\'t correct.',
  '429': 'Too Many Requests. You made too many requests within a window of time and have been rate limited. Back off for a while.',
  '500': 'Server Error. Something went wrong on our side.'
}

export default ERRORS;