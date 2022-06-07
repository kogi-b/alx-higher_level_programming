#include "lists.h"


/**
  *is_palindrome - a function that checks if a number is a palindrome.
  *@head: the head of the list.
  *Return: 0 when error and 1 when it is.
  */

int is_palindrome(listint_t **head)
{
int len, i = 0, j = 0, a;
int *n;
listint_t *tm;
if (!(*head))
return (0);
len = get_len(*head);
if (len == 0)
return (1);
n = malloc(sizeof(int) * len);
if (!n)
return (0);
tm = *head;
while (tm)
{
n[i] = tm->n;
tm = tm->next;
i++;
}
for (i = 0, j = len - 1, a = 0; a < len / 2 && n[i] != '\0'; i++, j--, a++)
{
if (n[i] != n[j])
{
free(n);
return (0);
}
}
free(n);
return (1);
}

/**
  *get_len - return len of a linked list.
  *@head: the head of the list.
  *Return: len
  */

int get_len(listint_t *head)
{
int len;
listint_t *tm = head;
while (tm)
{
len++;
tm = tm->next;
}
return (len);
}
