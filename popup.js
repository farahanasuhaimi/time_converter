function convertTimezone(dateTimeString, sourceTimezone, targetTimezone) {
  // Parse the input date and time
  const inputDateTime = luxon.DateTime.fromISO(dateTimeString, { zone: sourceTimezone });

  // Convert to the target time zone
  const convertedDateTime = inputDateTime.setZone(targetTimezone);

  // Format the result as a string
  return convertedDateTime.toISO({ suppressMilliseconds: true });
}

document.addEventListener('DOMContentLoaded', function () {
  const convertButton = document.getElementById('convert-button');
  const inputDateTime = document.getElementById('date-time-input');
  const sourceTimezoneSelect = document.getElementById('source-timezone');
  const targetTimezoneSelect = document.getElementById('target-timezone');

  convertButton.addEventListener('click', () => {
    const dateTimeString = inputDateTime.value;
    const sourceTimezone = sourceTimezoneSelect.value;
    const targetTimezone = targetTimezoneSelect.value;
    const convertedTime = convertTimezone(dateTimeString, sourceTimezone, targetTimezone);

    // Display the converted time
    document.getElementById('converted-time').textContent = convertedTime;
  });
});
