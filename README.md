# Hey.js

Completely customizable & dependency free Javascript dialogs.

## Alerts

### heyAlert

```
<button onclick="heyAlert.show('This is just a test...')">heyAlert</button>
```

### heyAlert w/ HTML

```
<button onclick="heyAlert.show('<h3>Hey!</h3><p>A custom alert dialog.</p><img src=\'http://dummyimage.com/200/3676f5/fff.jpg&text=image\'>')">heyAlert w/ HTML</button>
```

## Confirms

```

heyConfirm.show('[plain text or html message]','[name_of_function_to_run]')

```

### Example

```
<button onclick="heyConfirm.show('<p>Are you sure you want to delete this text?</p>','deleteText')">Delete This Text</button>
```

## Prompts

```
heyPrompt.show('[plain text or html message]','[name_of_function_to_run]')
```

### Example

```
<button onclick="heyPrompt.show('<p>Enter text to replace</p>','changeText')">Change Text</button>
```
